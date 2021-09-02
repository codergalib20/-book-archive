// Html Stracture Added_____
const searchFiled = document.getElementById('search-filed');
const searchBtn = document.getElementById('search-btn');
const resultBooks = document.getElementById('result');
const totalItem = document.getElementById('total-item');
const errorShow = document.getElementById('show-error');

const bookName = name => {
    fetch(`http://openlibrary.org/search.json?q=${name}`)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
        // .catch(error => console.log(error));
}

// Event Listener_____
searchBtn.addEventListener('click', () => {
    // Book Name Send Form Input
    if (searchFiled.value !== '') {
        bookName(searchFiled.value);
        errorShow.innerText = ''
    } else {
        errorShow.innerText = 'Give me a book name!'
    }
   // Clear Search Filed
    searchFiled.value = '';
})

const displayBook = books => {
    resultBooks.innerHTML = '';
     books.forEach(book => {
         const bookCover = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        // Add Display Every Single Book__________
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = 
        `
        <div class="book-img">
           <img src="${bookCover}" alt="">
        </div>
        <div class="book-info">
            <h2>Book Name : ${book.title}<h2>
            <h3>Author Name : ${book.author_name}<h3>
            <h4>Publisher Name : ${book.publisher}</h4>
            <h5>First Publish Year : ${book.first_publish_year}</h5>
        </div>
        `;
         resultBooks.appendChild(bookItem);
     });
    totalItem.innerHTML = books.length;
}


/* 
1. display book name
2. display author name
3. display first publish date
4. display multiple result
5. display total search result
6. display no result is found error
FOR BONUS
1. use arrow function
2. use forEach loop
3. use triple equal
4. display book cover
 */



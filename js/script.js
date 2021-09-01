// Html Stracture Added_____
const searchFiled = document.getElementById('search-filed');
const searchBtn = document.getElementById('search-btn');
const resultBooks = document.getElementById('result');


const bookName = name => {
    fetch(`http://openlibrary.org/search.json?q=${name}`)
    .then(res => res.json())
    .then(data => displayBook(data.docs));
}

// Event Listener_____
searchBtn.addEventListener('click', () => {
    // Book Name Send Form Input
    bookName(searchFiled.value);   

   // Clear Search Filed
   searchFiled.value = '';
})

const displayBook = books => {
     books.forEach(book => {
         const bookCover = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
         const bookAuthors = `https://openlibrary.org/authors/${book.authhorKey}.json`
          console.log(book);
        //   console.log(bookCover);
        //   console.log(bookAuthors)
        
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item')
        bookItem.innerHTML = 
        `
        <div>
           <img src="${bookCover}" alt="">
        </div>
        <h2>${book.author_name}<h2>
        <h2>${book.publisher}</h2>
        <h2>${book.publish_date}</h2>
        `;
        resultBooks.appendChild(bookItem);
     });
}
const allBooks = document.getElementById('result');
const bookTotals = document.getElementById('totals');
const searching = document.getElementById('searching');
const searchText = document.getElementById('search-filed');


document.getElementById('search-btn').addEventListener('click', () => {
    searching.innerHTML = `
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    `
        const url = `https://openlibrary.org/search.json?q=${searchText.value}`
        searchText.value = '';
        fetch(url)
        .then(res => res.json())
        .then(data=>showBook(data))
 
})
const showBook = books => {
    const allWebBook = books.numFound
    books = books.docs
    const newArr = books.filter(book => book.cover_i !== undefined && book.author_name !== undefined && book.publisher !== undefined && book.title !== undefined && book.first_publish_year !== undefined)
    if (newArr.length === 0) {
        bookTotals.innerHTML = '';
        allBooks.innerHTML = '';
        searching.innerHTML='NO RESULT FOUND'
    }
    // else {
        const searchingResult = document.createElement('h5')
        searchingResult.classList.add('searching-result')
        searchingResult.innerHTML = `Showing result ${newArr.length} of ${allWebBook}`
        bookTotals.innerHTML = '';
        bookTotals.appendChild(searchingResult)

        searching.innerHTML = '';
        allBooks.innerHTML = '';
        newArr.forEach(book => {
            // Create and Update EverySingle Book item
            const newDiv = document.createElement('div')
            newDiv.classList.add('book-item')
            newDiv.innerHTML = 
            `  <div class="book-img">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
               </div>
               <div class="book-info">
                    <h2>Book Name : ${book.title}<h2>
                    <h3>Author Name : ${book.author_name}<h3>
                    <h4>Publisher Name : ${book.publisher}</h4>
                    <h5>First Publish Year : ${book.first_publish_year}</h5>
                </div>
            `
            allBooks.appendChild(newDiv)
        })
        
    }

// }
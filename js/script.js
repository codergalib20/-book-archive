// Html Stracture Added_____
const searchFiled = document.getElementById('search-filed');
const searchBtn = document.getElementById('search-btn');

const bookName = name => {
    fetch(`http://openlibrary.org/search.json?q=${name}`)
    .then(res => res.json())
    .then(data => displayBook(data));
}

// Event Listener_____
searchBtn.addEventListener('click', () => {
    // Book Name Send Form Input
    bookName(searchFiled.value);   

   // Clear Search Filed
   searchFiled.value = '';
})

const displayBook = name => {
    console.log(name);
}
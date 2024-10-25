

function showBooks() {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = '';
    gBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <h3>${book.name}</h3>
            <p>price: ${book.price} ₪</p>
            <img src=${book.image} alt=${book.name}/>
            <button onclick="getBook(${book.id})">Read</button>
            <button onclick="editBook(${book.id})">Edit</button>
            <button onclick="deleteBook(${book.id})">Delete</button>

        `;
        
        booksContainer.appendChild(bookDiv);
    });
}


function getBook(bookId) {
    const book = gBooks.find(book => book.id === parseInt(bookId));
}

function editBook(bookId) {
    const book = gBooks.find(book => book.id === parseInt(bookId));
}

function deleteBook(bookId) {
    gBooks.filter(book => book.id !== parseInt(bookId));
}

document.getElementById('showBooksBtn').addEventListener('click', showBooks);
generatePaginator(gBooks);

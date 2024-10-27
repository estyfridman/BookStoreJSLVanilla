function main() {
  const storageBooks = JSON.parse(localStorage.getItem("books")) || [];

  if (storageBooks.length) {
    renderBooks(storageBooks, 1);
    generatePaginator(storageBooks);
  } else {
    renderBooks(Gbooks, 1);
    localStorage.setItem("books", JSON.stringify(Gbooks));
    generatePaginator(Gbooks);
  }
};

function sortBooks() {
  const storageBooks = JSON.parse(localStorage.getItem("books")) || [];
  const sortOption = document.getElementById("sortOptions").value;

  let sortedBooks;
  switch (sortOption) {
    case "name": {
      sortedBooks = storageBooks.sort((a, b) => a.name.localeCompare(b.name));
      break;
    }
    case "toHigh": {
      sortedBooks = storageBooks.sort((a, b) => a.price - b.price);
      break;
    }
    case "toLow": {
      sortedBooks = storageBooks.sort((a, b) => b.price - a.price);
      break;
    }
  }
  
  renderBooks(sortedBooks, currentPage);
  generatePaginator(sortedBooks);
};

function deleteBook(id) {
  const storageBooks = JSON.parse(localStorage.getItem("books"));
  const updatedBooks = storageBooks.filter((book) => book.id !== id);

  localStorage.setItem("books", JSON.stringify(updatedBooks));
  renderBooks(updatedBooks, currentPage); 
  generatePaginator(updatedBooks); 
  clearSideBar();
};

function readBook(id) {
  const storageBooks = JSON.parse(localStorage.getItem("books"));
  const book = storageBooks.find((book) => book.id === id);
  renderReadBook(book);
};

function addRate(id) {
  rate = document.getElementById("rate").value;
  let storageBooks = JSON.parse(localStorage.getItem("books"));

  const book = storageBooks.find((book) => book.id === id);
  book.rate = rate;
  localStorage.setItem("books", JSON.stringify(storageBooks));
  document.getElementById("rate-text").innerText = `Rate: ${rate}`;
};

function edit(id) {
  const storageBooks = JSON.parse(localStorage.getItem("books"));
  const book = storageBooks.find((book) => book.id === id);
  editInView(book);
};

function saveChanges(id) {
  const storageBooks = JSON.parse(localStorage.getItem("books"));
  let book;

  if (id != null) {
    book = storageBooks.find((book) => book.id === id);
  } else {
    const lastBook = storageBooks[storageBooks.length - 1];
    book = {
      id: lastBook ? lastBook.id + 1 : 1, 
      name: "",
      price: 0,
      rate: 0,
      image: "",
    };
    storageBooks.push(book);
  }

  book.name = document.getElementById("edit-name").value;
  book.price = document.getElementById("edit-price").value;
  book.rate = document.getElementById("rate").value;
  let inputValue = document.getElementById("edit-image").value;

  book.image = `assets/${inputValue.replace(/\s+/g, "")}.jpg`;
  localStorage.setItem("books", JSON.stringify(storageBooks));

  renderBooks(storageBooks, currentPage); // Reset to the current page after saving
  generatePaginator(storageBooks); // Regenerate the paginator
  showSuccessMessage("Book saved successfully!");
};

function newBook() {
  editInView(null);
};

function loadBooks() {
  localStorage.clear();
  currentPage = 1;

  localStorage.setItem("books", JSON.stringify(Gbooks));

  renderBooks(Gbooks, currentPage);
  generatePaginator(Gbooks);
}

main();

// function showAllBooks() {
//   const booksContainer = document.getElementById("booksContainer");
//   booksContainer.innerHTML = "";
//   gBooks.forEach((book) => {
//     const bookDiv = document.createElement("div");
//     bookDiv.classList.add("book");

//     bookDiv.innerHTML = `
//             <h3>${book.name}</h3>
//             <p>price: ${book.price} ₪</p>
//             <img src=${book.image} alt=${book.name}/>
//             <button onclick="getBook(${book.id})">Read</button>
//             <button onclick="editBook(${book.id})">Edit</button>
//             <button onclick="deleteBook(${book.id})">Delete</button>
//         `;

//     booksContainer.appendChild(bookDiv);
//   });
// }

// function addBook(id, name, price, image, author) {
//   const newBook = {name, price, image, author};

// }

// function editBook(bookId) {
//   const book = gBooks.find((book) => book.id === parseInt(bookId));
// }

// function deleteBook(bookId) {
//   const index = gBooks.findIndex((b) => b.id === bookId);
//   if (index !== -1) {
//     let title = gBooks[index].title;
//     gBooks.splice(index, 1);
//     localStorage.removeItem(key, JSON.stringify(obj));

//     alert(`Book "${title}" deleted successfully!`);
//   } else {
//     alert(`The book "${title}" was not found!`);

//   }
// }

// const getStarRating = (rating) => {
//   let stars = "";
//   for (let i = 1; i <= 5; i++) {
//     stars += `<span class="star ${i <= rating ? "filled" : ""}">&#9733;</span>`;
//   }
//   return stars;
// };

// function changeRating(bookId, rating) {

//     if (rating < 1 || rating > 5) {
//         alert('the rating must be between 1-5');
//         return
//     }
//     const book = gBooks.find((b) => b.id === bookId);
//     if (book) {
//         alert('Book not found');
//         return
//     }

//     book.rating.rating.push(newRating);
//     book.rating.ratingCount++;
//     book.rating.averageRating =
//     book.rating.rating.reduce((a, b) => a + b, 0) / book.rating.ratingCount;
//     localStorage.setItem(`book_${book.id}`, JSON.stringify(book));
//     //renderBooks??
// }

// //document.getElementById("showBooksBtn").addEventListener("click", showAllBooks);
// //generatePaginator(gBooks);

// function renderTable(books, page) {
//   const booksContainer = document.getElementById("table-container");
//   booksContainer.innerHTML = "";

//   const startIndex = (page - 1) * booksPerPage;
//   const endIndex = startIndex + booksPerPage;
//   const booksToShow = books.slice(startIndex, endIndex);

//   const table = document.createElement("table");
//   table.classList.add("books-table");

//   const headerRow = document.createElement("tr");
//   headerRow.innerHTML = `
//       <th>Id</th>
//       <th>Title</th>
//       <th>Price</th>
//       <th>Actions</th>
//   `;
//   table.appendChild(headerRow);

//   booksToShow.forEach((book) => {
//       const row = document.createElement("tr");

//       row.innerHTML = `
//           <td>${book.id}</td>
//           <td>${book.title}</td>
//           <td>${book.price}</td>
//           <td>
//               <button onclick="getBook(${book.id})">Read</button>
//               <button onclick="editBook(${book.id})">Edit</button>
//               <button onclick="deleteBook(${book.id})">Delete</button>
//           </td>
//       `;

//       table.appendChild(row);
//   });

//   booksContainer.appendChild(table);
// }

// function loading() {
// //   gBooks.forEach((book) => {
// //     localStorage.setItem(`book_${book.id}`, JSON.stringify(book));
// // });

//   localStorage.setItem('gBooks', JSON.stringify(gBooks));
//   renderTable(gBooks, currentPage);
//   generatePaginator(gBooks);

//let gBooks = [];
// for (let i = 1; i < Book.counter; i++) {
//     const bookData = localStorage.getItem(`book_${i}`);
//     if (bookData) {
//         gBooks.push(JSON.parse(bookData));
//     }
// }
//showAllBooks(storedBooks)
//}

// document.addEventListener('DOMContentLoaded', (event) => {
//   loading();
// });

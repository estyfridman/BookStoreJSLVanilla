
function generatePaginator(books) {
  const paginatorDiv = document.getElementById("paginator");
  paginatorDiv.innerHTML = ""; 

  const totalPages = Math.ceil(books.length / booksPerPage); 

  // Previous button
  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";
  prevButton.disabled = currentPage === 1; 
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderBooks(books, currentPage);
      generatePaginator(books); 
    }
  });
  paginatorDiv.appendChild(prevButton);

  // Page buttons
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;

    if (i === currentPage) {
      button.classList.add("active"); 
    }

    button.addEventListener("click", () => {
      currentPage = i;
      renderBooks(books, currentPage);
      generatePaginator(books); 
    });

    paginatorDiv.appendChild(button);
  }

  // Next button
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.disabled = currentPage === totalPages; 
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderBooks(books, currentPage);
      generatePaginator(books); 
    }
  });
  paginatorDiv.appendChild(nextButton);
}

const renderBooks = (books, page) => {
    const startIndex = (page - 1) * booksPerPage;
    const endIndex = page * booksPerPage;
  
    const items = document.getElementById("items");
    items.innerHTML = ""; 
  
    books.slice(startIndex, endIndex).forEach((book) => {
      items.innerHTML += getBook(book);
    });
    highlightCurrentPage(currentPage); 
  };

const getBook = (book) => {
  return `
    <div class = "book">
    <p class="id">${book.id}</p>
    <p class="ptitle">${book.name}</p>
    <p class="price"> ₪${book.price}</p>
     <div class="buttons">   
    <button class="read" onclick="readBook(${book.id})">read</button>
    <button class="edit" onclick="edit(${book.id})">edit</button>
    <button class="delete" onclick="deleteBook(${book.id})">Delete</button>
</div>
    </div>`;
};
const renderReadBook = (book) => {
  var sidebar = document.getElementById("side-bar");
  sidebar.innerHTML = ""; 
  sidebar.innerHTML = `
        <div class="read-book">
            <h1>${book.name}</h1>
            <p>Price: ₪${book.price}</p>
            <h2 id=rate-text>Rate: ${book.rate}</h2>
            <input type="number" id="rate" placeholder="Enter rate">
            <button onclick="addRate(${book.id})">Add rate</button>
            <img src="${book.image}" alt="Read-Book">
        </div>`;
};

function clearSideBar() {
  var sidebar = document.getElementById("side-bar");
  sidebar.innerHTML = "choose book";
};

function highlightCurrentPage(currentPage) {
    const buttons = document.querySelectorAll("#paginator button");
  
    buttons.forEach((button, index) => {
      if (index + 1 === currentPage) {
        button.style.backgroundColor = "lightblue"; 
      } else {
        button.style.backgroundColor = ""; 
      }
    });
};

function editInView(book){
  var sidebar = document.getElementById("side-bar");
  sidebar.innerHTML = `
        <div class="edit-book">
            <h1>Edit Book</h1>
            <input type="text" id="edit-name" placeholder="Enter name" value="${
              book ? book.name : ""
            }">
            <input type="number" id="edit-price" placeholder="Enter price" value="${
              book ? book.price : 0
            }">
            <input type="number" id="rate" placeholder="Enter rate" value="${
              book ? book.right : 0
            }>
            <input type="text" id="edit-image" placeholder="Enter image URL" value="${
              book ? book.image : ""
            }">
            <input type="text" id="edit-image" placeholder="Enter image URL" value="${
              book ? book.image : ""
            }">
            <button onclick="saveChanges(${
                book ? book.id : null})">Save changes</button>
        </div>;`
};

function showSuccessMessage(message){
    const sidebar = document.getElementById("side-bar");
    sidebar.innerHTML = `<div class="success-message">${message}</div>`;
    setTimeout(() => {
        sidebar.innerHTML = "choose book";
    }, 3000);
};
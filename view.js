let currentPage = 1;
const booksPerPage = 6;

function generatePaginator(books) {
    const paginatorDiv = document.getElementById("paginator");
    paginatorDiv.innerHTML = ""; 
    const totalPages = Math.ceil(books.length / booksPerPage); 
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
  

const showMessage = (message, type) => {
    const notificationArea = document.getElementById("notificationArea");

    // (type === 'success') ? notificationDiv.classList.add('success') : notificationDiv.classList.add('error');
    notificationArea.innerHTML = `<div class=${type}>${message}</div>`;

    setTimeout(() => {
        notificationArea.innerHTML = " ";
        notificationArea.classList.remove('*');
    }, 3000);
};
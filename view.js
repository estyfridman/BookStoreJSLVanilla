let currentPage = 1;
const booksPerPage = 6;



const showMessage = (message, type) => {
    const notificationArea = document.getElementById("notificationArea");

    // (type === 'success') ? notificationDiv.classList.add('success') : notificationDiv.classList.add('error');
    notificationArea.innerHTML = `<div class=${type}>${message}</div>`;

    setTimeout(() => {
        notificationArea.innerHTML = " ";
        notificationArea.classList.remove('*');
    }, 3000);
};
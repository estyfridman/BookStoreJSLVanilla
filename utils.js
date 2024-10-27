
function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function getObjFromLS(key) {
    return JSON.parse(getFromLocalStorage(key));
}

function saveObjToLS(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getBookById(id) {
    return books.find(b => b.id === id);
}
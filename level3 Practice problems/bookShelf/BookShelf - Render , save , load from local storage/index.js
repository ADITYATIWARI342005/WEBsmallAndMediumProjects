let books = loadBooksFromLocalStorage() || [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    if (bookName) {
        books.push({ name: bookName, read: false });
        renderBooks();
        document.getElementById('bookName').value = '';
        saveBooksToLocalStorage();
    }
}

function toggleRead(index) {
    books[index].read = !books[index].read;
    renderBooks();
    saveBooksToLocalStorage();
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
    saveBooksToLocalStorage();
}

function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.name} <button class="delete" onclick="deleteBook(${index})">Delete</button>`;
        li.className = book.read ? 'read' : '';
        li.onclick = () => toggleRead(index);
        bookList.appendChild(li);
    });
}

function saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function loadBooksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('books'));
}

renderBooks();
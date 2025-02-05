const Book = {
    getAll: (callback) => {
        db.query("SELECT * FROM books", callback);
    },
    getById: (id, callback) => {
        db.query("SELECT * FROM books WHERE id = ?", [id], callback);
    },
    create: (bookData, callback) => {
        db.query("INSERT INTO books (title, author) VALUES (?, ?)", [bookData.title, bookData.author], callback);
    },
    update: (id, bookData, callback) => {
        db.query("UPDATE books SET title = ?, author = ? WHERE id = ?", [bookData.title, bookData.author, id], callback);
    },
    delete: (id, callback) => {
        db.query("DELETE FROM books WHERE id = ?", [id], callback);
    }
};

module.exports = Book;
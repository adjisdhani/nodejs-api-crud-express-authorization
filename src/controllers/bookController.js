const Book = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
    Book.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getBookById = (req, res) => {
    Book.getById(req.params.id, (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ message: "Book not found" });
        res.json(results[0]);
    });
};

exports.createBook = (req, res) => {
    console.log(req.body);
    
    const { title, author } = req.body;
    Book.create({ title, author }, (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: "Book created" });
    });
};

exports.updateBook = (req, res) => {
    const { title, author } = req.body;
    Book.update(req.params.id, { title, author }, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Book updated" });
    });
};

exports.deleteBook = (req, res) => {
    Book.delete(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Book deleted" });
    });
};
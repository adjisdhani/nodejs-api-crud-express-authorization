const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', roleMiddleware(['admin']), bookController.getAllBooks);
router.get('/:id', roleMiddleware(['admin', 'user']), bookController.getBookById);
router.post('/', roleMiddleware(['admin']), bookController.createBook);
router.put('/:id', roleMiddleware(['admin']), bookController.updateBook);
router.delete('/:id', roleMiddleware(['admin']), bookController.deleteBook);

module.exports = router;
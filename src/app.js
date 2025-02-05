require('dotenv').config();
require('./utils/dbInstance');

global.express     = require('express');
const bodyParser   = require('body-parser');
const bookRoutes   = require('./routes/bookRoutes');

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use('/api/books', bookRoutes);

module.exports = {
  app
};
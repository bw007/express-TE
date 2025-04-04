const express = require('express');
const router = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');

app.use(indexRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

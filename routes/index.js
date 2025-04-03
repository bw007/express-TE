const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home', data: [{ name: 'Laziz', age: 25 }] });
});

module.exports = router;
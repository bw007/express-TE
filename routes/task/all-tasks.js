const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Bosh sahifa' });
});

module.exports = router;
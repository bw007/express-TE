const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('create-form', {
    title: 'Create Task'
  });
});

module.exports = router;
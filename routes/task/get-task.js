const { Router } = require('express');
const router = Router({ mergeParams: true });
const path = require('path');
const createFileHandler = require('../../utils/fileOperations');

const { readFile } = createFileHandler()

router.get('/', (req, res) => {
  readFile((tasks = []) => {
    const task = tasks.find((item) => item.id == req.params.id)
    
    res.render('edit-form', { title: 'Update Task', task });
  })
});

module.exports = router;
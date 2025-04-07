const { Router } = require('express');
const router = Router();
const createFileHandler = require('../../utils/fileOperations');

const { readFile } = createFileHandler()

router.get('/', (req, res) => {
  readFile((tasks) => {    
    res.render('index', { title: 'Bosh sahifa', tasks });
  });
});

module.exports = router;
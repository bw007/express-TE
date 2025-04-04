const { Router } = require('express');

const router = Router();

const fs = require('fs');
const path = require('path');
const { MESSAGES } = require('../../utils/messages');

const filePath = path.join(__dirname, '../..', 'data/data.json');

router.post('/', (req, res) => {
  const { title, description } = req.body;
    
  fs.readFile(filePath, 'utf8', (err, data) => {
    let tasks = [];
    if (!err) tasks = JSON.parse(data);

    const newId = tasks.length > 0 ? Math.max(...tasks.map(book => book.id || 0)) + 1 : 1;
    const newTask = { id: newId, title, description, status: 0 };
    tasks.push(newTask);
    
    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf-8', (err) => {
      if (err) {
        return res.status(500).send(MESSAGES.ERROR[500]);
      }
      res.redirect('/');
    });

  });

});

module.exports = router;
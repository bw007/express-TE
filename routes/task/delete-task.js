const { Router } = require('express');
const createFileHandler = require('../../utils/fileOperations');
const MESSAGES = require('../../utils/messages');
const router = Router({ mergeParams: true });

const { readFile, writeFile } = createFileHandler()

router.delete('/', (req, res) => {
  const taskId = req.params.id;
  
  if (!taskId) {
    return res.status(400).send(MESSAGES.ERROR[400]);
  }

  readFile((tasks = []) => {
    const taskExists = tasks.some((item) => item.id == taskId);
    if (!taskExists) {
      return res.status(404).send(MESSAGES.ERROR[404]);
    }
    
    tasks = tasks.filter(task => task.id != taskId);
    
    writeFile(tasks, (err) => {
      if (err) return res.status(500).send(MESSAGES.ERROR[500]);
      res.status(200).send(MESSAGES.SUCCESS[200]);
    });
  })
});

module.exports = router;
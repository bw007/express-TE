const createFileHandler = require("../../utils/fileOperations");
const MESSAGES = require("../../utils/messages");

const updateTask = (req, res) => {
  const { readFile, writeFile } = createFileHandler();
  const taskId = req.params.id;
  const { name, description } = req.body;
  const status = parseInt(req.body.status);
  
  if (!taskId) {
    return res.status(400).send(MESSAGES.ERROR[400]);
  }

  readFile((tasks = []) => {
    const taskExists = tasks.some((item) => item.id == taskId);
    if (!taskExists) {
      return res.status(404).send(MESSAGES.ERROR[404]);
    }
    
    tasks = tasks.map((item) => {
      if (item.id == taskId) {
        return { ...item, name, description, status };
      }
      return item;
    });
    
    writeFile(tasks, (err) => {
      if (err) return res.status(500).send(MESSAGES.ERROR[500]);
      res.redirect('/');
    });
  })
}

module.exports = {
  updateTask
}
const createFileHandler = require("../../utils/fileOperations");
const MESSAGES = require("../../utils/messages");

const createTask = (req, res) => {
  const { readFile, writeFile } = createFileHandler()
  const { name, description } = req.body;

  readFile((tasks) => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id || 0)) + 1 : 1;
    const newTask = { id: newId, name, description, status: 0 };
    tasks.push(newTask);
    
    writeFile(tasks, (err) => {
      if (err) return res.status(500).send(MESSAGES.ERROR[500]);
      res.redirect('/');
    });
  });
}

module.exports = {
  createTask
}
const createFileHandler = require("../../utils/fileOperations");

const getTask = (req, res) => {
  const { readFile } = createFileHandler();

  readFile((tasks = []) => {
    const task = tasks.find((item) => item.id == req.params.id)
    
    res.render('edit-form', { title: 'Update Task', task });
  })
}

module.exports = {
  getTask
}
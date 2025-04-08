const createFileHandler = require("../../utils/fileOperations");

const getAllTasks = async (req, res) => {
  const { readFile } = createFileHandler();

  readFile((tasks) => {
    res.render('index', { title: 'Bosh sahifa', tasks });
  });
}

module.exports = {
  getAllTasks
};
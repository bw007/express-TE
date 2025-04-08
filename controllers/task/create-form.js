const createForm = (req, res) => {
  res.render('create-form', {
    title: 'Create Task'
  });
}

module.exports = {
  createForm
}
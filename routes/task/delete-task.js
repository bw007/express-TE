const { Router } = require('express');
const { deleteTask } = require('../../controllers/task/delete-task');
const router = Router({ mergeParams: true });

router.delete('/', deleteTask);

module.exports = router;
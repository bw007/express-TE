const { Router } = require('express');
const router = Router();
const { createTask } = require('../../controllers/task/create-task');

router.post('/', createTask);

module.exports = router;
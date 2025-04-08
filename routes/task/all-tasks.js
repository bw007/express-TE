const { Router } = require('express');
const { getAllTasks } = require('../../controllers/task/get-allTasks');

const router = Router();

router.get('/', getAllTasks);

module.exports = router;
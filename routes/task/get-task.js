const { Router } = require('express');
const router = Router({ mergeParams: true });
const { getTask } = require('../../controllers/task/get-task');

router.get('/', getTask);

module.exports = router;
const { Router } = require('express');
const router = Router({ mergeParams: true });
const { updateTask } = require('../../controllers/task/update-task');

router.post('/', updateTask);

module.exports = router;
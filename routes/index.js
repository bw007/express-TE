const { Router } = require('express');
const router = Router();

router.use('/', require('./task/all-tasks'));
router.use('/task', require('./task/create-task')); 
router.use('/task/new', require('./task/create-form'));
router.use('/task/:id/edit', require('./task/get-task'));
router.use('/task/:id/update', require('./task/update-task'));
router.use('/task/:id/delete', require('./task/delete-task'));

module.exports = router;
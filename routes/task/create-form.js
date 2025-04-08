const { Router } = require('express');
const { createForm } = require('../../controllers/task/create-form');

const router = Router();

router.get('/', createForm);

module.exports = router;
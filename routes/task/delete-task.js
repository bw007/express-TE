const { Router } = require('express');

const router = Router();

const data = require('../../data/data.json');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/data.json');

router.post('/task/:id/delete', (req, res) => {
  
});

module.exports = router;
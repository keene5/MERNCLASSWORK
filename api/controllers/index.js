const express = require('express');
const itemsController = require('./itemsController');
const router = express.Router();

router.use('/items', itemsController);
console.log('router created in main controller index ' + router)

module.exports = router;
console.log(' exporting router main controller index ');
const express = require('express');
const router = express.Router();

const itemsService = require('../services/itemsService');
console.log('creating route in itemscontoller');
router.get('/', async(req, res) => {
    console.log('Hello from items controller');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    try{
     
        const items = itemsService.getAllItems();
        res.json(items);

    }
    catch(error){
        res.status(500).json({error: 'server error'});
    }
    
});
console.log('exporting router  in itemscontoller');
module.exports = router;

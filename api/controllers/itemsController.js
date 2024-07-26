const express = require('express');
const router = express.Router();

const Scenario = require('../model/model');

const itemsService = require('../services/itemsService');
const {addItem} = require('../services/itemsService');
console.log('creating route in itemscontoller');

router.get('/',  async(req, res) => {

    console.log('Hello from items get');
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

router.put('/:id', async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    console.log('Hello from items put resource');
    const body = req.body;
    console.log(body);


    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    try{
        const{scenarioId, description} = body;
        console.log(scenarioId + description);

        const requestScenario = new Scenario(scenarioId, description);
        console.log(requestScenario);
        addItem(requestScenario);
        res.json(requestScenario);

    }
    catch(error){
        res.status(500).json({error: 'server error'});
    }
    
});
console.log('exporting router  in itemscontoller');

module.exports = router;



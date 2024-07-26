const Scenario = require('../model/model');
let items = [];
const scenarioMap = new Map();
// class Scenario{
//     constructor(scenarioid, description){
//         this.scenarioid =scenarioid;
//         this.description = description;
//     }
// }

getAllItems =  () => {
    // console.log('tring to get all items in service');
    if(!items.length >0){
     const newScenario =  new Scenario("minAgeV0","Given a persons Age is 18 then MinAge = 18.");
    items.push(newScenario);
    }
    // console.log('itemsarray' + items);
    return items;
}

addItem =  (scenario) => {

    console.log('PUT SCENARIO' + this.scenario);
    if(scenario.scenarioid){
    scenarioMap.set(scenario.scenarioid,scenario);
    }
    // console.log('tring to get all items in service');
     console.log('scenarioMap' + scenarioMap);
     console.log('mAP' + scenarioMap);
    return scenarioMap;
}


module.exports = {
    getAllItems,addItem}


    
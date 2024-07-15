let items = [];
class Scenario{
    constructor(scenarioid, description){
        this.scenarioid =scenarioid;
        this.description = description;
    }
}

getAllItems =  () => {
    // console.log('tring to get all items in service');
    if(!items.length >0){
     const scenario = new Scenario("minAgeV0","Given a persons Age is 18 then MinAge = 18.");
    items.push(scenario);
    }
    // console.log('itemsarray' + items);
    return items;
}


module.exports = {
    getAllItems}
    
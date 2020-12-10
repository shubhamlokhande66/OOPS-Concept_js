/*****************************************************************
 * @Purpose : Inventory Management 
 * @description : Read and writes data into json file
 * @file : InvntoryManagemntBusinessLogic.js
 * @author: Shubham LOkhande
 * @since : 12-10-2020
 *****************************************************************/
const fs = require('fs');

let data = fs.readFileSync('./InventoryData.json');
let inventoryData = JSON.parse(data);
/** 
 * @module - it will add new rice type to json file
 * @param {string} name
 * @param {number} price
 * @param {number} weight
*/

function addRice(name, price, weight){
    let newRice = {
        "name" : name,
        "price" : price,
        "weight" : weight
    }
    inventoryData.rice[inventoryData.rice.length] = newRice
    for(let i=0; i<inventoryData.rice.length; i++ ) {
       //Total price Calculated
        inventoryData.rice[i].totalprice = 
        parseInt (inventoryData.rice[i].price) * parseInt (inventoryData.rice[i].weight)
    }
    fs.writeFileSync('./InventoryData.json', JSON.stringify(inventoryData, null, 2));
    console.log(JSON.stringify(inventoryData.rice[inventoryData.rice.length-1]) +"added to JSON data")
}

/** 
 * @module - it will add new pulses type to json file
 * @param {string} name
 * @param {number} price
 * @param {number} weight
*/

function addPulses(name, price, weight){
    let newPulses = {
        "name" : name,
        "price" : price,
        "weight" : weight
    }
    inventoryData.pulses[inventoryData.pulses.length] = newPulses
     //Total price Calculated
    for(let i=0; i<inventoryData.pulses.length; i++ ) {
        inventoryData.pulses[i].totalprice = 
        parseInt (inventoryData.pulses[i].price) * parseInt (inventoryData.pulses[i].weight)
    }
    fs.writeFileSync('./InventoryData.json', JSON.stringify(inventoryData, null, 2));
    console.log(JSON.stringify(inventoryData.pulses[inventoryData.pulses.length-1]) +"added to JSON data")
}

/** 
 * @module - it will add new Wheat type to json file
 * @param {string} name
 * @param {number} price
 * @param {number} weight
*/
function addWheat(name, price, weight){
    let newWheat = {
        "name" : name,
        "price" : price,
        "weight" : weight
    }
    inventoryData.wheat[inventoryData.wheat.length] = newWheat
     //Total price Calculated
    for(let i=0; i<inventoryData.wheat.length; i++ ) {
        inventoryData.wheat[i].totalprice = 
        parseInt (inventoryData.wheat[i].price) * parseInt (inventoryData.wheat[i].weight)
    }
    fs.writeFileSync('./InventoryData.json', JSON.stringify(inventoryData, null, 2));
    console.log(JSON.stringify(inventoryData.wheat[inventoryData.wheat.length-1]) +"added to JSON data")
}

module.exports = {
    addRice, 
    addPulses,
    addWheat
}

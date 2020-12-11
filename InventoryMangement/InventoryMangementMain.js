/*******************************************************************************************************
 * @problem : Json objects of rice, pulses and wheat,  calculate total from price and weight
 * @fileName : InventoryManagementMain.js
 * @Auther  : Shubham Lokhande
 *******************************************************************************/


const Inventory = require('./InventoryMangementBusiness');
let invent = new Inventory();
invent.jsonParse('InventoryData.json');
invent.display();
invent.value();
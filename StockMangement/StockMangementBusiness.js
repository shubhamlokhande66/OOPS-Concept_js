/******************************************************************************************************
* @purpose  :  Ask data from user to store stock in json file,
                data: share (name,price and value);
                read and write the json file.
* 	  
* 	
*  @Auther   : Shubham Lokhande
*  @File     : StackAccountManagementBusinessLogic.js 
*  
************************************************************************************************/
const fs = require('fs');
 
/*
     * @description : jsonParse
     * @purpose:   it reads json file from given adress and convert it to script obj.
     */

let data = fs.readFileSync('./StockData.json');
let inventoryData = JSON.parse(data);
/** 
 * @module - it will add Stock to json file
 * @param {string} name
 * @param {number} share
 * @param {number} shareprice
*/
 

function addStock(Stockname,NumberShare,Shareprice){
    let newStock = {
        "Stockname" : Stockname,
        "NumberShare" : NumberShare,
        "Shareprice" : Shareprice
    
    }
     /*
     * @description : Total Value Calculated
     * @purpose:   Calculated Total Price.
     */
    inventoryData.Stock[inventoryData.Stock.length] = newStock
    for(let i=0; i< inventoryData.Stock.length; i++ ) {
        inventoryData.Stock[i].totalprice = 
        parseInt (inventoryData.Stock[i].NumberShare) * parseInt (inventoryData.Stock[i].Shareprice)
    }
    fs.writeFileSync('./StockData.json', JSON.stringify(inventoryData, null, 2));
    console.log(JSON.stringify(inventoryData.Stock[inventoryData.Stock.length-1]) +" : added to JSON data")

   
}
function printReport() {
    console.log(JSON.stringify(inventoryData, null, 2));
    

     }


module.exports = {
    addStock , printReport
}

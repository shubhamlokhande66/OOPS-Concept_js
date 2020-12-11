/*******************************************************************************************************
 * @problem : Json objects of rice, pulses and wheat,  calculate total from price and weight
 * @fileName : InventoryManagementBusinessLogic.js
 * * @Auther  : Shubham Lokhande
 *******************************************************************************/

fs = require('fs');
class Inventory {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    /* @description: jsonParse
    * @purpose: it reads json file from given adress and convert it to script obj.
    * 
    */

    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }
    display() {
        console.log(this.content.Data);
    }

    /* @description : value
    * @purpose:   it calculate value of inventory
    */


    value() {
        let total = 0;
        let riceSum = 0;
        this.content.Data.rice.forEach(element => {
            riceSum = riceSum + element.price * element.weight

        });
        let whaetSum = 0;
        this.content.Data.wheat.forEach(element => {
            whaetSum = whaetSum + element.price * element.weight

        });
        let pulsesSum = 0;
        this.content.Data.pulse.forEach(element => {
            pulsesSum = pulsesSum + element.price * element.weight

        });

        total = riceSum + whaetSum + pulsesSum;
        console.log('total value of rice ' + riceSum + "rs");
        console.log('total value of wheat ' + whaetSum + "rs");
        console.log('total value of pulse ' + pulsesSum + "rs");
        console.log('total value of inventories ' + total + "rs");
    }

    /* @description : addCategory
    * @purpose:  it creat category(empty array).
    * @param {data}, which has data information.
    */
    addCategory(category = null) {

        this.content.Data[category] = [];
    }

    addElements(category, name, weight, price) {
        this.content.Data[category].push({
            "name": name,
            "weight": weight,
            "price": price,

        })

    }

    saveFile() {
        fs.writeFile(this.fileName, JSON.stringify(this.content));
    }
}

module.exports = Inventory;

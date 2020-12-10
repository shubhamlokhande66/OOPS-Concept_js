/*****************************************************************
 * @Purpose : Inventory Management 
 * @description : Take input and send it to InventoryManagementBusinessLogig
 * @file : InvntoryManagemntMain.js
 * @author: Shubham Lokhande
 * @since : 12-10-2020
 *****************************************************************/
const prompt = require('prompt-sync')();
let { addRice, addPulses, addWheat } = require('./InventoryMangementBusiness')
/**
 * @module -  take user inputs and sends it to Businesslogic
 * @param {string} name
 * @param {number} price
 * @param {numer} weight
 */

while(true) {
    console.log ("Choose below options :")
    console.log("1. Rice type")
    console.log("2. Pulses type")
    console.log("3. wheat type")
    let choice = prompt("Select Option to Enter details: ")
    switch(choice) {
        case '1':
            let ricename = prompt("Enter Rice name: ")
            let riceprice = Number(prompt("Enter Rice price: "))
            let riceweight = Number(prompt("Enter Rice weight: "))
            addRice(ricename,riceprice,riceweight)
            break;
        case '2':
            let pulsesname = prompt("Enter Pulses name: ")
            let pulsesprice = Number(prompt("Enter Pulses price: "))
            let pulsesweight = Number(prompt("Enter Pulses weight: "))
            addPulses(pulsesname, pulsesprice, pulsesweight)
            break;
        case '3':
            let weatname = prompt("Enter Weat name: ")
            let weatprice = Number(prompt("Enter weat price: "))
            let weatweight = Number(prompt("Enter  Weat weight: "))
            addWheat(weatname, weatprice, weatweight)
            break;
    }
    if(choice ==0 ) break
}

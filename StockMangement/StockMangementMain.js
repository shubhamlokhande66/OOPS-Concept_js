/******************************************************************************************************
* @purpose  :  Ask data from user to store stock in json file,
                data: share (name,price and value);
                read and write the json file.
                This file reads user input and provides output
    
* 	  
* 	
*  @Auther   : Akshay
*  @File     : StackAccountManagementMain.js 
*  
************************************************************************************************/

const prompt = require('prompt-sync')();
let { addStock } = require('./StockMangementBusiness')
while(true) {
    let Stockname=[];
    let NumberShare=[];
    let Shareprice=[]; 
let stockname = prompt("Enter Stock Number: ")
for (i=0 ; i < stockname ; i++ ){
    Stockname[i]=prompt("Enter the name ")
    NumberShare[i]=prompt("Enter the Number Of Share ")
    Shareprice[i]=prompt("Enter the Share Price ")
    console.log (Stockname)
    console.log (NumberShare)
    console.log (Shareprice) 

}
        
            addStock(Stockname,NumberShare,Shareprice)
            break;
           
           
}
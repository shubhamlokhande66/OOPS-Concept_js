/******************************************************************************************************
* @purpose  :  Ask data from user to store stock in json file,
                data: share (name,price and value);
                read and write the json file.
                This file reads user input and provides output
    
* 	  
* 	
*  @Auther   : Shubham Lokhande
*  @File     : StackAccountManagementMain.js 
*  
************************************************************************************************/

const readline = require('readline-sync');
let { addStock , printReport} = require('./StockMangementBusiness')

    let Stockname=[];
    let NumberShare=[];
    let Shareprice=[]; 

    let flag = true;

while (flag) { 
    let choice = readline.questionInt(`enter 1. To purchese the Share  2. print the shares report     3. exit   : `)
    switch (choice) {
        case 1:
let stockname = readline.questionInt("Enter Stock Number  : ")
for (i=0 ; i < stockname ; i++ ){
    Stockname[i]=readline.question("Enter the name :  ")
    NumberShare[i]=readline.questionInt("Enter the Number Of Share  : ")
    Shareprice[i]=readline.questionInt("Enter the Share Price  :  ")
    console.log (Stockname)
    console.log (NumberShare)
    console.log (Shareprice) }
               addStock(Stockname,NumberShare,Shareprice)
            break;

            case 2:
                console.log("Printing the report  : ");
                printReport();
                break;
                case 3:
                    flag = false;
                    process.exit(1);
        
                default:
                    console.log('wrong choice');

    }
}


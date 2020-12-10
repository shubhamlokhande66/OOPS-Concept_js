let suit = ["Clubs", "Diamonds", "Hearts", "Spades"]
let rank = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]


}

for(let i =0; i < 9; i++ ) {
    for(let j =0; j < 4; j++) {
        let sindex = (Math.round(Math.random() * 10)%4)
        let rindex = (Math.round(Math.random() * 10)%13)
        let card = suit[sindex] + rank[rindex]
        
    }
}

console.log(shfulledDeck)
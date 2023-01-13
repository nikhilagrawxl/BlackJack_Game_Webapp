let player={
    name:"Per",
    chips:145
}
let firstcard=getrandomcard()
let secondcard=getrandomcard()
let cards=[]
let sum=0
let hasblackjack=false
let isalive=false
let message=""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let playerel=document.getElementById("player-el")
playerel.textContent=player.name+": $"+player.chips

function getrandomcard(){
    let num=Math.floor(Math.random()*13)+1
    if(num==1){
        return 11
    }
    else if(num>=11 && num<=13){
        return 10
    }
    else{
        return num
    }
}

function startgame(){
    isalive=true
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}

function rendergame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i] + " "
    }
    sumEl.textContent="Sum: " + sum
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum==21){
        message="Congrats you have won black jack!"
        hasblackjack=true
    }
    else{
        message="You're out of the game!"
        isalive=false
    }
    messageEl.textContent=message
}

function newcard(){
    if(isalive===true && hasblackjack===false){
        let card=getrandomcard()
        sum=sum+card
        cards.push(card)
        rendergame()
    }
}





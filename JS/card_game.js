
function randomCard(){
    let cardItems = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
    randomNumber = Math.ceil(Math.random() * cardItems.length)
    let card = ["Heart", "Spade", "Diamonds", "Clubs"]
    random_card = Math.ceil(Math.random() * card.length)
    return {Value: cardItems[randomNumber], Suit: card[random_card]}
}

console.log(randomCard())
// Code your solutions in this file
for (let age = 30; age < 40; age++){
   console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards){
    for (let i = 0; i < cards.length; i++) {
       console.log(`Thankyou, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return([...cards, "surprise"]);
}
writeCards([...cards, "surprise"]);



function countDown(){
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
    return countDown;
}
countDown(10);

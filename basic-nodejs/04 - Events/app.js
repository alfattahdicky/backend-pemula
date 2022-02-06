const { EventEmitter } = require('events'); 

const myEventEmitter = new EventEmitter();

// fungsi ini dijalankan ketika event coffee-order terjadi
const makeCoffee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
}

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat`);
}

// make fungsi include makeCoffee and makeBill
const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
}

// regist fungsi makecoffee sebagai event listener coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);


myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// bangkitkan event coffee-order
myEventEmitter.emit('coffee-order', { name: 'tubruk', price: '20000' });
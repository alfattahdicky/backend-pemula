const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const nameBirthday = (name) => {
  console.log(`Hari ini ${name} berulang tahun`);
} 

const ageBirthday = (age) => {
  console.log(`dengan usia ${age}`);
}

const sayHappyBirthday = () => {
  console.log('Selamat ulang tahun!!');
}

const birthdayEventListener = ({name, age}) => {
  nameBirthday(name);
  ageBirthday(age);
  sayHappyBirthday();
}

myEventEmitter.on('happy-birthday', birthdayEventListener);

myEventEmitter.emit('happy-birthday', {name: 'Dicky AL Fattah', age: 20});
const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV; 

for(let i = 0; i <= 10000; i++ ) {

}

const currentMemoryUsage = process.memoryUsage().heapTotal;

console.log(`Hai ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan Memmori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
// Process env
// const server = new Server({
//   host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// Penggunaan CPU
const cpuInformation = process.memoryUsage().heapUsed;
console.log(cpuInformation);

// Properti menampung nilai baris perintah dlm bntuk array
// const firstName = process.argv[2];
// const lastName  = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);
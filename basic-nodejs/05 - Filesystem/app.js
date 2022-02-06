const fs = require('fs');

const fileReadCallback = (error, data) => {
  if(error) {
    console.log('gagal membaca berkas');
    return;
  }

  console.log(data);
}

// async
fs.readFile('./basic-nodejs/05 - Filesystem/test.txt', 'utf-8', fileReadCallback);

// sync
const data = fs.readFileSync('./basic-nodejs/05 - Filesystem/test.txt', 'utf-8');
console.log(data);
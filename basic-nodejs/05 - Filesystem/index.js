// Teknik membaca berkas dengan skala kecil
const fs = require('fs');

const fileReadCallback = (err, data) => {
  if(err) {
    console.log('gagal membaca berkas');
    return;
  }
  console.log(data);
}

fs.readFile(path.resolve(__dirname, 'test.txt'), 'utf-8', fileReadCallback);
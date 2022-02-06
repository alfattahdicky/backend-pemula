/**
 Teknik menulis berkas yaitu writeable stream 
  berkas akan disimpan jika tidaka ada,
  namun bila berkas tersebut sudah ada, maka data sebelumnya akan tertimpa
 */

const fs = require('fs');

const outputText = path.resolve(__dirname, 'output.txt');

const writeableStream = fs.createWriteStream(outputText);
writeableStream.write('Baris pertama!\n');
writeableStream.write('Baris kedua!\n');
writeableStream.end('Baris ketiga');


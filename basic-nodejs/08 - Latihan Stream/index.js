/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');

const pathInput = path.resolve(__dirname, 'input.txt');
const pathOutput = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(pathInput, {
  highWaterMark: 15,
});

const writeableStream = fs.createWriteStream(pathOutput);

readableStream.on('readable' ,() => {
  try{
    writeableStream.write(`${readableStream.read()}\n`);
  }catch(err) {
    console.log(err);
  }
})

readableStream.on('end', () => {
  writeableStream.end();
  console.log('Done');
})
/**
 Teknik membaca berkas dalam scala besar dengan 
 mengirim bagian demi bagian
 */

const fs = require('fs');

const pathArticle = path.resolve(__dirname, 'test.txt');

const readableStream = fs.createReadStream(pathArticle, {
  highWaterMark: 10,
});

readableStream.on('readable', () => {
  try{
    process.stdout.write(`[${readableStream.read()}]`);
  }catch(err) {
    console.log(err);
  }
})

readableStream.on('end', () => {
  console.log('Done');
})
const http = require('http');
const path = require('path');
const fs = require('fs');

// 复制文件
// const fileName1 = path.join(__dirname, '1.txt');
// const fileName2 = path.join(__dirname, '1_copy.txt');
// // 读取文件流
// const readStream = fs.createReadStream(fileName1);
// const writeStream = fs.createWriteStream(fileName2);
// readStream.pipe(writeStream);
// readStream.on('end', () => {
//   console.log('文件复制完成！');
// });

const fileName1 = path.join(__dirname, '1.txt');
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const readStream = fs.createReadStream(fileName1);
    readStream.pipe(res);
  }
});

server.listen(3365);
const fs = require('fs');
const path = require('path');


const fileName = path.resolve(__dirname, 'data.txt');

// 读取文件
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log(err);
    return
  }

  // data 是 Buffer 2进制类型，需要转换成字符串
  console.log(data.toString());

});

import * as fs from 'fs';
import * as path from 'path';

// 生成 write Stream
const createWriteStream = (fileName: string) => {
  const fullFileName =
    path.join(__dirname, '../', "../", "node-blog-1/logs", fileName);

  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a',
    encoding: 'utf8',
    mode: 0o666,
  });

  return writeStream
}

// 写日志
const writeLog = (writeStream, log) => {
  writeStream.write(log + '\n')
}

const accessWriteStream = createWriteStream('access.log')

// 写入访问日志
export const access = (log) => {
  writeLog(accessWriteStream, log)
}
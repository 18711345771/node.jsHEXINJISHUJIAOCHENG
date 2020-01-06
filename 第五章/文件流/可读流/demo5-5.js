var fs = require('fs');
var total='';
var readableStream=fs.createReadStream('/node.js核心技术教程/第五章/文件流/test/input.txt');
readableStream.on('data',function (chunk) {
    total+=chunk;
});
readableStream.on('end',function () {
   console.log(total);
});
readableStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('文件读取完成');
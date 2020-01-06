var fs= require('fs');
var inputPath='/node.js核心技术教程/第五章/文件流/test/input.txt';
var outputPath='/node.js核心技术教程/第五章/文件流/test/output.txt';
var readableStream=fs.createReadStream(inputPath);
var writeableStream=fs.createWriteStream(outputPath);
readableStream.on('data',function (chunk) {
    writeableStream.write(chunk);
});
readableStream.on('end',function () {
    //将剩下的数据全部写入，并且关闭写入的文件
    writeableStream.end();
});
readableStream.on('error',function (err) {
    if(err){
        return err.stack;
    }
});
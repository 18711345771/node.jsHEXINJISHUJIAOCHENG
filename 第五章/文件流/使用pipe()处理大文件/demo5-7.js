/**
 *使用pipe()进行文件复制
 * 注意，如果目标文件存在则是完全的覆盖，如果不存在就先创建
 */
var fs = require('fs');
var srcPath='/node.js核心技术教程/第五章/文件流/test/input.txt';
var distPath='/node.js核心技术教程/第五章/文件流/test/output.txt';
var readableStream=fs.createReadStream(srcPath);
var writeableStream=fs.createWriteStream(distPath);
if(readableStream.pipe(writeableStream)){
    console.log('大文件复制成功了');
}else{
    console.log('大文件复制失败了');
}

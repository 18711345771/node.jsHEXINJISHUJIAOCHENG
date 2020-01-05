/**
 * 读取目录
 */
var fs=require('fs');
console.log('查看/testDemo4-8目录');
fs.readdir('/node.js核心技术教程/第四章/目录操作/testDemo4-8',function (err,files) {
    if(err){
        return console.log(err);
    }
    //遍历所有文件
    files.forEach(function (file) {
        //输出文件名
        console.log(file);
    });
})
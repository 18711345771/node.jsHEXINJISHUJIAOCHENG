
var fs = require('fs');
console.log('读取/testDemo4-8目录');
fs.readdir('/node.js核心技术教程/第四章/目录操作/testDemo4-8',function (err,files) {
   if(err){
       return console.log('读取目录失败');
   }
   files.forEach(function (file) {
       console.log(file);
       fs.unlink('/node.js核心技术教程/第四章/目录操作/testDemo4-8/'+file,function (err) {
           if(err){
               return console.log(err);
           }
           console.log(file+'文件删除成功');
       })
   });
   console.log('准备删除目录');
   fs.rmdir('/node.js核心技术教程/第四章/目录操作/testDemo4-8',function (err) {
       if(err){
           return console.log(err);
       }
       console.log('目录/node.js核心技术教程/第四章/目录操作/testDemo4-8删除成功');
   })
});
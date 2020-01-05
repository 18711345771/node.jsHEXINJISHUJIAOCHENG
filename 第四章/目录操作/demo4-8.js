/**
 * 创建目录
 */
var fs=require('fs');
console.log('在E:/node.js核心技术教程/第四章/目录操作目录下创建目录testDemo4-8');
fs.mkdir('E:\\node.js核心技术教程\\第四章\\目录操作\\testDemo4-8',function (err) {
    if(err){
        return console.log('创建目录失败');
    }
    console.log('创建目录成功');
});
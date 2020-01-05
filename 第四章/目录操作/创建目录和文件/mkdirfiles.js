var fs=require('fs');
fs.mkdir('/node.js核心技术教程/第四章/目录操作/testDemo4-8',function (err) {
    if(err){
        return console.log('创建目录失败');
    }
    console.log('创建/testDemo4-8目录成功');
    fs.writeFile('/node.js核心技术教程/第四章/目录操作/testDemo4-8/test.txt','',function (err) {
        if(err){
            return console.log('创建文件失败');
        }
    });
    console.log('创建文件test.txt成功');
    fs.writeFile('/node.js核心技术教程/第四章/目录操作/testDemo4-8/test.js','',function (err) {
        if(err){
            return console.log('创建文件失败');
        }
    });
    console.log('创建文件test.js成功');
});

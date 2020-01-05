var fs = require('fs');
fs.readFile('/node.js核心技术教程/第五章/二进制数据和乱码/test.txt',function (err,data) {
    if(err){
        return console.log('读取文件失败');
    }
    //1.输出读取的Buffer数组对象
    console.log(data);
    //2.输出乱码
    console.log(data.toString());
});
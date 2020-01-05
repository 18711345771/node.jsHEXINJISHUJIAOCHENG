var fs =require('fs');
fs.readFile('E:/a.txt',function(err,data){
    if(err){
        return console.log('读取文件失败');
    }
    console.log('读取的文件内容是：'+data.toString());
});
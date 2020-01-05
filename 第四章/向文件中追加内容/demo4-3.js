var fs=require('fs');
var data="欢迎你";
fs.appendFile('E:/a.txt',data,function(err){
    if(err){
        return console.log('文件追加失败');
    }
    console.log('文件追加成功');
});
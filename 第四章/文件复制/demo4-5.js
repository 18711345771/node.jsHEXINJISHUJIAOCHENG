var fs =require('fs');
fs.readFile('E:/a.txt',function (err,data) {
    if(err){
        return console.log('读取文件失败');
    }
    fs.appendFile('E:/b.txt',data.toString(),function (err) {
        if(err){
            return console.log('追加文件失败');
        }
    })
    console.log('复制文件成功');
});
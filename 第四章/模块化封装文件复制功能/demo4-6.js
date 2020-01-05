var fs=require('fs');
function copy(src,dist,callback){
    fs.readFile(src,function (err,data) {
        if(err){
            // return console.log('文件读取失败');
            return callback(err);
        }
        fs.writeFile(dist,data.toString(),function (err) {
            if(err){
                // return console.log('文件写入失败');
                return callback(err);
            }
        });
        callback(null);
    });
}
module.exports=copy;
/**
 * 使用HTTP提供静态资源服务
 */
var http=require('http');
var fs=require('fs');
var path=require('path');
var server=http.createServer();
server.on('request',function (req,res) {
    var url=req.url;
    console.log(url);
    if(url==='/'){
        fs.readFile('E:/node.js核心技术教程/第七章/HTTP处理静态资源服务/static/index.html','utf8',function (err,data) {
            if(err){
                throw err;
            }
            res.end(data);
        })
    }else if(url==='/login'){
        fs.readFile(path.join(__dirname,'static/login.html'),'utf8',function (err,data) {
            if(err){
                throw err
            }
            res.end(data);
        })
    }else if(url==='/image/01.jpg'){
        var imgPath=path.join(__dirname,'static/image/01.jpg');
        console.log(imgPath);
        console.log(path.join(__dirname,'//////static/image/01.jpg'));
        fs.readFile(imgPath,function (err,data) {
            if(err){
                throw err;
            }
            res.end(data);
        })
    }else{
        fs.readFile(path.join(__dirname,'static/404.html'),'utf8',function (err,data){
            if(err){
                throw err
            }
            res.end(data);
        })
    }
});
server.listen(3000,'127.0.0.1',function () {
    console.log('Server listening at port 3000');
});
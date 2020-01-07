/**
 * 根据不同URL响应不同消息
 */
var http=require('http');
var server=http.createServer();
server.on('request',function (req,res) {
    var url=req.url;
    if(url==='/'){
        res.end('hello index');
    }else if(url==='/login'){
        res.end('hello login');
    }else if(url==='/register'){
        res.end('hello register');
    }else {
        res.end('404 Error Not Find');
    }
});
server.listen(3000,'127.0.0.1',function () {
    console.log('服务器监听在3000端口');
});
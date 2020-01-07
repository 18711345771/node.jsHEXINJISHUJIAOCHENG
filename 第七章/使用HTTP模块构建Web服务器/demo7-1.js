/**
 * 使用HTTP构建web服务器
 */
var http=require('http');
//1.创建一个HTTP服务器
var server=http.createServer();
//2.监听 请求事件
//request就是一个可读流，用来获取当前与服务器连接的客户端的一些请求报文数据
//response就是一个可写流，用来给客户端Socket发送消息，或者用来发送响应报文
server.on('request',function (req,res) {
   //使用HTTP发送响应数据时，HTTP服务器会自动把数据通过HTTP协议包装成一个响应报文，然后发送到Socket
    res.write('hello world');
    //在结束响应之前，可以连续向客户端发送数据
    res.write('hello world');
    //对于http请求响应模型来说，他们的请求和响应是一次性的
    //也就是说，每一次性请求都必须结束响应
    //标志断开当前连接
    res.end();
    //在一次HTTP请求模型中，当结束了响应时，就不能继续发送数据，以下消息不会显示
});
//3.监听端口
server.listen(3000,'127.0.0.1',function () {
    console.log('服务器监听在3000端口');
});
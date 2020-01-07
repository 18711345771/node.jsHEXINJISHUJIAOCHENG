//1.加载net核心模块
var net = require('net');
//2.创建一个服务器应用程序,得到一个服务器实例对象
var server=net.createServer();
//3.监听客户端的连接事件connection,连接成功就会执行回调处理函数
server.on('connection',function () {
    console.log('有客户端连接上来了');
});
//5.服务器有一个事件叫做listening，表示开启监听成功后回调处理函数
server.on('listening',function () {
    console.log('服务器开启监听成功了，正在等待客户端连接');
});
//4.启动服务器，开启监听
//注意顺序！12354
server.listen(3000,'127.0.0.1');


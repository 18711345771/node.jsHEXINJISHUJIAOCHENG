/**
 * 服务器端统计在线人数
 */
var net = require('net');
var server=net.createServer();
var count=0;
server.on('connection',function (socket) {
    count++;
    console.log('客户端IP'+socket.remoteAddress+'连接上来了');
    console.log('它的端口号是：'+socket.remotePort);
    console.log('目前的总人数是：'+count);
    socket.write('remoteAddress'+socket.remoteAddress+'\n');
    socket.write('remotePort'+socket.remotePort);
});
server.on('listening',function () {
    console.log('服务器端开启监听成功，等待客户端的连接');
});
server.listen(3000,'127.0.0.1');
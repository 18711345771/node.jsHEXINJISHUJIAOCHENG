/**
 * 双向通信--服务器
 */
var net = require('net');
var server=net.createServer();
server.on('connection',function (socket) {
    //事件data 当收到数据时触发
   socket.on('data',function (data) {
       console.log(data.toString());
       socket.write('服务器端说：我吃的小豆沙包');
   })
});
server.listen(3000,'127.0.0.1',function () {
    console.log('服务器已经开启监听，正在3000端口监听');
})
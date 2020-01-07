/**
 * 多人广播聊天服务器端
 */
var net=require('net');
var server=net.createServer();
var users=[];
server.on('connection',function (socket) {
    users.push(socket);
    console.log('客户端'+socket.remoteAddress+'已经连接');
    //事件data 当收到数据时触发
    socket.on('data',function (data) {
        users.forEach(function (client) {
            data=data.toString().trim();
            if(client!==socket){
                client.write(client.remotePort+':'+data);
            }
        });
    });
    //当有客户端异常退出时触发该函数
    //如果不监听客户端异常退出就会导致服务器崩溃
    socket.on('error',function () {
        console.log('有客户端异常退出');
    })
});
server.listen(3000,'127.0.0.1',function () {
    console.log('server listening at port 3000');
});


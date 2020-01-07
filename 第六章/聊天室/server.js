/**
 * 终端聊天室服务器端
 */
var net=require('net');
var config=require('./config');
var broadcast=require('./broadcast');
var p2p=require('./p2p');
var signup=require('./signup');
var server=net.createServer();
var users={};
server.on('connection',function (socket) {
    socket.on('data',function (data) {
        //解析客户端发送的数据
        data=JSON.parse(data);
        //根据客户端发送的数据类型做相应的操作
        switch (data.protocal){
            case 'signup':
                //处理用户注册
                signup.signup(socket,data,users);
                break;
            case 'broadcast':
                //处理广播消息
                broadcast.broadcast(data,users);
                break;
            case 'p2p':
                //处理点到点消息
                p2p.p2p(socket,data,users);
                break;
            default:
                break;
        }
    });
    socket.on('error',function () {
        console.log('有客户端异常退出了');
    })
});
//启动服务器，开启监听
server.listen(config.port,config.host,function () {
    console.log('Server listening at port'+config.port);
});
exports.p2p=function (socket,data,users) {
    var from=data.from;
    var to=data.to;
    var message=data.message;
    //找到要发送给某个人的Socket地址对象
    var receiver=users[to];
    //如果接收人不存在，告诉客户端没有该用户
    if(!receiver){
        var send={
            protocal:'p2p',
            code:2001,
            message:'用户名不存在'
        };
        receiver.write(new Buffer(JSON.stringify(send)));
    }else{
        var send={
            protocal:'p2p',
            code:2000,
            from:data.from,
            message:message
        };
        receiver.write(new Buffer(JSON.stringify(send)));
    }
};
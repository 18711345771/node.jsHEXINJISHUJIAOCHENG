/**
 * 多人广播聊天客户端
 */
var net = require('net');
var client=net.createConnection({
    port:3000,
    host:'127.0.0.1'
});
//监听data事件 输出服务器返回的数据
client.on('data',function (data) {
   console.log(data.toString());
});
//监听连接成功的connect事件
client.on('connect',function () {
    //通过当前进程的标准输入的data事件获取终端中的输入
    process.stdin.on('data',function (data) {
        data=data.toString().trim();
        // console.log(data);
        client.write(data);
    })
});
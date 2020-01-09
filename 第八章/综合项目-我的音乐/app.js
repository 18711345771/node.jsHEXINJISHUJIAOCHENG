var http=require('http');
var config=require('./config');
var render=require('./render');
var router=require('./router');
var server=http.createServer();
server.on('request',function (req,res) {
    render(res);
    router(req,res);
});
server.listen(config.port,config.host,function () {
    console.log('Server is listening at port'+config.port);
    console.log('Please visit http://'+config.host+':'+config.port);
});
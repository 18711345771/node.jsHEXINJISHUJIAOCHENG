var http=require('http');
var fs=require('fs');
var path=require('path');
var _=require('underscore');
var server=http.createServer();
server.on('request',function (req,res) {
    var url=req.url;
    console.log(url);
    if(url==='/'){
        //使用Underscore模板引擎 readFile()函数中'utf8'编码参数一定要加 否则报错
        fs.readFile(path.join(__dirname,'index.html'),'utf8',function (err,data) {
            if(err){
                throw err;
            }
            var template=_.template(data);
            var htmlStr=template({
                title:'这是用的Underscore模板引擎实现的页面',
                arr:[
                    {name:'Jack'},
                    {name:'rose'},
                    {name:'milk'}
                ]
            });
            res.end(htmlStr);
        })
    }
});
server.listen(3000,'127.0.0.1',function () {
    console.log('Server is listening at port 3000');
});
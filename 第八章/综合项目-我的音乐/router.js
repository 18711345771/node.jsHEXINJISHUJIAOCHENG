var url=require('url');
var musicController=require('./music');
var path=require('path');
var fs=require('fs');
var _=require('underscore');
module.exports=function(req,res){
    var urlObj=url.parse(req.url,true);
    req.query=urlObj.query;
    console.log(urlObj.query);
    var pathname=urlObj.pathname;
    console.log(pathname);
    var method=req.method;
    console.log(method);
    if(method==='GET'&&pathname==='/'){
        musicController.showIndex(req,res);
    }else if(method==='GET'&&pathname==='/index.html'){
        musicController.showIndex(req,res);
    }else if(method==='GET'&&pathname==='/edit'){
        musicController.showEdit(req,res);
    }else if(method==='POST'&&pathname==='/edit'){
        musicController.doEdit(req,res);
    }else if(method==='GET'&&pathname==='/remove'){
        musicController.doRemove(req,res);
    }else if(method==='GET'&&pathname==='/add'){
        musicController.showAdd(req,res);
    }else if(method==='POST'&&pathname==='/add'){
        musicController.doAdd(req,res);
    }else if(method==='GET'&&pathname.startsWith('/node_modules/')){
        var staticPath=path.join(__dirname,pathname);
        fs.readFile(staticPath,'utf8',function (err,data) {
            if(err){
                return res.end(err.message);
            }
            res.end(data);
        })
    }

};
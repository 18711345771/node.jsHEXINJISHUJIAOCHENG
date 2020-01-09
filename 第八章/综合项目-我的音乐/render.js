var fs=require('fs');
var path=require('path');
var config=require('./config');
var _=require('underscore');
module.exports=function(res){
    res.render=function(viewName,obj){
        fs.readFile(path.join(config.viewPath,viewName)+'.html','utf8',function (err,data) {
            if(err){
                return res.end(err.message);
            }
            var template=_.template(data);
            var htmlStr=template(obj||{});
            res.end(htmlStr);
        })
    }
};
var config=require('./config');
var formidable=require('formidable');
var path=require('path');
var qstring =require('querystring');
exports.showIndex=function (req,res) {
    res.render('index',{
        title:'首页',
        musicList:storage
    })
};
exports.showAdd=function(req,res){
    res.render('add',{
        title:'增加音乐'
    })
};
exports.doAdd=function (req,res) {
    var form=new formidable.IncomingForm();
    form.uploadDir=config.uploadPath;
    // form.encoding='utf-8';
    form.keepExtensions=true;
    form.parse(req,function (err,fields,files) {
        if(err){
            return res.end(err.message);
        }
        var title=fields.title;
        var singer=fields.singer;
        var music=path.basename(files.music.path);
        var poster=path.basename(files.poster.path);
        var id=0;
        storage.forEach(function (item) {
            if(item.id>id){
                id=item.id;
            }
        });
        storage.push({
            id:id+1,
            title:title,
            singer:singer,
            music:music,
            poster:poster
        });
        storage.forEach(function (item) {
           console.log(item);
        });
        res.writeHead(302,{
            'Location':'http://127.0.0.1:3000/'
        });
        res.end();
    })
};
exports.doRemove=function (req,res) {
    var id=req.query.id;
    var music_index=0;
    storage.forEach(function (item,index) {
        if(item.id==id){
            music_index=index;
        }
    });
    storage.splice(music_index,1);
    res.writeHead(302,{
        'Location':'http://127.0.0.1:3000/'
    });
    res.end();
};
exports.showEdit=function(req,res){
    var id=req.query.id;
    var musicObj={};
    storage.forEach(function(item){
        if(item.id==id){
            musicObj=item;
        }
    });
    res.render('edit',{
        title:'编辑音乐',
        music:musicObj
    });
};
exports.doEdit=function(req,res){
    console.log('doEdit被执行了');
    var id=req.query.id;
    var data='';
    req.on('data',function (chunk) {
        data+=chunk;
    });
    req.on('end',function () {
        var postBody=qstring.parse(data);
        console.log('查询集合对象是：');
        console.log(postBody);
        console.log('id是：'+postBody.id);
        var music_index=0;
        storage.forEach(function(item,index){
            if(item.id==id){
                music_index=index;
            }
        });
        storage[music_index].title=postBody.title;
        storage[music_index].singer=postBody.singer;
        storage[music_index].music=postBody.music;
        storage[music_index].poster=postBody.poster;
        console.log(storage[music_index]);
        res.writeHead(302,{
            'Location':'http://127.0.0.1:3000/'
        });
        res.end();
    })
};
var storage=[
    {
        id:1,
        title:'我欲成仙',
        singer:'刘欢',
        music:'我欲成仙.mp3',
        poster:'刘欢.png'
    },
    {
        id:2,
        title:'野狼Disco',
        singer:'宝石 gen',
        music:'野狼Disco.mp3',
        poster:'宝石 gen.jpg'
    },
    {
        id:3,
        title:'勇气',
        singer:'梁静茹',
        music:'勇气.mp3',
        poster:'梁静茹.jpg'
    },
    {
        id:4,
        title:'过火',
        singer:'张信哲',
        music:'过火.mp3',
        poster:'张信哲.jpg'
    },
    {
        id:5,
        title:'十年',
        singer:'陈奕迅',
        music:'十年.mp3',
        poster:'陈奕迅.png'
    },
    {
        id:6,
        title:'夜曲',
        singer:'周杰伦',
        music:'夜曲.mp3',
        poster:'周杰伦.jpg'
    },
    {
        id:7,
        title:'一千年以后',
        singer:'林俊杰',
        music:'一千年以后.mp3',
        poster:'林俊杰.jpg'
    }
];
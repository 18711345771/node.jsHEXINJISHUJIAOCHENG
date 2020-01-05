var fs=require('fs');
fs.readFile('./lrc.txt',function (err,data) {
    if(err){
        return console.log('读取文件内容失败了');
    }
    data=data.toString();
    // console.log("歌词内容是："+data);
    var lines=data.split('\n');
    var reg=/\[(\d{2})\:(\d{2})\.(\d{2})\]\s*(.+)/;
    var l=lines.length;
    for(var i=0;i<l;i++){
        (function (index) {
            var line=lines[index];
            var matches=reg.exec(line);
            if(matches){
                //获取分
                var m=parseFloat(matches[1]);
                //获取秒
                var s=parseFloat(matches[2]);
                //获取毫秒
                var ms=parseFloat(matches[3]);
                //获取歌词内容
                var content=matches[4];
                //将分、秒、毫秒转换成毫秒
                var time=m*60*1000+s*1000+ms;
                //使用定时器，每行内容在指定时间点输出
                setTimeout(function () {
                    console.log(content);
                },time);

            }
        })(i);
    }
});
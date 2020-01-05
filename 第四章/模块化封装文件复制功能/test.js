var copy=require('./demo4-6');
copy('E:/b.txt','E:/c.txt',function (err) {
   if(err){
       return console.log('复制文件失败');
   }
   console.log('复制文件成功');
});
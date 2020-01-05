var fs=require('fs');
console.log(1);
var options={
  encoding:'utf8',
  mode:0o666,
  flag:'a'
};
fs.writeFile('E:/b.txt','黑马程序员2',options,function (err) {
    if(err){
        console.log("不好意思，文件写入失败了");
    }
    console.log(2);
});
console.log(3);
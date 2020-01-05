var buf=new Buffer('世上无难事');
var buf1=new Buffer('只怕有心人');
var buf2=Buffer.concat([buf,buf1]);
//输出拼接后的缓冲区的内容
console.log("buf2内容："+buf2.toString());
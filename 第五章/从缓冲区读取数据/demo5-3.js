var buf=new Buffer(26);
for(var i=0;i<26;i++){
    buf[i]=i+97;
}
//输出全部字母
console.log(buf.toString('ascii'));
//输出前5个字母
console.log(buf.toString('ascii',0,5));
//输出abcde
console.log(buf.toString('utf8',0,5));
//输出abcde，默认编码是utf8
console.log(buf.toString(undefined,0,5));


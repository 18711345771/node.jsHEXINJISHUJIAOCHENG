/**
 * 同步方式写入文件
 */
var fs=require('fs');
//在进行文件操作的时候，如果是同步API，必须使用try...catch捕获异常
try {
    console.log('写入文件...');
    fs.writeFileSync('E:/a.txt','黑马程序员');
}catch (e) {
    console.log('文件写入失败');
}
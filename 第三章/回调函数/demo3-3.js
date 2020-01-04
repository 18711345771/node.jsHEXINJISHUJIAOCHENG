function parseJsonStrToObj(str){
    return JSON.parse(str);
}
//对于同步代码，可以使用try...catch来捕获执行代码可能出现的异常
try {
    var obj=parseJsonStrToObj('foo');
    console.log(obj);
}catch (e) {
    console.log('转换失败了');
}
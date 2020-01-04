//加载模块
var myModule=require('./info');
console.log(myModule);
//输出模块中的变量值
console.log('name:'+myModule.name);
console.log('name:'+myModule.age);

//调用模块的方法
myModule.sayHello();
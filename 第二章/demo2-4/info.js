//向外开放变量name
exports.name='itheima';
//向外开放变量age
module.exports.age='10';
//向外开放函数
module.exports.sayHello=function(){
    console.log('hello');
};

//可以用module.exports直接定义变量并返回变量值
//却不可以直接用exports直接定义并返回变量值
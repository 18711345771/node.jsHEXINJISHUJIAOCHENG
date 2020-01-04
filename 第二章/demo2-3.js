var foo='bar';
console.log(foo);
//global属性这时是没有foo属性的
console.log('global:foo'+"  "+global.foo);
global.foo=foo;
console.log('global:foo'+"  "+global.foo);
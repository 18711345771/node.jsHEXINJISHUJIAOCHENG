//对于同一个模块标志，Node.js在第一次加载完成之后就会缓存该模块
//下次继续加载该模块的时候，直接从缓存中读取
require('./foo');
require('./foo');
require('./foo');
require('./foo');
console.log("foo模块被加载了");
//删除缓存模块
delete require.cache[module.filename];
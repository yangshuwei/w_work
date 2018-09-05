const fs = require('fs');
const router = require('koa-router')();

/**
 * @description  遍历controller下所有文件并引入
 * @param router {obj} koa-router中的router对象
 */
function addControllers(router,dir){
    //获取制定目录下所有文件名
    fs.readdirSync(YUS.controller+dir).filter((f)=>{
        return f.endsWith('.js');
    }).forEach((f)=>{
        //获取每一个controller文件，引入
        let file = require(YUS.controller+`${dir}/${f}`);
        addRoute(router, file);
    })
}


/**
 * @description 注册路由
 * @param {*} router koa-router中的router对象
 * @param {*} file require每一个controller下的文件
 */
function addRoute(router, file) {
    for (var url in file){
        if(url.startsWith('GET ')){
            let path = url.substring(4);
            router.get(path,file[url])
        }else if(url.startsWith('POST ')){
            let path = url.substring(5);
            router.post(path,file[url])
        }else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
};

/**
 * @description 过滤一个文件夹下包含的文件夹
 * @param {str} url 
 */
function filterFolder(url){
    return fs.readdirSync(url).filter((item)=>{
        return fs.statSync(url+item).isDirectory()
    })
}

let allFolder = filterFolder(YUS.controller);

allFolder.forEach((item)=>{
    addControllers(router,item);
});


module.exports ={
    router:router.routes(),
    methods:router.allowedMethods()
};
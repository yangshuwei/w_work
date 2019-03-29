/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:03:10 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2019-03-29 11:33:59
 */
const path = require('path');

function pathJoin(_path){
    return path.join(__dirname,_path);
}

let map = new Map();

map.set('dev',{port:3500});

map.set('test',{port:38080});

map.set('prd',{port:81});
process.env.NODE_ENV = 'dev';
let _port = map.get(process.env.NODE_ENV);

let basic_config = {
    app:pathJoin('../'),
    controller:pathJoin('../controller/'),
    view:pathJoin('../view/'),
    public:pathJoin('../public/'),
    router:pathJoin('../routers/'),
    servers:pathJoin('../servers'),
    port: _port.port
}
global.w = basic_config;
module.exports = {
    global
}
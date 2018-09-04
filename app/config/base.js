const path = require('path');

function pathJoin(_path){
    return path.join(_dirname,_path);
}

let map = new Map();

map.set('dev',{port:3000});

map.set('prd',{port:81});

let _port = map.get(process.env.NODE_ENV);

let basic_config = {
    app:pathJoin('../'),
    controller:pathJoin('../controller/'),
    view:pathJoin('../view/'),
    public:pathJoin('../public/'),
    router:pathJoin('../router/'),
    servers:pathJoin('../servers')
}

module.exports = {
    basic_config
}
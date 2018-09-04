'use strict';
const getService = require('../../untils/untils');
module.exports = class{
    async getDetailData(params){
        let data = await getService.requestGet(params);
        return
    }
}
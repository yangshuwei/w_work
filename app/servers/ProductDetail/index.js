'use strict';
const getService = require('../../untils/untils');
module.exports = class{
    static async getDetailData(requrl,params){
        let data = await getService.requestGet(requrl,params);
        return data;
    }
}
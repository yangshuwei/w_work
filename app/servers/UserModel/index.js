'use strict';
const getService = require('../../untils/untils');
module.exports = class{
     static  getDetailData(requrl,params){
        return getService.requestGet(requrl,params).then(res=>{
            if(JSON.parse(res).success){
                return JSON.parse(res);
            }else{
                return null;
            }
        }).catch(err=>{
            console.log(11111111111)
            return "null";
        })
    }
    static getClassData(requrl,params){
        return getService.requestGet(requrl,params).then(res=>{
            console.log(res.success)
            if(res){
                return JSON.parse(res);
            }else{
                return null;
            }
        }).catch(err=>{
            return "null";
        })
    }
}
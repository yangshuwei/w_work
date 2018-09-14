/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:03:54 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-14 11:03:54 
 */
'use strict';
const getService = require('../../untils/untils');
module.exports = class{
    static  getDetailData(requrl,params){
        let data =  getService.requestGet(requrl,params);
        return data;
    }
    static  getLogin(requrl,params){
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
}
/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:03:58 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-09-25 14:40:28
 */
'use strict';
const getService = require('../../untils/untils');
const _url = require('../../config/urlConfigs');
const reqUrl = require('../../config/serverUrlMap').serverUrl;
module.exports = class{
     static async getDetailData(params){
        return await getService.requestGet(reqUrl(_url.GET_CATEGORY),params).then(res=>{
            if(JSON.parse(res).success){
                return JSON.parse(res);
            }else{
                return null;
            }
        }).catch(err=>{
            return "null";
        })
    }
    static async getClassData(params){
        return await getService.requestGet(reqUrl(_url.NEW_PRODUCT_LIST),params).then(res=>{
            if(JSON.parse(res).success){
                return JSON.parse(res);
            }else{
                return null;
            }
        }).catch(err=>{
            return "null";
        })
    }
}
/**
 * @author yangshuwei
 * @since 2018-08-01
 */

const request = require('request');
const querystring = require('querystring');

class RequestInterface {
   /**
     * @description 请求接口
     * @type GET
     * @param reqUrl
     * @param params
     * @returns {Promise}
     */
    static requestGet(reqUrl,params){
        return new Promise((resolve,reject)=>{
            let reqUrl =opt ? url + "?" + querystring.stringify(opt) : url;
            console.log('请求url->',url);
            request(reqUrl,(err,res,body)=>{
                console.log("返回code->",res.statusCode," 返回data-> ",body);
                if(!err && res.statusCode == 200){
                    resolve(body)
                }else{
                    console.error(err);
                    reject({});
                }
            });
        })
    }
    /**
     * @description 请求接口
     * @type POST
     * @param reqUrl
     * @param params
     * @returns {Promise}
     */
    static async requestPost(reqUrl,params,header){
        let _this = this;
        let headers = {"content-type": "application/json","from":"mobile"};
        Object.assign(headers,header);

        console.log(headers)
        return new Promise((resolve,reject) => {
            console.log(opt)
            console.log('请求url->',url," 请求参数-> ",JSON.stringify(opt));
            request({
                url: reqUrl,
                method: "POST",
                json: true,
                headers:headers,
                body:params
            },function(error, response, body) {
                console.log("返回code->",response.statusCode," 返回data-> ",body);
                if (!error && response.statusCode == 200){
                    resolve(body)
                }else{
                    console.error("error->",error);
                    reject({});
                }
            });

        });

    }
}
module.exports = _Service;
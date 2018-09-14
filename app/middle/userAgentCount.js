/*
 * @Author: yangshuwei 
 * @Date: 2018-09-14 11:03:36 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-14 11:03:36 
 */
"use script"
module.exports = class{
    static async userAgentCount(ctx,next){
        console.log(ctx.userAgent)
    }
}
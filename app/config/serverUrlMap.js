"use script"
module.exports = class{
     static serverUrl(_url){
        let url = '';
        switch(process.env.NODE_ENV){
            case 'dev':
            url= 'http://mobiletest.ehaier.com:38080'+_url;//测试环境
            break;
            case 'test':
            url= 'http://mobiletest.ehaier.com:38080'+_url;//测试环境
            break;
            case 'prd':
            url= 'http://m.ehaier.com'+_url;//正式环境
            break;
            default:
            url= 'http://mobiletest.ehaier.com';
        }
        return url;
    }
}
import url from './url'
export const API_URL = url // 引入api介面

// console.log(process.env.NODE_ENV)
// 根據環境變數配置不同的base_url
// eslint-disable-next-line camelcase
let base_url;
if (process.env.NODE_ENV === 'development') {   
    // eslint-disable-next-line camelcase
    base_url = 'https://reqres.in/';
} else if (process.env.NODE_ENV === 'production') {    
    // eslint-disable-next-line camelcase
    base_url = 'http://xxx.com/'; // 線上地址  
}
 
// eslint-disable-next-line camelcase
export const BASE_URL = base_url;
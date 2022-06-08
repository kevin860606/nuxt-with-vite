// import order from "~/api/order"

// export default ( ctx , inject) => {
// 	// Set the function directly on the context.app object
// 	inject('order', order(ctx.$axios))
//   }

import { BASE_URL } from './config';
import { API_URL } from './config';

export default function ({ app, $axios, redirect }) {
    // const { BASE_URL,API_URL } = require('./config'); // 獲取封裝的base_url和介面管理
    const api = $axios.create({
        baseURL: BASE_URL,
        timeout: 100000,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
    })

    // 請求攔截器,在請求之前執行
    api.interceptors.request.use((config) => {
        config.url = API_URL[config.url] 
        return config;
    },(error) => {
        return Promise.reject(error);
    });
    
    // 響應攔截器,在響應之前執行
    api.interceptors.response.use((res) => {
        return res.data;
    }, (error) => {
        return Promise.reject(error);
    });

    app.api = api;
}
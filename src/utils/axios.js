import Vue from 'vue';
import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: '/'
});
// 拦截请求头
instance.interceptors.request.use(
    config => {
        config.headers['X-Access-Token'] = Vue.prototype.$accessToken || '';
        return config;
    },
    error => {
        return Promise.reject(error.response);
    }
);
// 拦截响应头
instance.interceptors.response.use(
    response => {
        if (response.data.code === '0') {
            return response;
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        return Promise.reject(error.response);
    }
);
// 请求回调处理函数
const sucFun = res => {
    return res.data;
};
const errFun = err => {
    Vue.prototype.$message({
        type: 'error',
        message: err.data.message || err.statusText || '数据异常'
    });
    return err.data;
};
// 普通POST请求
const Posting = (url = '', data = {}) => {
    return instance.post(url, data).then(sucFun).catch(errFun);
};
// 普通Get请求
const Geting = (url = '', data = {}) => {
    let reqData = {
        params: data
    };
    return instance.get(url, reqData).then(sucFun).catch(errFun);
};
//  默认请求
Vue.prototype.$axios = axios;
Vue.axios = axios;
// 普通POST请求
Vue.prototype.$Posting = Posting;
Vue.Posting = Posting;
// 普通Get请求
Vue.prototype.$Geting = Geting;
Vue.Geting = Geting;

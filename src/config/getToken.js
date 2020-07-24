import Vue from 'vue';

export const getToken = async () => {
    let token = 'aabbccddeeff';
    Vue.prototype.$accessToken = token;
};
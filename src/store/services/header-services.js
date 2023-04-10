import request from '@/util/request.js';
const url = process.env.VUE_APP_BASE_URL;

// 获取oic
function getcartList(){
    return request.get(`/api1.0/oic`).then(response => {
        console.log("server");
        return response
    })
}

// 获取图标fb 和 line等
function getwebsite(){
    return request.get('/api1.0/website_config').then(response => {
        return response
    });
}

// 获取后台数据
function getadmin(){
    return request.get('/api/v2/ft_theme/one').then(response => {
        // console.log(123);
        // console.log(response.data.data);
        return response.data.data
    });
}


export default {
    getcartList,
    getwebsite,
    getadmin
}
import request from '@/util/request.js';

// 获取用户信息
function get() {
    return request.get(`/api0/cus/api/get-website-data`).then(response => {
        // console.log(window.location.href);
        return response
    })
}

// 保存用户信息
function save(data) {
    return request.post(`/api0/cus/api/save-cus-data`, {
        address:data.address,
        name:data.name,
        phone:data.phone,
    }).then(response => {
        return response
    })
}

export default {
    get,
    save
}
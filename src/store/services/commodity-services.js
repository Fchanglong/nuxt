import request from '@/util/request.js';

// 全部商品
function all() {
    return request.get(`/api1.0/oig`).then(response => {
        return response
    })
}

// 获取加购商品
function add_purchase(){
    return request.get(`/api1.0/oi/add`).then(response => {
        return response
    });
}

// 商品分类
function classification(id) {
    return request.get(`/api1.0/oig?oic_id=${id}`).then(response => {
        return response
    });
}

// 指定商品
function designated_product(id) {
    return request.get(`/api1.0/oig/${id}`).then(response => {
        return response
    });
}

// 搜索商品
function search(name) {
    return request.get(`/api1.0/oig?group_name_like=${name}`).then(response => {
        return response
    }).catch((error)=>{
        return false;
    });
}

export default {
    all,
    classification,
    designated_product,
    search,
    add_purchase
}
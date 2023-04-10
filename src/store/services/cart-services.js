import request from '@/util/request.js';

//获取购物车
function get() {
    let nowtime = new Date().getTime()
    return request.get(`/api0/cus/api/get-cart?_=${nowtime}`).then(response => {
        return response;
    })
}

// 添加商品到购物车
function addcart(data) {
    return request.post(`/api1.0/cart`, {
        action: 'ADD',
        itemid: data.itemid,
        number: data.number,
    }).then(response => {
        return response;
    });
}

// 购物车删除商品
function delcart(data) {
    return request.post(`/api1.0/cart`, {
        action:'UPDATE',
        itemid:data.itemid,
        number:0
    }).then(response => {
        return response;
    });
}

// 修改数量
function update(data) {
    return request.post(`/api1.0/cart`, {
        action:'UPDATE',
        itemid:data.itemid,
        number:data.number,
    }).then(response => {
        return response;
    });
}

//更新购物车
// function update(action, itemid, number) {
//     return request.post(`/api1.0/cart`, {
//         action,
//         itemid,
//         number
//     }).then(response => {
//         return response;
//     });
// }


export default {
    get,
    update,
    addcart,
    delcart

}
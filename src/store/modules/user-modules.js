import service from '@/store/services/user-services'

const state = {
    list: {},
    address:'',
    name:'',
    phone:'',
};
const getters = {
    list: state => state.list,
    address: state => state.address,
    name: state => state.name,
    phone: state => state.phone,
};
const mutations = {
    SET_LIST: (state, list) => {
        state.list = list;
    },
    SET_ADDRESS: (state, address) => {
        state.address = address;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_PHONE: (state, phone) => {
        state.phone = phone;
    },
};
const actions = {
    save({
        dispatch
    }, data) {
        return service.save(data).then((response) =>{
            // commit('SET_LIST', response);
        });
    },
    get({commit}){
        return service.get().then((response) =>{
            // console.log(response.cus_data);
            commit('SET_ADDRESS', response.cus_data.address);
            commit('SET_NAME', response.cus_data.name);
            commit('SET_PHONE', response.cus_data.phone);
        });
    }
};
const user = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
export default user;
import axios from "axios";

const url = process.env.VUE_APP_BASE_URL;
const instance = axios.create({
    baseURL: 'https://ft-ec-one_shop.lytc.dev/',
    // baseURL: 'https://ft-ec-one_shop.lytc.dev',
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json'
  // },
    timeout:1000
  });

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers.Authorization ='Bearer '+localStorage.getItem("vue-authenticate.vueauth_access_token");
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  export default instance;


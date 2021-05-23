import axios from "axios"
import Vue from "vue"
import vueAxios from "vue-axios"


const axiosApi = axios.create({
    baseURL: `https://dw2021.herokuapp.com/`,
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token") ? localStorage.getItem("token") : ''}}`
    // }

})


Vue.use(vueAxios, axios)

export default axiosApi;
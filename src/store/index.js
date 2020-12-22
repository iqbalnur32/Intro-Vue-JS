import Vue from "vue"
import Vuex from "vuex"
import router from "../router/index"
import server from "../config/server"
// import { JwtToken } from "../helpers/jwt-token"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        errMessage: [],
        successMessage: '',
        token: '',
        users: '',
        myProfile: []
    },
    mutations: {
        SET_ISLOGIN(state, payload){
            state.isLogin = payload
        },
        SET_DATA_PROFILE(state, payload){
            state.myProfile = payload  
        },
        SET_ERR_MESSAGE(state, payload){
            // console.log(payload);
            state.errMessage = payload
        },
        SET_TOKEN_JWT(state){
            const headers = localStorage.getItem('token')
            const split = headers.split('.')
            const split2 = split[1]
            const base64 = atob(split2)
            const json = JSON.parse(base64)
            state.token = json
        }
    },
    actions: {
        login(context, payload){
            server({
                url: 'api/auth/login',
                method: 'POST',
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
            .then(({data}) => {
                console.log(data);
                if (data.status === 422) {
                    console.log(data.data);
                    alert('validation error')
                }else{ 
                    this.commit('SET_ISLOGIN', true)
                    localStorage.setItem('token', data.data.token)
                    this.commit('SET_TOKEN_JWT')
                    setTimeout(function() {
                        // alert('berhasil')
                        router.push({
                            name: "Home"
                        })
                    }, 1000);
                }
            })
            .catch(({err}) => {
                console.log(err)
            })
        },
        getProfile({commit}, context){            
            return server({
                url: 'api/users/profile',
                method: 'GET',
                headers: {
                    Authorization: 'datting ' + localStorage.getItem('token')
                }
            })
            /*.then(({data}) => {
                // console.log(data.data.data.users_update.no_telp)
                this.commit('SET_DATA_PROFILE', data.data.data)
                // console.log(data.data.data.users_update)
            })
            .catch((err) => {
                alert('error')
            })*/
        },
        updateProfile(context, payload){
            server({
                url: 'api/users/profile/update',
                method: 'POST',
                headers: {
                    Authorization: 'datting ' + localStorage.getItem('token')
                },
                data: {
                    no_telp: payload.no_telp,
                    alamat: payload.alamat
                }
            })
            .then(({data}) => {
                
                if (data.status == false) {
                    alert('validation error')
                    this.commit('SET_ERR_MESSAGE', data.message)
                }else{
                    console.log(data.data);
                    alert('berhasil update data');
                }
            })
            .catch((err) => {
                alert('error')
            })
        },
        getAll({commit}, payload){
            return server({
                url: 'api/users/all',
                method: 'GET',
                headers: {
                    Authorization: 'datting ' + localStorage.getItem('token')
                }
            })
            /*.then(({data}) => {
                console.log(data.data);
            })
            .catch(({err}) => {
                console.log(err);
            })*/
        },
        logout: async (context, payload) => {
            alert('berhasil logout')
            await localStorage.clear()
            await context.commit('SET_ISLOGIN', payload)

            await router.push({
                name: 'Login'
            })
        }
    }
})
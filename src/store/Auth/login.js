import axios from 'axios';


export default{
  state:{
    status:'',
    token: localStorage.getItem('token') || '',
    user:null,
  },
  mutations:{
    auth_request(state){
      state.status = 'loading'
    },
    auth_succes (state, token, user){
      state.status = 'succes',
      state.user = user,
      state.token = token
    },
    get_user(state, payload){
      state.user = payload
    },
    auth_error(state){
      state.status = 'error'
    },
    logOut(state){
      state.token = '',
      state.status = ''
    }
  },
  actions:{
    login({commit}, FP){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: process.env.VUE_APP_URL+ 'api/v1/users/login', data:FP, method:'POST'})
        .then(resp =>{
          console.log( resp.data.data)
          const token = resp.data.data
          localStorage.setItem('token', token)
  
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_succes', token)
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logOut ({commit}) {
      return new Promise((resolve) => {
      commit('logOut')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
      })
    }
  },
  getters:{
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
}
import axios from 'axios';


export default{
  state:{
    status:'',
  },
  mutations:{
    regis_request(state){
      state.status = 'loading'
    },
    regis_succes (state){
      state.status = 'succes'
    },
    regis_error(state){
      state.status = 'error'
    }
  },
  actions:{
    register({commit}, register){
      return new Promise((resolve, reject) => {
        commit('regis_request')
        axios({url: process.env.VUE_APP_URL+ '/api/v1/users/register', data:register, method:'POST'})
        .then(resp =>{
          commit('regis_succes')
          resolve(resp)
        })
        .catch(err => {
          commit('regis_error')
          reject(err)
        })
      })
    },
  },
  getters:{
    regisStatus: state => state.status,
  }
}
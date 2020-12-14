import fetch from '../../fetch'

export default{
  state:{
    user:null,
    status:''
  },
  mutations:{
    SET_USER:(state, payload) =>{
      state.status = payload
    },
    SET_DATA_USER:(state,user) =>{
      state.status = "succes",
      state.user =  user
    },
    UPDATE_USER:(state, user) =>{
      
    }
  },
  actions:{

  },
  getters:{

  }
}
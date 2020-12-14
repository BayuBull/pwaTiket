<template>
  <div>
    <v-card 
    class="pa-5"
    flat
    color="#fafafa">
     <v-card-title 
         class="d-flex justify-center">
         <h3
          class="titleeditUser"
         >Edit User
         </h3>
        </v-card-title>
            <v-form
            @submit.prevent="updateProfile">
            <span>Nama</span>
                <v-text-field
                  placeholder="Nama"
                  type="email"
                  v-model="fullname"
                  outlined
                  dense
                ></v-text-field>
                <span>Password <span class="ops">(Opsional)</span></span>
                <v-text-field
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  placeholder="Password"
                  hint="At least 8 characters"
                  v-model="password"
                  outlined
                  class="input-group--focused"
                  @click:append="show = !show"
                  dense
              ></v-text-field>
              <div class="boxBtn">
                <v-btn
                  color="orange lighten-1"
                  class="btn-editUser"
                  width="40%"
                  type="submit"
                >
                    <span>Save</span>
                </v-btn>
              </div>
            </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import fecth from '../../fetch'
export default {
    name:'cardeditUser',
    data: () =>({
        fullname:'',
        password:null,
        show: false,
    }),
    methods:{
      getData(){
        const token = localStorage.getItem('token')
        axios.get('http://192.168.43.14:3000/web/api/v1/users',
                        {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                      }
                      
                  )
        .then((result) => {
          this.fullname = result.data.data.name
     
        }).catch((err) => {
          console.log(err)
        });
      },
      updateProfile () {
        const token = localStorage.getItem('token')
        axios.put(
                `http://192.168.43.14:3000/web/api/v1/users`,
                {
                    fullname: this.fullname,
                    password: this.password
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ) .then((result) => {
              console.log(result)
              }).catch((err) => {
                console.log(err)
              }); 
        }
    },
    mounted(){
      this.getData();
    }
}
</script>
<style scoped>
.boxBtn{
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  width: 100%;
}
.btn-editUser{
  color: white;
}
.ops{
  font-size: 12px;
  font-style: italic;
}
</style>
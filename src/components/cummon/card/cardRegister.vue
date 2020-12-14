<template>
  <div>
    <v-card class="pa-5" flat color="#fafafa">
     <v-card-title 
         class="d-flex justify-center">
         <h3
          class="titleregister"
         >DAFTAR
         </h3>
        </v-card-title>
            <v-form
            @submit.prevent="register">
            <span>Nama</span>
                <v-text-field
                placeholder="Nama"
                type="email"
                v-model="fullname"
                outlined
                dense
                ></v-text-field>
                <span>Password</span>
                <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                name="input-10-2"
                placeholder="Password"
                v-model="password"
                hint="At least 8 characters"
                outlined
                class="input-group--focused"
                @click:append="show = !show"
                dense
              ></v-text-field>
              <span>Ulangi Password</span>
                <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-2"
                placeholder="Ulangi Password"
                hint="At least 8 characters"
                v-model="password_confirmation"
                outlined
                class="input-group--focused"
                @click:append="show1 = !show1"
                dense
              ></v-text-field>
              <div class="boxBtn">
                <v-btn
                  color="orange lighten-1"
                  class="btn-register"
                  width="40%"
                  type="submit"
                >
                    <span>Daftar</span>
                </v-btn>
              </div>
            </v-form>
    </v-card>
  </div>
</template>

<script>
import fetch from '../../../fetch'
export default {
    name:'cardregister',
    data: () =>({
        // usernameRules: [
        // v => !!v || 'Sorry, wrong email format',
        // v => /.+\..+/.test(v) || 'Sorry, wrong email format',
        // ],
        fullname:'',
        password:'',
        show: false,
        show1: false,
    }),
     methods: {
        async register(){
            let fullname = this.fullname
            let password = this.password
            let password_confirmation = this.password_confirmation

            this.$store.dispatch('register', {fullname,password,password_confirmation})
            .then(res =>{
                this.$router.push('/')
            })
            .catch(err =>{
            console.log(err)
            })
        }
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
.btn-register{
  color: white;
}
.lupaPassword{
  font-size: 12px;
  width: 100%;
  text-align: end;

}
</style>
<template>
  <div>
    <v-card class="pa-5">
     <v-card-title 
         class="d-flex justify-center">
         <h3
          class="titleLogin"
         >MASUK
         </h3>
        </v-card-title>
            <v-form
            @submit.prevent="login">
            <span>Nama</span>
                <v-text-field
                placeholder="Nama"
                type="email"
                v-model="username"
                outlined
                dense
                ></v-text-field>
                <span>Password</span>
                <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                name="input-10-2"
                placeholder="Password"
                hint="At least 8 characters"
                outlined
                class="input-group--focused"
                @click:append="show = !show"
                dense
              ></v-text-field>
              <div class="boxBtn">
                <v-btn
                  color="orange lighten-1"
                  class="btn-Login"
                  width="40%"
                  type="submit"
                  to="/register"
                >
                    <span>Daftar</span>
                </v-btn>
                <v-btn
                  color="blue lighten-1"
                  class="btn-Login"
                  width="40%"
                  type="submit"
                >
                   <span>Masuk</span>
                </v-btn>
                  </div>
                  <div class="d-flex">
                     <span class="lupaPassword my-4">
                        <router-link to="/" class=" text-decoration-none">Lupa password ?</router-link>
                    </span>
                  </div>   
            </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
    name:'cardLogin',
    data: () =>({
        // usernameRules: [
        // v => !!v || 'Sorry, wrong email format',
        // v => /.+\..+/.test(v) || 'Sorry, wrong email format',
        // ],
        username:'',
        password:'',
        show: false,
    }),
}
</script>

<style scoped>
.boxBtn{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
}
.btn-Login{
  color: white;
}
.lupaPassword{
  font-size: 12px;
  width: 100%;
  text-align: end;

}
</style>
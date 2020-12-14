<template>
    <span>
        <v-navigation-drawer app v-model="drawer" disable-resize-watcher  class="hidden-sm-and-up">
            <v-list >
              <v-list-item-title class="title ml-4">
                {{appTitle}}
              </v-list-item-title>
              <div v-if="!isLoggedIn">
                 <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-icon>
                    <v-icon>{{item.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title >{{item.title}}</v-list-item-title>
                </v-list-item>
              </div>
             
            <div v-if="isLoggedIn">
               <v-list-item v-for="(item, index) in itemsTwo" :key="index" :to="item.link">
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
               <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
            </div>
             <v-list-item class="d-flex justify-center">
              <v-btn flat color="blue lighten-1" width="100%" v-if="!isLoggedIn" class="btnAunt" href="/"><span>LOGIN</span></v-btn>
            </v-list-item>
             <v-list-item class="d-flex justify-center" v-if="isLoggedIn">
              <v-btn flat color="red lighten-1" width="100%" class="btnAuntLogOut" @click="logOut"><span>LOGOUT</span></v-btn>
            </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app height="50" flat elevation="1">
            <v-app-bar-nav-icon class="hidden-xs-and-down" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
        </v-toolbar>
    </span>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Tiket',
            drawer: false,
            items: [
                { title: 'Contact', icon: "mdi-cellphone"}
            ],
             itemsTwo: [
                { title: 'Contact', icon: "mdi-cellphone"},
                { title: 'Pesan Tiket', icon: "mdi-shopping", link: '/pesantiket'},
                { title: 'Edit Profile', icon: "mdi-account", link: '/edituser'},
                { title: 'Tiket', icon: "mdi-animation"}
                
            ]
        };
    },
     computed:{
       
      ...mapGetters(["isLoggedIn"])
      
    },
    methods:{
      logOut(){
        this.$store.dispatch('logOut')
        this.$router.push('/')
      }
    }
};
</script>

<style scoped lang='scss'>
.btnAunt{
  margin: 0px 10px 0px 10px;
}
.btnAuntLogOut{
  margin: 0px 10px 0px 10px;
  position: relative;
  top: -50px;
}
.btnAuntLogOut span{
  color: white;
}
.btnAunt span{
  color: white;
}
.listMenu{
  list-style: none;
}
.link{
  text-decoration: none;
}
a{
  color: black;
  text-decoration: none;
}
</style>
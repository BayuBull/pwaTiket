<template>
    <span>
        <v-navigation-drawer app v-model="drawer" disable-resize-watcher  class="hidden-sm-and-up">
            <v-list >
              <v-list-item-title class="title ml-4">
                {{appTitle}}
              </v-list-item-title>
              <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title >{{item.title}}</v-list-item-title>
            </v-list-item>
             <v-list-item class="d-flex justify-center">
              <v-btn flat color="primary lighten-3" width="100%" class="btnAunt"><span>Sign In</span></v-btn>
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
            token:'',
            items: [
                { title: 'Home', icon: "mdi-home" },
                { title: 'Profile', icon: "mdi-account"},
                { title: 'Blog', icon: "mdi-home"},
                { title: 'How To Buy', icon: "mdi-home"},
                { title: 'Contact', icon: "mdi-home"}
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
.btnAunt span{
  color: white;
}
.listMenu{
  list-style: none;
}
.link{
  text-decoration: none;
}
</style>
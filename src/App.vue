<template>
  <v-app>
    <v-main>
        <Nav/>
          <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/globalComponents/Appbar';

export default {
  name: 'App',

  components: {
    Nav,
  },

  data: () => ({
  }),
};
</script>

<template>
  <v-app>
      <Appbar/>
    <v-main>
     
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/globalComponents/Appbar';

export default {
  name: 'App',

  components: {
    Appbar,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <div class="home">
    <v-row class="d-flex justify-center mt-6 BoxRow">
          <cardTiketHome /> 
    </v-row>
    <v-row>
    
    </v-row>
  </div>
</template>

<script>
import cardTiketHome from '../components/cummon/card/cardTiketHome'
export default {
  name: 'Home',
  components: {
    cardTiketHome,
  }
}
</script>
<style scoped>
.BoxRow{
  height: calc(100vh + 100px);
}

</style>

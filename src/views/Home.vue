<template>
  <div class="home">
    <v-row class="d-flex justify-center mt-6">
          <cardTiketHome /> 
    </v-row>
  </div>
</template>

<script>
import cardTiketHome from '../components/cummon/card/cardTiketHome'
export default {
  name: 'Home',
  components: {
    cardTiketHome
  }
}
</script>

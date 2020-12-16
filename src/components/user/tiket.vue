<template>
  <div>
    <v-row>

      <v-card
        width="360px"
        height="100px"
        elevation="1"
        color="white"
        >
        <v-col cols="8" class="gutter">
          <p class="judul pa-0 mb-0">Judul pemandian terbaru</p>
          <p class="subjudul">Judul pemandian terbaru</p>
        </v-col>
        <v-col cols="4">
                <div class="lingkaran"></div>
        </v-col>         
        </v-card>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.judul{
  font-size: 14px;
  margin-left: 5px;
}
.subjudul{
  font-size: 12px;
  margin-left: 5px;
  margin: 0px 0px 0px 10px;
}
/* .gutter{
  border-right: white dashed 4px;
} */

</style>
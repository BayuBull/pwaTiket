<template>
  <div>
    <v-row>
      <v-card
        width="300px"
        height="100px"
        elevation="1"
        color="grey"
        >
        <v-col cols="8" class="gutter">
          <p class="judul pa-0 mb-0">Judul pemandian terbaru</p>
          <p class="subjudul">Judul pemandian terbaru</p>
        </v-col>
        </v-card>
        <div class="lingkaran"></div>
        <div class="lingkaran2"></div>
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
.gutter{
  border-right: white dashed 4px;
 
}
.lingkaran{
  width: 30px;
  background-color: #ffffff;
  height: 30px;
  border-radius: 150px;
  position: relative;
  left: -115px;
  top: -12px;
  
}
.lingkaran2{
  width: 30px;
  background-color: #ffffff;
  height: 30px;
  border-radius: 150px;
  position: relative;
  left: -143px;
  top: 85px;
}
</style>
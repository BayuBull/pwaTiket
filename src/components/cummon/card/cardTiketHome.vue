<template>
  <div>
      <v-card
      class="cardPesan"
      flat
      color="#fafafa"
    >
      <v-card-title>
       <span class="Title mt-3 mb-6">Pesan Tiket</span>
        <v-form
        class="formTiket">
          <!-- date pick -->
          <span class="CapMenu">Tanggal Kedatangan</span>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu = false"
            ></v-date-picker>
          </v-menu>
            <!-- date pick -->
            <!-- Jumlah Pengunjung -->
            <span class="CapMenu">Jumlah Pengunjung</span>
            <div class="d-flex">
              <div class="flex-column BoxBtn">
                    <v-icon
                      color="green"
                      @click="increment"
                       small
                    >
                      mdi-plus
                    </v-icon>
                    <v-icon
                      color="red"
                      small
                      @click="decrement"
                    >
                      mdi-minus
                    </v-icon>
              </div>
              <v-text-field
                label="Outlined"
                single-line
                class="text-center"
                outlined
                :value="JumlahPengunjung"
              ></v-text-field>
            </div>
             <!-- Jumlah Pengunjung
             <span class="CapMenu">Metode Pembayaran</span>
             <div class="d-flex">
                <v-icon
               class="mr-2 iconBox"
                >
                    mdi-credit-card
                </v-icon>
               <v-select
                  :items="items"
                  outlined
                ></v-select>
             </div> -->
             <span class="CapMenu">Total Harga</span>
             <div class="d-flex">
               <v-icon
               class="mr-2 iconBox"
                >
                    mdi-cloud-print
                </v-icon>
               <v-text-field
                single-line
                class="text-center"
                outlined
                v-model="total"
              ></v-text-field>
             </div>
             <div class="d-flex justify-end">
                <v-btn
                  type="submit"
                  depressed
                  color="primary"
                >
                Pesan
                </v-btn>
             </div>
        </v-form>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
 data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      JumlahPengunjung : 0,
      items: ['OVO', 'GOPAY', 'DANA'],
    }),
    computed:{
      total(){
        return this.JumlahPengunjung * 90000
      }
      
    },
    methods: {
      decrement () {
        if(this.JumlahPengunjung > 0){
           this.JumlahPengunjung-- 
        }
      },
      increment () {
        this.JumlahPengunjung++
      },
      pesanTiket(){
        
      }
    }
}
</script>

<style scoped>
.BoxBtn{
  position: relative;
  top: -7px;
}
.formTiket{
  width: 100%;
}
  .Title{
    text-align: center;
    width: 100%;
    font-size: 25px;
  }
  .CapMenu{
    font-size: 15px;
    margin: 10px;
  }
  .BoxBtn{
    width: 31px;
  }
  .cardPesan{
    display: flex;
    width: calc(100vw - 50px);
  }
  .iconBox{
    top: -15px;
    display: relative;
  }
</style>
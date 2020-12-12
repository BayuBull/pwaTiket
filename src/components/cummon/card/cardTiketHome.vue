<template>
  <div>
      <v-card
      elevation="2"
      class="cardPesan"
      max-width="300px"
    >
      <v-card-title>
       <span class="Title mt-3 mb-6">Pesan Tiket</span>
        <v-form>
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
                  <v-button>
                    <v-icon
                      color="red"
                      @click="increment"
                    >
                      mdi-plus
                    </v-icon>
                  </v-button>
                      <v-button>
                  <v-icon
                      color="green"
                      @click="decrement"
                    >
                      mdi-minus
                    </v-icon>
                  </v-button>
              </div>
              <v-text-field
                label="Outlined"
                single-line
                class="text-center"
                outlined
                :value="JumlahPengunjung"
              ></v-text-field>
            </div>
             <!-- Jumlah Pengunjung -->
             <span class="CapMenu">Total Harga</span>
             <div class="d-flex">
               <v-icon
               class="mr-2 Creditcard"
                >
                    mdi-credit-card
                </v-icon>
               <v-text-field
                label = "Outlined"
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
    }
}
</script>

<style scoped>
  .Title{
    text-align: center;
    width: 100%;
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
  }
  .Creditcard{
    top: -15px;
    display: relative;
  }
</style>
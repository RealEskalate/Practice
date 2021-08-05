<template>
    <v-container class="black--text">
    
    <v-row
      no-gutters
      dense
      class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
      sm="6"
      md="3"
    >
      <v-col cols="12">
        <v-card color="#FFFFFF" dark nuxt>
          <v-card-title class="mx-auto text-center black--text">
             
            <v-list-item>
                <img width="200px" src="../assets/meti.jpg" />
              </v-list-item>
              <v-list-item-subtitle>
              <p class="blogger-name">
              {{ blogger.name }}
               
            </p>
            </v-list-item-subtitle>
              <v-list-item-subtitle>
              <p class="blogger-desc text-sucess">
              {{ blogger.description }}
            </p>
            </v-list-item-subtitle>
            
            
            
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name:'Header',
    data() {
      return {
        title : '',
      }
    },
    computed : {
        ...mapState('meti',['blogger'])
    },
    methods :{
      
    },
    created() {
		  mapState('meti',['blogger'])
	},
}
</script>

<style scoped>
.blogger-name{
  font-family: 'Times New Roman', Times, serif;
  text-align:left;
  font-weight: 40px;
  font-size: 30px;
  
}
.blogger-desc {
  text-align:left;
  font-weight: 40px;
  font-size: 20px;

}
.hey{
  color: green;
}
</style>
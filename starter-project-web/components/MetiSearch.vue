<template>
    <v-container class="black--text">
    <v-col cols="12">
    <v-row class="mx-auto searchContainer" >
      <form @submit.prevent="searchForPost">
            <v-row style="padding-right: 5px; float:right; position:absolute; top:10px; right:10px;">
              <v-col>
                <v-text-field
                  v-model="searchKey"
                  required
                  name="Search"
                  placeholder="Search "
                  dense
                  light
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <v-card-actions>
                  <v-btn type="submit" class="btn-submit"> Search todo </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </form>
    </v-row>
    </v-col>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import Vue from 'vue';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
export default {
    name:'Search',
    data() {
      return {
        searchKey : ''
      }
    },
    computed : {
       
       ...mapActions('meti', ['searchP'] ),
       ...mapGetters('meti', ['allPosts']),
    },
    methods :{
      searchForPost(){
        if (this.searchKey !== ''){
          this.$store.dispatch("meti/searchForPost",this.searchKey)        
        }
      }
    }
}
</script>

<style scoped>
.btn-submit{
  background: #861388 !important;
}
</style>






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
                <v-card-action>
                  <v-btn type="submit" class="btn-submit"> Search todo </v-btn>
                </v-card-action>
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
       
    },
    methods :{
       ...mapActions('meti', ['searchP'] ),
       ...mapGetters('meti', ['allPosts']),
      searchForPost(){
        console.log(this.searchKey)

        for (post in this.allPosts){
          console.log(post.title)
          break
        }
        console.log("************************************")

        this.searchP(this.searchKey)
        for (post in this.allPosts){
          console.log(post.title)
          break
        }
        if (this.searchKey !== ''){
          
        
        }
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>






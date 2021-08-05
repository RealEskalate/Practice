<template>
    <v-container class="black--text">
    <form @submit.prevent="addThis">
            <v-row style="margin:auto; justify-content:center; text:center; padding: 20px">
              <v-col>
                <v-text-field
                  required            
                  name="todo"
                  v-model="title"
                  placeholder="Add new to do"
                  dense
                  light
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <v-card-action>
                  <v-btn type="submit" class="btn-submit"> Add Todo </v-btn>
                </v-card-action>
              </v-col>
            </v-row>
          </form>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import Vue from 'vue';
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
export default {
    name:'AddPost',
    data() {
      return {
        title : ''
      }
    },
    computed : {
        ...mapState('meti',['allPosts'])
    },
    methods :{
        ...mapActions('meti',['addPost']),
      addThis(){
          console.log(this.title)
          this.addPost(this.title)
          this.title = ''
          
      }
    }
}
</script>

<style scoped>
.btn-submit{
    background: crimson !important;
    font-weight: 50px;
    padding: 10px;
}
</style>






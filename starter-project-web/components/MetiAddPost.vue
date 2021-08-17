<template>
    <v-container class="black--text">
    <form @submit.prevent="addNewPost">
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
                <v-card-actions>
                  <v-btn type="submit" class="btn-submit"> Add Todo </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </form>
  </v-container>
</template>
<script>
import { mapActions} from 'vuex';
import "vuetify/dist/vuetify.min.css";
export default {
    name:'AddPost',
    data() {
      return {
        title : ''
      }
    },
    computed : {
        ...mapActions('meti',['addPost']),
    },
    methods :{
      addNewPost(){
          this.$store.dispatch("meti/addPost", this.title)
          this.title = ''          
      }
    }
}
</script>

<style scoped>
.btn-submit{
    background: #861388 !important;
    font-weight: 50px;
    padding: 10px;
}
</style>






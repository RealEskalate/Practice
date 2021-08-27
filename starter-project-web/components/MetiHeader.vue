<template>
    <v-container class="black--text"> 
        <v-card color="#FFFFFF" dark nuxt>
          <v-card-title class="mx-auto text-center black--text">
             
            <v-list-item>
                <img width="200px" src="@/assets/meti.jpg" />
              </v-list-item>
              <v-list-item-subtitle class="bloggerName">
              {{ bloggerInfo.name }}
               
            </v-list-item-subtitle>
              <v-list-item-subtitle class="blogger-desc text-sucess">
              {{ bloggerInfo.description }}
            </v-list-item-subtitle>
            
            
            
          </v-card-title>
        </v-card>
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
        ...mapGetters('meti',['bloggerInfo'])
    },
    created() {
		  this.$store.state.blogger
	},
}
</script>

<style scoped>
.bloggerName{
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
</style>
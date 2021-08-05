<template>
    <v-container class="black--text">
    <h3 class="hey">All Blogs </h3>
    
    <v-row
      no-gutters
      dense
      class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
      sm="6"
      md="3"
    >
      <v-col 
      
      v-for="post in allPosts"
      :key="post.userId"
      cols="12"
      
      >
        <v-card color="#FFFFFF" dark nuxt>
          <v-card-title class="mx-auto text-center black--text p-5">
            <p>
              {{ post.title }}
               
            </p>
            <v-btn v-on:click = "del(post.id)" class="del-btn padding-right: 5px; float:right; position:absolute; top:10px; right:10px;"> X </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name:'blogs',
    data() {
      return {
        title : '',
      }
    },
    computed : {
        ...mapState('meti',['allPosts'])
    },
    methods :{
      ...mapActions('meti', ['deletePost']),
      ...mapActions('meti', ['fetchTodos']),
      del : function(id) {
        console.log("delete pressed", id);
			  this.deletePost(id);
      }
    },
    created() {
		  this.fetchTodos();
	},
}
</script>

<style scoped>
.del-btn{
  float:right;
  position: absolute;
  top:5px;
  right:10px;

}
.hey{
  color: green;
}
</style>
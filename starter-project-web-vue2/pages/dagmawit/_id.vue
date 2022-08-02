<template>
  <div>
    <nuxt-link :to="'/dagmawit/'">
      <v-btn class="ma-2" color="#1F7087" dark>
        <v-icon dark left> mdi-arrow-left </v-icon>Back
      </v-btn>
    </nuxt-link>
    <h1>Title: {{ blogTitle }}</h1>
    <hr />
    <v-container
      ><h4>{{ blogContent }}</h4></v-container
    >
  </div>
</template>

<script>
import axios from 'axios';

export default ({
    data(){
        return{
            blogTitle:'',
            blogContent:''
        }
    },

    async created() {
  // GET request using axios with async/await
  const response = await axios.get('https://blog-app-backend.onrender.com/api/articles/'+ this.$route.params.id);
  this.blogTitle = response.data.blogTitle;
  this.blogContent = response.data.blogContent;

}


    
})
</script>



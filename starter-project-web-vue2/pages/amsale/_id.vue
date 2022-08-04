<template>
  <v-card class="m-5">
    <v-card-title>{{title}}</v-card-title>
    <v-row>
     
      <v-col>
        <v-card-text>{{content}}</v-card-text>
      </v-col>
       <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="250"
          max-width="550"
          v-bind:src="img"
        ></v-img>
      </v-col>
    </v-row>
     <v-divider dark></v-divider>
     <v-card-actions>
    
        <v-list-item two-line>
          <v-list-item-avatar>
                <img src="https://picsum.photos/id/11/10/6">
              </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>By : {{fullname}}</v-list-item-title>
            <v-list-item-subtitle>{{email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
         <v-spacer></v-spacer>
        <v-rating
            v-model="rating"
            background-color="purple lighten-3"
            color="purple"
            small
          ></v-rating>
     </v-card-actions>
   
  </v-card>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        content:'',
        title:'',
        rating:4,
        fullname:"",
        email:"",
        img:""
       
      }
    },
    async created(){
      const config = {
        headers:{
          Accept : 'application/json',
        }
      }
      try{
        const response = await axios.get( `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`,
        config)
        console.log(response)

        this.content = response.data.content
        this.title = response.data.title
        this.fullname = response.data.authorUserId.fullName
        this.email = response.data.authorUserId.email
        this.img = response.data.imageUrls[0]

      }
      catch(err){
        console.log(err)
      }
    }
  }
</script>

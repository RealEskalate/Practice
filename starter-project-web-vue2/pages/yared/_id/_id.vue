<template>
    <div>
        <h1>{{joke.title}}</h1>
        <hr>
        <div class="description">
            <p>{{joke.description}}</p>
       </div>
       <small>Created at: {{date}}</small>
       <v-btn
        absolute
        style="right:9%;"
        :to="'/yared'"
        elevation="2"
        nuxt
        >Go Back</v-btn>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name:"BlogDetail",
    data(){
        return{
            joke: {},
            date: this.giveDate()
        }
    },
    methods:{
        giveDate(){
            return Date(this.joke)
        }
    },
    async created(){
        const res = await axios.get(`https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`)
        this.joke = res.data
   }
    
}
</script>
<style scoped>
.description{
    margin:20px 30px;

}
</style>
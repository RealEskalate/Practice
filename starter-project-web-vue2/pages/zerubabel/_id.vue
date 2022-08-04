<template>
    <v-container>
        <v-row>
          <v-btn
          class="ma-2"
          color="primary"
          dark
        >
          <nuxt-link to="/zerubabel" class="link">
            <v-icon
              dark
              left
            >
              mdi-arrow-left
            </v-icon>Back
          </nuxt-link>
        </v-btn>
        </v-row>
        <v-row class="pa-6 d-flex flex-column">
          <v-row class="d-flex flex-column">
            <h1 class="title">{{blog.title}}</h1>
            <h3 class="author">Author: {{blog.author}}</h3>
          </v-row>
          <v-row>
            <p class="desc">{{blog.description}}</p>
          </v-row>
        </v-row>
    </v-container>
</template>

<script>
import { mapState} from 'vuex'

export default {
  data(){
    return {
      id: null,
      blog: null
    }
  },
  computed: {
    ...mapState('zerubabel', ['blogs']),
    },
  created(){
    const path = this.$route.fullPath.split('/')
    this.id = path[path.length - 1]
    this.blogs.forEach(element => {
      if(element._id === parseInt(this.id)){
        this.blog = element
      }
    });
  }
}
</script>

<style scoped>
.link{
  text-decoration: none;
  color: #fff;
}  

.title{
  color: #1e1e1e;
}

.author{
  color: grey;
  font-size: 15px;
  margin-top: 15px;
}

.desc{
  color: #1e1e1e;
  margin-top: 15px;
}
</style>
<template>
<div class="blog-item">
    <v-container class="pa-2 mb-6 mx-7 mt-3">
      <AddBlog />
    </v-container>
          <v-card
            color="#00FFFF"
            dark
          >
          <v-list-item two-line>
          <v-list-item-content>

            <v-card-title class="text-h5 mt-1">
              <span class="text-h6 font-weight-bold">Classic Books</span>
            </v-card-title>

            <v-card-subtitle>'Altough most classic novels are a bit harder to read, they carry the authenticity with a time-stamp that takes you to a time you;ve never been.'</v-card-subtitle>
            <v-card-text>Luhana</v-card-text>
            </v-list-item-content>
            <v-card-actions>
              <v-btn
              color="white"
              right>
                <v-icon
                color="#00FFFF">mdi-delete</v-icon>
              </v-btn>
              <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/luhana/id'"
              >
               <v-btn text>
                View Blog
              </v-btn>
            </nuxt-link>
            </v-card-actions>
          </v-list-item>
          </v-card>
      
</div>
</template>

<script>
import AddBlog from '../luhana/LuhanaAddBlog.vue'
export default {
  name: 'BlogPost',
  components: {
    AddBlog,
  },
}
</script>

<style scoped>
 .blog-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
 }
</style>
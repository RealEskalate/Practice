<template>
  <v-col >
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="img"
      >
        <v-card-title>
          <nuxt-link
            style="text-decoration: none; color: #fff"
            :to="`/yared/${blog._id}`"
            nuxt
            >{{ blog.title }}</nuxt-link
          >
        </v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> ID: {{ blog._id }} </v-card-subtitle>
      <v-card-actions>
        <v-dialog>
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" color="yellow" v-on="on"> Update </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <h2>Update Blog</h2>
            </v-card-title>
            <v-form class="px-12" lazy-validation>
              <v-text-field
                v-model="title"
                :counter="20"
                label="Title"
                required
              >
              </v-text-field>

              <v-text-field v-model="content" label="Content" required>
              </v-text-field>

              <v-btn color="success" class="ma-4" @click="onUpdate">
                Update Blog
              </v-btn>
            </v-form>
          </v-card>
        </v-dialog>

        <v-btn
          style="position: absolute; right: 0%"
          class="mx-2"
          fab
          dark
          small
          color="red"
          @click="dltBlg(blog._id)"
        >
          <v-icon dark> mdi-minus </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Blog',
  props: {
    blog: Object,
  },
  data() {
    return {
      id: this.blog._id,
      title: this.blog.title,
      content: this.blog.content,
      img : this.setImg()
    }
  },
  methods: {
    ...mapActions({
      deleteBlog: 'yared/deleteBlog',
      updateBlog: 'yared/updateBlog',
    }),
    setImg(){
      return this.blog.imageUrls.length > 0
            ? this.blog.imageUrls[0]            
            : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
    },
    dltBlg(id) {
      if (confirm('Are you sure?')) {
        this.deleteBlog(id)
      }
    },
    onUpdate(e) {
      e.preventDefault()
      const updBlog = {
        id: this.id,
        title: this.title,
        content: this.content,
      }
      this.updateBlog(updBlog)
    },
  },
}
</script>


<template>
  <v-col>
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="img">
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
        <UpdateBlog :blog="blog" />
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
import UpdateBlog from './UpdateBlog.vue'
export default {
  name: 'Blog',
  components: {
    UpdateBlog,
  },
  props: {
    blog: Object,
  },
  data() {
    return {
      img: this.setImg(),
    }
  },

  methods: {
    ...mapActions({
      deleteBlog: 'yared/deleteBlog',
    }),
    setImg() {
      return this.blog.imageUrls.length > 0
        ? this.blog.imageUrls[0]
        : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
    },
    dltBlg(id) {
      if (confirm('Are you sure?')) {
        this.deleteBlog(id)
      }
    },
  },
}
</script>

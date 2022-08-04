<template>
  <v-col>
    <v-card 
      :to="`/yared/${blog._id}`"
      nuxt 
      max-width="300">
      <v-img class="white--text align-end" height="200px" :src="img">
        <v-card-title>     
            {{ blog.title }}
        </v-card-title>
      </v-img>

      <v-card-subtitle class="pb-3"> {{ blog.description }} </v-card-subtitle>
      <!-- <v-card-actions>
      </v-card-actions> -->
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    blog: Object,
  },
  data() {
    return {
      img: this.setImg(),
    }
  },

  methods: {
    setImg() {
      return this.blog.imageUrls.length > 0
        ? this.blog.imageUrls[0]
        : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
    },
    
  },
}
</script>

<template>
  <v-card
    class="mx-auto mb-5"
    max-width="80%" 
    elevation="5" 
  >
  <nuxt-link 
    style="text-decoration: none"
    :to="'/kaleab/'">
      <v-btn dark class="success pa-2 mb-2 mx-7 mt-3" color="blue"
        >Back</v-btn
      ></nuxt-link
    >
    <v-img
      :src="imageUrl"
      height="100%"
    ></v-img>

    <v-card-title>
    <p>
      {{title}}
    </p>
    </v-card-title>

    <v-card-subtitle>
      {{content}}
    </v-card-subtitle>

    <v-card-text>
        {{description}}
    </v-card-text>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      content: '',
      title: '',
      description: '',
      imageUrl: ''
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const response = await axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`,
        config
      )

      this.content = response.data.content
      this.title = response.data.title
      this.description = response.data.description
      this.imageUrl = response.data.imageUrls[0]
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

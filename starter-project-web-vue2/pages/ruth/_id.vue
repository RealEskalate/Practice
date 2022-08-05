<template>
  <v-app>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/ruth/'">
      <v-btn fab outlined x-small color="green" class="pa-2 mb-2 mx-7 mt-3"
        ><v-icon> mdi-chevron-left </v-icon></v-btn
      ></nuxt-link
    >

    <v-card class="mx-6 my-6">
      <v-card-title>
        <span class="text-h6 font-weight-light">{{ title }} </span>
      </v-card-title>

      <v-card-text class="text-h6">
        {{ content }}
      </v-card-text>

      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title>{{ author }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: 1,
      title: '',
      content: '',
      author: '',
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`,
        config
      )

      this.author = 'By ' + res.data.authorUserId.fullName
      this.content = res.data.content
      this.title = res.data.title
    } catch (err) {}
  },
}
</script>

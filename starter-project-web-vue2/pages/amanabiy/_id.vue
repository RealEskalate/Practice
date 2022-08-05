<template>
  <v-app>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/amanabiy/'">
      <v-btn fab outlined x-small color="green" class="pa-2 mb-2 mx-7 mt-3"
        ><v-icon> mdi-chevron-left </v-icon></v-btn
      ></nuxt-link
    >

    <v-card class="mx-6 my-6">
      <v-card-title>
        <span class="text-h6 font-weight-bold">{{ blogDetails.title }}</span>
      </v-card-title>

      <v-card-text class="subtitle-2">
        {{ blogDetails.content }}
      </v-card-text>

      <v-list-item class="font-weight-light">
        <v-list-item-title class="-2 font-weight-light">
          By {{ AuthorfullName }}
        </v-list-item-title>
      </v-list-item>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => {
    return {
      blogDetails: {},
      AuthorfullName: {},
    }
  },
  computed: {
    ...mapGetters('amanabiy', ['getOneBlog', 'getAllBlogs']),
  },

  async created() {
    try {
      const response = await this.$axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`
      )
      this.blogDetails = response.data
      this.AuthorfullName = this.blogDetails.authorUserId.fullName
    } catch (err) {}
  },
  methods: { ...mapActions('amanabiy', ['getBlogs']) },
}
</script>

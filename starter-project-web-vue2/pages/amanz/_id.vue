<template>
  <v-container>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/amanz/'">
      <v-btn fab outlined x-small color="green" class="pa-2 mb-2 mx-7 mt-3"
        ><v-icon> mdi-chevron-left </v-icon></v-btn
      ></nuxt-link
    >
    <v-card :elevation="3" class="mx-auto mt-2 pa-8 transition-swing" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h4 mb-5">
            <v-text> {{ blog.title }} {{ id }} </v-text>
          </v-list-item-title>
          <v-text class="text-h5 text-wrap font-weight-regular">{{
            blog.content
          }}</v-text>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-text class="text-h5 mt-5 ml-2 font-italic"
          >By {{ blog.author }}</v-text
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {
        _id: 1,
        title: 'Blog',
        author: 'Amanz Alemayehu',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    }
  },
  // created() {
  //   console.log(this.$route.params.id)
  // },
}
</script>

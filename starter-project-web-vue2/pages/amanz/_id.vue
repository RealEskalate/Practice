<template>
  <v-container>
    <div v-if="blog === null">loading...</div>
    <div v-else>
      <nuxt-link style="text-decoration: none; color: inherit" :to="'/amanz/'">
        <v-btn fab outlined x-small class="pa-2 mb-2 ml-3 mt-3"
          ><v-icon> mdi-chevron-left </v-icon></v-btn
        ></nuxt-link
      >
      <v-card
        :elevation="3"
        class="mx-auto mt-2 pa-8 transition-swing"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h4 mb-5">
              <v-text> {{ blog.title }} </v-text>
            </v-list-item-title>
            <v-text class="text-h5 text-wrap font-weight-regular">{{
              blog.content
            }}</v-text>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-text class="text-h5 mt-5 ml-2 font-italic"
            >By Amanuel Alemayehu</v-text
          >
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('amanz', ['blog']),
  },
  created() {
    this.fetchBlogsById(this.$route.params.id)
  },
  methods: {
    ...mapActions('amanz', ['fetchBlogsById']),
  },
  // created() {
  //   console.log(this.$route.params.id)
  // },
}
</script>

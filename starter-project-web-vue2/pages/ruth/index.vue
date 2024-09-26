<template>
  <v-app>
    <v-container ma-8>
      <v-row v-if="isLoggedIn">
        <RuthAddBlog />
      </v-row>
      <v-row v-else>
        <v-alert border="left" dense text color="orange" class="ml-6">
          Login to <strong>add</strong> or <strong>edit</strong> your blogs
        </v-alert>
        <v-spacer></v-spacer>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          to="abraham/login"
        >
          <v-btn class="mr-12" outlined color="green"> Login </v-btn>
        </nuxt-link>
      </v-row>
      <v-row>
        <RuthBlog v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RuthAddBlog from '../../components/ruth/RuthAddBlog.vue'
import RuthBlog from '../../components/ruth/RuthBlog.vue'

export default {
  name: 'App',
  components: { RuthAddBlog, RuthBlog },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  computed: { ...mapState('ruth', ['blogs']) },
  created() {
    this.isLoggedIn = this.$auth.$state.user
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('ruth', ['fetchBlogs']),
  },
}
</script>

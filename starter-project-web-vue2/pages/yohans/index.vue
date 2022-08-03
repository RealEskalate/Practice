<template>
  <v-app>
    <v-main>
      <v-subheader class="d-flex justify-space-between" app>
        <AddBlog></AddBlog>
        <v-item-group>
          <nuxt-link style="text-decoration: none" to="/yohans/login">
            <v-btn color="success" v-ripple="false">LogIn</v-btn>
          </nuxt-link>
          <nuxt-link style="text-decoration: none" to="/yohans/register">
            <v-btn color="success" v-ripple="false">register</v-btn>
          </nuxt-link>
        </v-item-group>
      </v-subheader>
      <v-alert v-if="userLogedIn" dense text type="success">
        successfully!! <strong>loged in</strong>
      </v-alert>
      <BlogList></BlogList>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import BlogList from '../../components/yohans/BlogList.vue'
import AddBlog from '../../components/yohans/AddBlog.vue'
export default {
  name: 'IndexPage',
  components: { BlogList, AddBlog },

  computed: {
    ...mapState({
      userLogedIn: (state) => state.yohans.userLogedIn,
    }),
  },

  methods: {
    ...mapActions({
      fetchBlogs: 'yohans/fetchBlogs',
    }),
  },

  created() {
    this.fetchBlogs()
  },
}
</script>

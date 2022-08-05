<template>
  <v-list flat subheader three-line class="my-50">
    <v-card class="my-20" width="50%">
      <v-subheader> Blogs </v-subheader>
      <div
        v-for="(blog, index) in blogs"
        :key="blog._id"
        :class="{ 'grey lighten-4': index % 2 }"
      >
        <v-list-item>
          <v-list-item-action> </v-list-item-action>

          <v-list-item-content>
            <nuxt-link
              style="text-decoration: none; color: inherit"
              :to="`/amanabiy/${blog._id}`"
            >
              <v-list-item-title>{{ blog.title }}</v-list-item-title>
              <v-list-item-subtitle>
                <span class="font-weight-bold">
                  By {{ blog.authorUserId.fullName || 'some one' }}:
                </span>
                {{ blog.content }}</v-list-item-subtitle
              >
            </nuxt-link>
          </v-list-item-content>

          <v-list-item-action :class="{ disabled: true }">
            <AmanAddBlog :is-edit="true" :blog-id="blog._id" />
          </v-list-item-action>

          <v-list-item-action @click="deleteBlog(blog._id)">
            <v-btn :disabled="blog.authorUserId._id !== loggedInUser" icon>
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-card>
  </v-list>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AmanAddBlog from '../../components/amanabiy/AmanAddBlog.vue'

export default {
  name: 'BlogsList',
  components: {
    AmanAddBlog,
  },
  data: () => {
    return {
      loggedInUser: '',
      current: {},
    }
  },
  computed: { ...mapState('amanabiy', ['blogs']) },
  created() {
    this.getBlogs()
    if (this.$auth.$state.loggedIn) {
      this.loggedInUser = this.$auth.state.user._id
    }
  },
  methods: {
    ...mapActions('amanabiy', ['getBlogs', 'deleteBlog']),
  },
}
</script>

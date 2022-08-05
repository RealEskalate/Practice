<template>
  <div>
    <v-row>
      <v-col v-if="$auth.loggedIn">
        <AmsaleAddBlogVue />
      </v-col>

      <v-col align="end">
        <v-btn v-if="$auth.loggedIn" @click="$auth.logout()">logout</v-btn>
        <v-btn v-else to="/abraham/login">Login</v-btn>
      </v-col>
    </v-row>

    <div v-for="blog in blogs" :key="blog.id">
      <v-card class="mx-auto elevation-20 mt-5">
        <v-row justify="space-between">
          <v-col cols="8">
            <v-card-title>
              <div>
                <div class="text-h5">{{ blog.title }}</div>
              </div>
            </v-card-title>
            <v-card-text>
              {{ blog.description }}
              <div class="">{{ blog.updatedAt.slice(0, 10) }}</div>
            </v-card-text>
          </v-col>
          <v-spacer></v-spacer>
          <v-col align="end">
            <v-btn
              v-if="$auth.loggedIn"
              class="ma-2"
              outlined
              small
              fab
              color="red"
              @click="deleteBlog(blog._id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-4">
          <span class="grey--text text--lighten-1 text-caption mr-1">
            <v-avatar color="grey" size="36">
              <v-img
                contain
                src="http://res.cloudinary.com/hakimhub/image/upload/v1654086909/starter_project/pcen6idszptplrwluiym.png"
                style="flex-basis: 125px"
              ></v-img>
            </v-avatar>
            {{ blog.authorUserId.fullName }}
          </span>

          <v-spacer></v-spacer>
          <nuxt-link
            style="text-decoration: none; color: inherit"
            :to="'/amsale/' + blog._id"
          >
            <v-btn text> Show more </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AmsaleAddBlogVue from './AmsaleAddBlog.vue'
export default {
  name: 'BlogList',
  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    ...mapActions('amsale', ['fetchBlogs', 'deleteBlog']),
  },
  computed: { ...mapState('amsale', ['blogs']) },
  components: { AmsaleAddBlogVue },
  created() {
    this.fetchBlogs()
  },
}
</script>

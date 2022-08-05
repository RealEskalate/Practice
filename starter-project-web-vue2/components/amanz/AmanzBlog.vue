<template>
  <v-container>
    <v-hover v-slot:="{ hover }">
      <v-card
        :elevation="hover ? 7 : 1.5"
        class="mx-auto mt-2 pa-6 transition-swing"
        outlined
      >
        <v-list-item two-line>
          <v-list-item-content>
            <Nuxt-link
              style="text-decoration: none; color: inherit"
              :to="`/amanz/${blog._id} `"
            >
              <v-list-item-title class="text-h5 mb-3">
                <v-text> {{ blog.title }} </v-text>
              </v-list-item-title>
              <v-list-item-subtitle class="text-h6">{{
                blog.content
              }}</v-list-item-subtitle>
            </Nuxt-link>
          </v-list-item-content>

          <v-list-item-action tile class="mt-7 ml-15">
            <EditBlog :blogger="blog" />
          </v-list-item-action>
          <v-list-item-action tile class="mt-7">
            <v-btn icon :disabled="!isAuthor" @click="deleteBlog(blog._id)">
              <v-icon size="30" color="red">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <!-- <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions> -->
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import EditBlog from './EditBlog.vue'
export default {
  name: 'AmanzBlog',

  components: { EditBlog },

  props: {
    blog: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isAuthor: true,
    }
  },
  created() {
    // console.log(this.$auth.$state)
    this.isAuthor = this.blog.authorUserId._id === this.$auth.$state.user._id
  },
  methods: {
    ...mapActions('amanz', ['deleteBlog']),
  },
}
</script>

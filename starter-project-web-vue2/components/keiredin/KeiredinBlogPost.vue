<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <v-container>
    <v-container>
      <AddBlog />
    </v-container>
  <v-row
    v-for="blog in blogs"
    :key="blog.id"
    class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
    sm="6"
    md="3"
  >
    <v-col cols="12">
        <v-card
          class="mx-0"

          dark
          max-width="500"
        >
          <v-card-title>
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="`/keiredin/${blog._id}`"
              >

              <v-icon
                large
                left
              >
                mdi-post
              </v-icon>
              <span class="text-h6 font-weight-bold">{{ blog.title }}</span>
            </nuxt-link>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-light">
            {{ blog.description }}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-avatar>
                  <span>{{ blog.authorUserId.fullName[0] }}</span>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title> {{ blog.authorUserId.fullName }}</v-list-item-title>
              </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <v-btn depressed color="#26c6da" class="mx-2">
                  <v-icon >
                    mdi-pencil
                  </v-icon>
                  <span class="subheading ">edit</span>
                </v-btn>

                <v-btn depressed color="red">
                  <v-icon class="mr-1">
                    mdi-delete
                  </v-icon>
                  <span class="subheading">delete</span>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddBlog from '../keiredin/KeiredinNewBlog.vue'
export default {
  name: 'BlogPost',
    components: {
      AddBlog
    },

  computed: { ...mapGetters('keiredin', ['blogs']) },
  created() {
    this.fetchBlogs()
  },
  methods: {
    ...mapActions('keiredin', ['fetchBlogs']),
  },

}
</script>

<template>
  <div>
    <div :key="blog._id" v-for="blog in allSamiyaBlogs">
      <v-card
        class="mx-auto my-3"
        max-width="400"
        max-height="400"
        elevation="4"
        outlined
        shaped
      >
        <v-card-title>
          {{ blog.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ blog.description }}
        </v-card-subtitle>
        <v-card-text>{{ blog.content }}</v-card-text>

        <v-card-actions class="actions">
          <nuxt-link :blog="blog" :to="'/samiya/' + blog._id">
            <v-btn text>More</v-btn>
          </nuxt-link>
          <v-spacer></v-spacer>
          <div
            v-if="$auth.loggedIn && $auth.user._id === blog.authorUserId._id"
          >
            <v-btn @click="deleteBlog(blog._id)" icon>
              <v-icon large color="red darken-2 " small> mdi-delete </v-icon>
            </v-btn>
            <v-dialog max-width="600">
              <template #activator="{ on, attrs }">
                <v-btn icon color="red lighten-2" dark v-bind="attrs" v-on="on">
                  <v-icon large color="brown darken-2" small>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-text>
                  <v-form @submit.prevent="onSubmit(blog)" class="blog-input">
                    <v-row class="input-group">
                      <v-text-field
                        v-model="title"
                        placeholder="title"
                      ></v-text-field>
                    </v-row>

                    <v-row class="input-group">
                      <v-text-field
                        v-model="description"
                        placeholder="Description"
                      ></v-text-field>
                    </v-row>

                    <v-row class="input-group">
                      <v-textarea
                        outlined
                        v-model="content"
                        placeholder="Detail"
                        value=""
                      ></v-textarea>
                    </v-row>
                    <v-row class="input-group">
                      <v-btn type="submit" rounded color="dark" dark>
                        Done
                      </v-btn>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      content: '',
      description: '',
    }
  },
  name: 'SamiyaBlogs',
  methods: {
    ...mapActions(['fetchBlogs', 'deleteBlog', 'updateBlog']),
    onSubmit(upblog) {
      const blog = {
        _id: upblog._id,
        title: this.title,
        content: this.content,
        description: this.description,
      }
      console.log(upblog.authorUserId._id)
      this.updateBlog(blog)
    },
  },
  computed: mapGetters(['allSamiyaBlogs']),
  created() {
    this.fetchBlogs()
  },
}
</script>

<style scope>
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

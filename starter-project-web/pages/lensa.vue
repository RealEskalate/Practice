<template>
  <v-container class="black--text">
    <v-row dense>
      <v-col cols="12">
        <LensaInfo />
      </v-col>
      <v-spacer />
      <v-col cols="12">
        <v-card outlined color=" white mt-6 mb-6 pa-4">
          <v-form ref="form">
            <v-text-field
              v-model="newtitle"
              light

              :rules="rules"
              label="Title"
              required
              class="px-6 black--text"
            />

            <v-text-field
              v-model="newbody"
              light
              :rules="rules"
              label="Body"
              required
              class="px-6 black--text"
            />

            <v-btn color="warning" class="mr-4" @click="addPost">
              Add Post
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-spacer />
      <v-col cols="12">
        <v-row no-gutters>
          <v-card outlined class="black--text pa-4" color="#FFFFFF" dark>
            <h2>POSTS</h2>
          </v-card>
        </v-row>
      </v-col>
      <v-spacer />
      <v-col cols="12">
        <v-row v-for="post in allPosts" :key="post.id" no-gutters>
          <v-col cols="12">
            <v-card outlined color="#FFFFFF" dark @dblclick="onDblClick(post)">
              <v-card-title class="mx-auto text-center black--text">
                <p>
                  {{ post.title }}
                </p>
              </v-card-title>

              <v-card-subtitle class="black--text">
                {{ post.body }}
                <v-btn icon color="red" @click="deletePost(post.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
import LensaInfo from '@/components/LensaInfo.vue'
export default {
  components: {
    LensaInfo
  },
  data: () => ({
    newtitle: '',
    newbody: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ]
  }),

  computed: {
    ...mapGetters('lensa', ['allPosts'])
  },

  created () {
    this.$store.dispatch('lensa/fetchPosts')
  },

  methods: {
    ...mapActions('lensa', [
      'fetchPosts',
      'addPost',
      'deletePost',
      'updatePost'
    ]),
    ...mapMutations('lensa', [
      'setPosts',
      'newPost',
      'removePost',
      'updatePost'
    ]),

    addPost () {
      this.$store.dispatch('lensa/addPost', {
        title: this.newtitle,
        body: this.newbody
      })
    },
    deletePost (id) {
      this.$store.dispatch('lensa/deletePost', id)
    },
    onDblClick (post) {
      const updPost = {
        id: post.id,
        title: post.title,
        body: post.body
      }

      this.$store.dispatch('lensa/updatePost', updPost)
    }
  }
}
</script>

<style scoped></style>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="3">
        <v-avatar size="200" elevation="100">
          <img src="/lydia_dummy_picture.jpg" alt="Lydia">
        </v-avatar>
      </v-col>

      <v-col cols="6">
        <h1 class="text-h2">
          Lydia Gashawtena
        </h1>
        <p class="mt-3 text-body-2 font-weight-light">
          Part-time member of the web development team currently working on
          projects called TrackSym and Digital Task Listing.
        </p>
      </v-col>
    </v-row>

    <v-card-title class="black--text">
      <v-row>
        <v-col cols="10">
          <h3 class="text-h5">
            Lydia's Posts
          </h3>
        </v-col>
        <v-col cols="2">
          <v-btn left text class="grey--text" @click="handleClick">
            <v-icon
              left
              dark
            >
              mdi-plus
            </v-icon>
            Add Post
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>

    <v-spacer />
    <v-container v-if="textarea_visible" class="px-0">
      <v-text-field
        label="New Post"
        outlined
        @keydown.enter="addPost"
      />
    </v-container>

    <v-card v-for="post in lydia_posts.slice().reverse()" :key="post.id" class="mb-4">
      <v-card-subtitle class="grey--text pb-0">
        {{ post.date }}
      </v-card-subtitle>
      <v-card-text class="black--text">
        {{ post.content }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
const moment = require('moment')

export default Vue.extend({
  data () {
    return {
      textarea_visible: false
    }
  },
  computed: {
    lydia_posts () {
      return this.$store.state.lydia.posts
    },
    next_id () {
      return this.$store.state.lydia.posts[this.$store.state.lydia.posts.length - 1].id + 1
    }
  },
  methods: {
    handleClick () {
      this.textarea_visible = !this.textarea_visible
    },
    addPost (event: { target: HTMLInputElement }) {
      const post = {
        id: this.next_id,
        date: moment().format('LLLL'),
        content: event.target.value
      }
      this.$store.commit('lydia/add', post)
    }
  }
})
</script>

<style scoped></style>

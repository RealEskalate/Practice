<template>
  <v-row>
    <v-col>
      <v-text-field v-model="title" label="Title" placeholder="Placeholder" class="ml-5" light>
        y
      </v-text-field>
    </v-col>
    <v-col>
      <v-text-field v-model="body" label="Post" placeholder="Placeholder" class="ml-5" light>
        y
      </v-text-field>
    </v-col>
    <v-col cols="3">
      <v-btn outlined class="mt-3" color="purple darken-4" @click="submitPost(title,body)">
        Add Post
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'RebeccaAddPosts',
  data () {
    return {
      title: '',
      body: ''
    }
  },
  computed: {
    ...mapState('rebecca', ['posts'])
  },
  methods: {
    ...mapActions('rebecca', ['addPost']),
    submitPost (title, body) {
      this.addPost({ title, body })
    }
  }
}
</script>

<style></style>

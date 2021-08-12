<template>
  <v-row>
    <v-col>
      <v-text-field
        id="title"
        v-model="title"
        label="Title"
        placeholder="Placeholder"
        class="ml-5"
        light
      />
    </v-col>
    <v-col>
      <v-text-field
        id="body"
        v-model="body"
        label="Post"
        placeholder="Placeholder"
        class="ml-5"
        light
      />
    </v-col>
    <v-col cols="3">
      <v-btn
        outlined
        class="mt-3"
        color="purple darken-4"
        @click="submitPost(title, body)"
      >
        Add Post
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RebeccaAddPosts',
  data () {
    return {
      title: '',
      body: ''
    }
  },
  computed: {
    posts () {
      return this.$store.state.rebecca.posts
    }
  },
  methods: {
    submitPost (title, body) {
      const titleInput = document.getElementById('title')
      const bodyInput = document.getElementById('body')

      if (title !== '' && body !== '') {
        this.$store.dispatch('rebecca/addPost', { title, body })
        this.title = ''
        this.body = ''
        titleInput.classList.remove('red')
        bodyInput.classList.remove('red')
      } else {
        this.showError()
      }
    },

    showError () {
      const titleInput = document.getElementById('title')
      const bodyInput = document.getElementById('body')

      titleInput.classList.add('red')
      titleInput.classList.add('lighten-5')

      bodyInput.classList.add('red')
      bodyInput.classList.add('lighten-5')
    }
  }
}

</script>

<style></style>

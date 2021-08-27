<template>
  <v-container class="secondry">
    <AbdiInfo />
    <v-layout row wrap mt-10>
      <AbdiFrom />
    </v-layout>

    <v-layout row wrap mt-10 justify-space-around>
      <AbdiCard v-for="post in getAllPosts" :key="post.id" :post="post" />
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AbdiCard from '~/components/AbdiCard.vue'

export default {
  components: { AbdiCard },

  computed: {
    ...mapGetters('abdi', ['getAllPosts'])
  },
  created () {
    this.fetchPosts()
  },
  methods: {
    ...mapActions('abdi', ['fetchPosts', 'addNewPost']),
    addPost () {
      if (this.$refs.inputs.validate()) {
        const post = {
          title: this.title,
          body: this.body
        }
        this.addNewPost(post)
      }
    }
  }
}
</script>

<style  scoped>
</style>

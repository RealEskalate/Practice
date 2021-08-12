<template>
  <v-card max-width="800" outlined class="purple lighten-4 black--text mx-auto">
    <v-card-title ml-4 outline>
      Add Album
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="userId" class="black--text" placeholder="user Id" />
      <v-text-field v-model="Title" placeholder="Title" />
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="addAlbum">
        Add album
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script >

export default {
  data () {
    return {
      userId: '',
      Title: ''
    }
  },
  methods: {
    addAlbum () {
      this.$store.dispatch('daniel/addAlbum', { userId: this.userId, Title: this.Title })
    }
  }
}
</script>

<style>
</style>

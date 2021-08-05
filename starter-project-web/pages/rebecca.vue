<template>
  <div>
    <v-container class="mt-3">
      <v-card color="grey lighten-4 black--text">
        <v-row class="mb-5">
          <v-col class="ml-5" cols="4">
            <v-card color="white" class="black--text">
              <v-img
                :src="require('../assets/rebecca.jpg')"
                class="grey darken-4"
              />
              <v-card-title class="justify-center">
                Rebecca Samuel
              </v-card-title>
            </v-card>
          </v-col>
          <v-col class="my-auto mx-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              adipisci iure soluta, commodi iste enim unde nobis animi dolore
              ipsam hic voluptas voluptatem architecto sit magni facere quae
              officiis quidem!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              adipisci iure soluta, commodi iste enim unde nobis animi dolore
              ipsam hic voluptas voluptatem architecto sit magni facere quae
              officiis quidem!
            </p>
          </v-col>
        </v-row>
      </v-card>
      <v-card color="grey lighten-5 black--text py-4">
        <RebeccaAddPosts />
        <h1 class="ml-5 mb-4 text-h4">
          Posts
        </h1>

        <v-card
          v-for="post in posts"
          :key="post.id"
          class="ml-5 mr-5 mb-4 grey lighten-5 black--text font-weight-bold"
        >
          <v-card-title>{{ post.title }}</v-card-title>
          <p class="ml-5 mr-5 pb-5 text-body-1">
            {{ post.body }}
          </p>
          <v-btn class="secondary darken-3 mb-6 ml-5" @click="deletePost(post.id)">
            delete
          </v-btn>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RebeccaAddPosts from '../components/RebeccaAddPosts.vue'

export default {
  components: {
    RebeccaAddPosts
  },
  methods: {
    ...mapActions('rebecca', ['getPosts', 'deletePost'])
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapState('rebecca', ['posts'])
  },
  // eslint-disable-next-line vue/order-in-components
  created () {
    this.getPosts()
  }
}
</script>

<style></style>

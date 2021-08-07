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
            <p class="just">
              I'm Rebecca, a third year Software Engineering student at Addis
              Ababa University. I love learning new things about technology.
              Currently, I'm not very sure on which field of Software to pursue,
              I'm always changing my mind. So, for now I want to learn and gain
              experiences in different subjects so that I can choose what
              interests me the most.
            </p>
            <p>
              In the future, I hope to be involved in projects that could maybe
              make an impact on people's lives.
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
          <v-icon
            class="fab white ml-5 mb-3 deep-orange--text text-right"
            @click="$store.dispatch('rebecca/deletePost', post.id)"
          >
            mdi-delete
          </v-icon>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {},
  // eslint-disable-next-line vue/order-in-components
  computed: {
    posts () {
      return this.$store.state.rebecca.posts
    }
  },
  // eslint-disable-next-line vue/order-in-components
  created () {
    this.$store.dispatch('rebecca/getPosts')
  }
}

</script>

<style></style>


<template>
  <v-flex color="#26c6da" xs12 sm6 md4 lg3 my-4 px-1 height="100%">
    <v-card
      class="mx-auto card-outter"
      height="100%"
      color="#26c6da"
      dark
      max-width="400"
      pa-9
    >
    <v-card-actions >
        <v-list-item class="grow">
          <v-row align="center" justify="end">
            <v-btn
              fab
              flat
              small
              dark
              color="rgb(244,67,54,0.2)"
              @click="deletePost(post.id)"
            >
              <span class="text-red">X</span>
            </v-btn>
           
          </v-row>
        </v-list-item>
      </v-card-actions>
     
      <v-card-title>
        <span class="text-h5 font-weight-bold text-justify" >{{
          post.title.toUpperCase()
        }}</span>
      </v-card-title>

      <v-card-text class="text-h6 font-weight-bold">
        {{ post.body }}
      </v-card-text>

      
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  dateI() {
    return {};
  },
  methods: {
    ...mapActions("abdi", ["deletePost"]),
  },
};
</script>

<style scoped>
</style>

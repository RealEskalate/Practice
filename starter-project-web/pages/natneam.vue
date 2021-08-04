<template>
  <div>
    <v-alert dense dismissible outlined text type="error" v-show="showError"
      >Please fill all the fields with valid data</v-alert
    >
    <v-card class="rounded-lg pa-3 purple lighten-5 black--text">
      <v-row>
        <v-col cols="12" md="3" align-self="center">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="250"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </v-col>
        <v-col cols="12" md="9">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="grey--text text--darken-3 text-h4">
                Natnaem Mesele
              </v-list-item-title>
              <v-list-item-subtitle class="grey--text text--darken-1 subtitle">
                se.natneam.mesele@gmail.com
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <p class="grey--text text--darken-2 body px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            perspiciatis velit tenetur quas porro corrupti dolor qui. Harum
            dolorum officiis et dolores, ad nesciunt similique sit sequi
            suscipit non officia ratione dicta possimus. Cumque obcaecati neque
            ea, sapiente similique pariatur. Aspernatur consequuntur molestias
            amet dicta eaque necessitatibus sit eos delectus.
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-card color="purple lighten-5 mt-6 pa-3">
      <p class="grey--text text-h6 pa-2">Create Post</p>
      <v-row>
        <v-text-field
          light
          :rules="rules"
          label="Title"
          color="purple black--text"
          class="px-6"
          v-model="postTitle"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          light
          :rules="rules"
          label="Body"
          color="purple black--text"
          class="px-6"
          v-model="postBody"
        ></v-text-field>
      </v-row>
      <v-row class="px-6 pb-3">
        <v-spacer></v-spacer>
        <v-btn outlined color="purple" @click="createPost()">Post</v-btn>
      </v-row>
    </v-card>

    <p class="black--text mt-5 pt-5 text-h5">POSTS</p>

    <v-card
      class="my-3 purple lighten-5 pa-5"
      v-for="post in posts"
      :key="post.id"
    >
      <v-row no-gutters>
        <v-col cols="12" class="black--text text-h6">
          {{ post.title }}
        </v-col>
        <v-col cols="12" class="black--text">
          {{ post.body }}
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import "material-design-icons-iconfont/dist/material-design-icons.css";

@Component
export default class Natneam extends Vue {
  private posts: Array<any> = [];
  private comments: any = {};
  private postTitle = "";
  private postBody = "";
  private showError = false;

  private rules = [
    (value: any) => !!value || "Required.",
    (value: any) => (value && value.length >= 3) || "Min 3 characters"
  ];

  async created() {
    let data = await axios("https://jsonplaceholder.typicode.com/posts");
    this.posts = data.data.slice(0, 20);

    this.posts.forEach(post => {
      post.show = false;
    });
  }

  createPost() {
    if (
      this.rules[0](this.postTitle) !== "Required." &&
      this.rules[1](this.postTitle) !== "Min 3 characters" &&
      this.rules[0](this.postBody) !== "Required." &&
      this.rules[1](this.postBody) !== "Min 3 characters"
    ) {
      this.posts = [
        {
          userId: 1,
          id: this.posts.length + 1,
          title: this.postTitle,
          body: this.postBody
        }
      ].concat(this.posts);
    } else {
      this.showError = true;
    }
  }
}
</script>

<style></style>

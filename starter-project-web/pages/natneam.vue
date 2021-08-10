<template>
  <div>
    <InfoCard />

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

    <v-alert dense outlined text class="mt-6" type="error" v-show="showError"
      >Please fill all the fields with valid data</v-alert
    >

    <div v-if="posts().length > 0">
      <p class="black--text mt-5 pt-5 text-h5">POSTS</p>
    </div>

    <v-card
      class="my-3 purple lighten-5 pa-5"
      v-for="post in posts()"
      :key="post.id"
    >
      <v-row no-gutters>
        <v-col cols="11" class="black--text text-h6">
          {{ post.title }}
        </v-col>
        <v-col cols="12" class="black--text">
          {{ post.body }}
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <!-- <v-cols cols="1" class="px-6">
          <v-icon color="purple">
            mdi-comment
          </v-icon>
        </v-cols> -->
        <v-cols cols="1" class="px-6">
          <v-icon color="purple" @click="deletePost(post.id)">
            mdi-delete
          </v-icon>
        </v-cols>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InfoCard from "@/components/NatneamInfoCard.vue";
import axios from "axios";

@Component({
  components: {
    InfoCard
  }
})
export default class Natneam extends Vue {
  private postTitle = "";
  private postBody = "";
  private showError = false;
  private rules = [
    (value: any) => !!value || "Required.",
    (value: any) => (value && value.length >= 3) || "Min 3 characters"
  ];

  posts(): Array<any> {
    return this.$store.state.natneamStore.posts;
  }

  updatePosts(posts: Array<any>): void {
    this.$store.commit("natneamStore/updatePosts", posts);
  }

  createPost(): void {
    if (
      this.rules[0](this.postTitle) !== "Required." &&
      this.rules[1](this.postTitle) !== "Min 3 characters" &&
      this.rules[0](this.postBody) !== "Required." &&
      this.rules[1](this.postBody) !== "Min 3 characters"
    ) {
      let updatedPosts = [
        {
          userId: 1,
          id: this.posts().length * 1000 + 1,
          title: this.postTitle,
          body: this.postBody
        }
      ].concat(this.posts());
      this.showError = false;
      this.$store.commit("natneamStore/updatePosts", updatedPosts);
    } else {
      this.showError = true;
    }
  }

  deletePost(id: any) {
    this.$store.commit("natneamStore/removePost", id);
  }

  async created() {
    this.$store.dispatch("natneamStore/fetchPostsFromApi");
  }
}
</script>

<style></style>

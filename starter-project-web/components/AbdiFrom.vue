<template>
  <v-flex xs12 md12 my-15 mx-4>
    <v-form class="px-3" ref="inputs">
      <v-text-field :rules="inputRules" v-model="title" label="Title" />
      <v-textarea :rules="inputRules" v-model="body" label="Body" />
    
      <v-btn
        large
        outline
        block
        @click="addPost"
        color="rgb(38,198,218,0.5)"
        class="mx-0 mt-"
        >post</v-btn
      >
    </v-form>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: "",
      inputRules: [(text) => text.length > 0 || "The Field Can not be empty"],
    };
  },
  methods: {
    ...mapActions("abdi", ["addNewPost"]),
    addPost() {
      if (this.$refs.inputs.validate()) {
        const post = {
          title: this.title,
          body: this.body,
        };
        this.addNewPost(post);
        this.title = ""
        this.body =""
        this.$refs.inputs.resetValidation()

      }
    },
  },
};
</script>

<style  scoped>
</style>
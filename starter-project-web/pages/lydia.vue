<template>
  <v-container>
    <LydiaInfo />
    <v-card-title class="black--text">
      <v-row>
        <v-col cols="10">
          <h3 class="text-h5">
            Lydia's Posts
          </h3>
        </v-col>
        <v-col cols="2">
          <v-btn left text class="grey--text" @click="handleClick">
            <v-icon
              left
              dark
            >
              mdi-plus
            </v-icon>
            Add Post
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>

    <v-spacer />
    <v-container v-if="textarea_visible" class="px-0">
      <p>Add Post</p>
      <v-text-field
        label="New Post"
        outlined
        @keydown.enter="addPost($event.target.value)"
      />
    </v-container>

    <v-container v-if="edit_text_area_visible" class="px-0">
      <p>Edit Post</p>
      <v-text-field
        outlined
        :value="to_edit.body"
        @keydown.enter="updatePost($event.target.value)"
      />
    </v-container>

    <v-card v-for="post in posts.slice().reverse()" :key="post.id" class="mb-4">
      <v-card-subtitle class="grey--text pb-0">
        <v-row>
          <v-col cols="10">
            {{ post.title }}
          </v-col>
          <v-col cols="1">
            <v-btn left text class="grey--text" @click="handleEditClick(post)">
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn left text class="grey--text" @click="deletePost(post.id)">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text class="black--text">
        {{ post.body }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import LydiaInfo from '@/components/LydiaInfo.vue'

export default Vue.extend({
  components: {
    LydiaInfo
  },
  data () {
    return {
      textarea_visible: false,
      to_edit: {},
      edit_text_area_visible: false
    }
  },
  computed: {
    ...mapState('lydia', ['posts'])
  },
  created () {
    this.fetchPosts()
  },
  methods: {
    ...mapActions('lydia', [
      'fetchPosts',
      'addPost',
      'editPost',
      'deletePost'
    ]),
    updatePost (content) {
      this.editPost({ id: this.to_edit.id, body: content, userId: this.to_edit.title, title: this.to_edit.title })
    },
    handleClick () {
      this.textarea_visible = !this.textarea_visible
      this.edit_text_area_visible = false
    },
    handleEditClick (post) {
      this.edit_text_area_visible = !this.edit_text_area_visible
      this.to_edit = post
      this.textarea_visible = false
    }
  }
})

</script>

<style scoped></style>

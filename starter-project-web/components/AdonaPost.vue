<template>
  <div>
    <v-container class="black--text">
      <v-row>
        <v-col cols="10">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="title black--text">
                <p>{{ post.title }}</p>
              </v-list-item-title>
              <p class="body grey--text text--lighten -2">
                {{ post.body }}
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="2">
          <v-icon color="purple" @click="removePost(post.id)">
            mdi-delete
          </v-icon>
        </v-col>
      </v-row>
      <v-divider class="grey lighten-3" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AdonaPost',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: Object
  },
  methods: {
    removePost (id:number) {
      this.$store.dispatch('adona/deletePost', id)
    }
  }
})
</script>
<style scoped>
.body{
  margin: 1rem 0;
}
.title{
  font-size: 20px !important;
}
</style>

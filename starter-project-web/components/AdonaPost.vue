<template>
<<<<<<< HEAD
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
=======
  <div >
    <v-container class="black--text">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="black--text">
            {{ post.title }}
          </v-list-item-title>
          <p class="grey--text text--lighten -2">
            {{ post.body }}
          </p>
        </v-list-item-content>
      </v-list-item>
>>>>>>> 44ae52b264db15a4f3719a41de1a9805eccae6bd
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
<<<<<<< HEAD
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
=======
  }
})
</script>
>>>>>>> 44ae52b264db15a4f3719a41de1a9805eccae6bd

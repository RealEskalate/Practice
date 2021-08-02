<template>
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
  }
})
</script>

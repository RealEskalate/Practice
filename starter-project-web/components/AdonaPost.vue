<template>
  <div>
       <v-pagination
      v-model="page"
      :length="6"
    >
    <v-container class="black--text">
      <v-list-item two-line >
        <v-list-item-content>
          <v-list-item-title class="black--text">
            {{ post.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="grey--text text--darken-2">
            {{ post.body }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="grey lighten-3"/>
    </v-container>
    </v-pagination>
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

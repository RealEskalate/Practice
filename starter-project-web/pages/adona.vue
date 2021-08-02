<template>
  <v-container class="black--text">
<<<<<<< HEAD
    <AdonaInfo />
    <AdonaPosts />
=======
    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <h2>Info</h2>
          </v-card-title>
          <v-list-item class="black--text">
            <v-list-item-content>
              <v-list-item-title>
                Name
              </v-list-item-title>
              <v-list-item-title>
                Photo
              </v-list-item-title>
              <v-list-item-title>
                Description
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12">
        <AdonaPosts />
      </v-col>
    </v-row>
>>>>>>> fetch posts
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AdonaPosts from '../components/AdonaPosts.vue'
<<<<<<< HEAD
import AdonaInfo from '../components/AdonaInfo.vue'
export default Vue.extend({
  components: {
    AdonaPosts,
    AdonaInfo
=======

export default Vue.extend({
  components: {
    AdonaPosts
>>>>>>> fetch posts
  }
})
</script>

<style scoped>
</style>

<template>
  <v-container class="black--text">
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
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AdonaPosts from '../components/AdonaPosts.vue'

export default Vue.extend({
  components: {
    AdonaPosts
  }
})
</script>

<style scoped></style>

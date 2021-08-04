<template>
  <v-container class="black--text">
    <v-card justify="center" max-width="400" color="white" outlined class="font-weight-light text-center mx-auto ">
      <v-card-title dark class="black--text mx-5">
        <span class="text-h2 ">Info</span>
      </v-card-title>
      <v-responsive>
        <v-avatar size="200" tile>
          <img src="../assets/amirPhoto.jpeg">
        </v-avatar>
      </v-responsive>
      <v-divider />

      <v-list-item class="black--text">
        <v-list-item-content>
          <v-list-item-title>
            {{ data.name }}
          </v-list-item-title>
          <v-list-item-title>
            {{ data.desc }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card outlined class="mx-auto">
      <v-row dense>
        <v-col cols="12">
          <v-card color="white">
            <v-card-title class="black--text">
              <h3>Albums</h3>
            </v-card-title>
            <v-card-action>
              <v-btn left>
                Add album
              </v-btn>
            </v-card-action>
            <v-spacer />

            <v-list-item class="black--text">
              hi
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      data: {
        name: 'Daniel Geremew',
        photo: '../assets/amirPhoto.jpeg',
        desc: 'This is my description'
      }
    }
  }
})
</script>

<style scoped></style>

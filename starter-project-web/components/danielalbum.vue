<template>
  <v-card
    class="mx-auto "
    max-width="600"
    outlined
    color="gray lighten--2"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          articles
        </div>
        <v-list-item-title class="text-h5 mb-1">
          title
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        right
      >
        Add album
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import { Vue } from 'vue-property-decorator'
@Component
export default class danielalbum extends Vue {
}
</script>

<style>

</style>

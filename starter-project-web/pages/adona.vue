<template>
  <v-container class="black--text">
    <AdonaInfo />
    <AdonaPosts />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AdonaPosts from '../components/AdonaPosts.vue'
import AdonaInfo from '../components/AdonaInfo.vue'
export default Vue.extend({
  components: {
    AdonaPosts,
    AdonaInfo
  }
})
</script>

<style scoped>
</style>

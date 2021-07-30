<template>
  <v-app>
    <v-main class="white">
      <v-container>
        <TheNavigation />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default {
  components: {
    TheNavigation
  }
}
</script>
<style scoped>
.nuxt-link-active {
  color: red;
}
</style>

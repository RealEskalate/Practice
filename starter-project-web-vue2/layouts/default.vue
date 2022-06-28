<template>
  <div>
    <NavigationBar />
    <nuxt />
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    NavigationBar,
  },
}
</script>

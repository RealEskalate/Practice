<template>
  <div class="container">
    <Content />
  </div>
</template>

<script>
import Content from '../../components/tiruzer/TiruzerContent.vue'

export default {
    name:'Tiruzer',
    components: {
        Content
    }

}
</script>
<style scoped>
  .container {
    min-height: 100vh;
  }

</style>

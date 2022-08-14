<template>
  <div class="container">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '../../components/samiya/SamiyaHeader.vue'
import Content from '../../components/samiya/SamiyaContent.vue'


export default {
  name: 'Samiya',
  components: {
    Header,
    Content,
    
  },
 
}
</script>

<style scope>
.container {
  background: #bdbdbd;
  min-height: 100vh;
}
</style>

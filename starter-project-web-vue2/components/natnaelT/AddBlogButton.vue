<template>
  <v-btn @click="onClick()">{{ text }}</v-btn>
</template>
<script>
export default {
  name: 'AddBlogButton',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('toggle-add-blog')
    },
  },
}
</script>

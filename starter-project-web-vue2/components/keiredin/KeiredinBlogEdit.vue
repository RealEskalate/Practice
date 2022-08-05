<template>
<div>
  <h1>{{ blog.title }}</h1>
</div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

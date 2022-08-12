<template>
  <div style="margin: auto; max-width: 600px !important; padding-bottom: 30px">
    <h2>{{ blogDetail.title }}</h2>
    <hr />

    <p style="margin-top: 30px">
      {{ blogDetail.content }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BlogDetail',
  computed: { ...mapState('bisrat', ['blogDetail']) },
}
</script>

<template>
  <v-container>
    <v-card-title>
      {{ blogDetail.title }}
    </v-card-title>
    <v-card-text>
      {{ blogDetail.description }}
    </v-card-text>
    <v-card-text>
      {{ blogDetail.content }}
    </v-card-text>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TiruzerBlogDetail',
  computed: {...mapState('tiruzer', ['blogDetail'])}
}
</script>

<template>
  <div>
    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-subtitle>{{ comment.user.fullName }}</v-list-item-subtitle>
        <v-list-item-title>{{ comment.text }}</v-list-item-title>
        <v-list-item-subtitle>{{
          formatTime(comment.updatedAt)
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatTime(t) {
      return moment(t).fromNow()
    },
  },
}
</script>
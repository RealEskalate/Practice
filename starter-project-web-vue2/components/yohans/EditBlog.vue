<template>
  <div>
    <v-form>
      Edit blog
      <v-text-field v-model="newTitle" label="title"></v-text-field>
      <v-text-field v-model="newContent" label="content"></v-text-field>
      <v-btn @click="changeButton"> change </v-btn>
    </v-form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      newTitle: '',
      newContent: '',
    }
  },
  computed: {
    ...mapState({
      currentBlog: (state) => state.yohans.currentBlog,
    }),
  },

  methods: {
    ...mapActions({
      ToggleEdit: 'yohans/setEdit',
      updateBlog: 'yohans/updateBlog',
    }),

    changeButton() {
      this.updateBlog({
        id: this.currentBlog.id,
        newTitle: this.newTitle,
        newContent: this.newContent,
      })
      this.ToggleEdit()
    },
  },
}
</script>

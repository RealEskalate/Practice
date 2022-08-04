<template>
<div>
  <v-dialog  v-if="loggedIn" max-width="900px">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        <v-icon left> mdi-plus </v-icon>
        Add New Blog</v-btn
      >
    </template>
    <v-card v-if="dialogVisible">
      <v-card-title>
        <h2>Add a New Blog</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="title" label="Title" />
          <v-text-field v-model="description" label="Description" />
          <v-textarea v-model="content" label="Content" />
          <v-spacer></v-spacer>
          <v-btn class="success mx-0 mt-3" @click="onSubmit">Add Blog</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-btn
    v-else
    color="red"
    dark
    @click="gotoLogin()">
    <v-icon left> mdi-plus </v-icon>
    Add New Blog</v-btn
  >
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AddBlog',
  data () {
    return {
      dialogVisible: false,
      title: '',
      description: '',
      content: '',
      newBlog: {}

    }
  },

  computed: { ...mapGetters('keiredin', ['loggedIn'] ) },
  created() {
    this.checkIfLoggedIn(this.$auth.loggedIn)
  },
  methods: {
    ...mapActions('keiredin', ['checkIfLoggedIn', 'addBlog']),
    gotoLogin (redirect) {
      this.$router.push('/abraham/login')
    },
    onSubmit (e) {
      e.preventDefault()
      this.newBlog = {
        title: this.title,
        description: this.description,
        content: this.content
      }
      this.addBlog(this.newBlog)
      this.title =  ''
      this.description = ''
      this.content =  ''
      this.dialogVisible = false


    }

  },
}
</script>

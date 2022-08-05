<template>
  <div>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/keiredin'">
      <v-btn dark class="white black--text pa-2 mb-2  mt-3">
        <v-icon class="mr-2">
          mdi-arrow-left-bold-circle-outline
        </v-icon>
      </v-btn>
    </nuxt-link>
    <h1>Edit Blog</h1>
    <KeiredinBlogEdit :blog="blog" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import KeiredinBlogEdit from '../../../components/keiredin/KeiredinBlogEdit.vue'

export default {
  name: "EditPage",
  components: {KeiredinBlogEdit},
  computed: {
    ...mapGetters('keiredin', ['blog']),
  },
  methods: {
    ...mapActions('keiredin', ['updateBlog']),

  },
}
</script>




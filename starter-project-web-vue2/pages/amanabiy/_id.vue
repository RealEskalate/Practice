<template>
  <v-app>
    <nuxt-link style="text-decoration: none; color: inherit"  :to="'/amanabiy/'">
      <v-btn fab outlined x-small color="green" class="pa-2 mb-2 mx-7 mt-3"
        ><v-icon> mdi-chevron-left </v-icon></v-btn
      ></nuxt-link
    >

    <v-card class="mx-6 my-6">
      <v-card-title>
        <span class="text-h6 font-weight-bold"
          >{{ curr_blog.title }}</span
        >
      </v-card-title>

      <v-card-text class="subtitle-2">
        {{ curr_blog.desc }}
      </v-card-text>

      <v-list-item class="font-weight-light">
          <v-list-item-title class="-2 font-weight-light">By {{ curr_blog.author }}</v-list-item-title>
      </v-list-item>
    </v-card>
  </v-app>
</template>


<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'BlogCurr',

    data: () => {
      return {
        curr_blog: {
            id: "1",
            title: "Why you should Wake up",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam.",
            author: "Amanuel Sisay",
        },
      }
    },
    computed: { ...mapState('amanabiy', ['blogs'])},
    created () {
        this.getBlogs()
        this.curr_blog = this.blogs.filter((blog) => blog.id === this.$route.params.id)[0]
    },
    methods: { ...mapActions('amanabiy', ['getBlogs'])},
    
  }
</script>


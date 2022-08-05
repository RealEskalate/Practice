<template>
  <div>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/keiredin/'">
      <v-btn dark class="success pa-2 mb-2 mx-7 mt-3">
        <v-icon class="mr-2">
          mdi-arrow-left-bold-circle
        </v-icon>
        <span>Back To Blogs</span>
      </v-btn>
    </nuxt-link>
    <h2>Title: </h2>
    <hr />
    <h4>Content: </h4>
    <hr />
  </div>
</template>

<script>
export default {

}
</script>


<template>
  <v-container class="black--text">
      <v-row>
          <Search />
          <Header />
          <AddPost />
          <Blogs />

      </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import Header from '@/components/MetiHeader.vue';
import Blogs from '@/components/MetiBlogs.vue';
import AddPost from '@/components/MetiAddPost.vue';
import Search from '@/components/MetiSearch.vue';

import Vuetify from "vuetify";
Vue.use(Vuetify);
export default {
    name:'meti',
    components : {
        Header, 
        Blogs,
        AddPost, 
        Search
    }
}

</script>

<style scoped></style>

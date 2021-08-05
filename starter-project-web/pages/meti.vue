<template>
  <v-container class="black--text">
      <v-row>
          <Search />
          <Header />
          <AddPost />
          <blogs />
      </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '../components/MetiHeader';
import blogs from '../components/MetiBlogs';
import AddPost from '../components/MetiAddPost';
import Search from '../components/MetiSearch';

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
export default {
    name:'meti',
    components : {
        Header, 
        blogs,
        AddPost, 
        Search
    }
}

</script>

<style scoped></style>

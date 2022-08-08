<template>
  <v-app>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/luhana/'">
      <v-btn color="#00FFFF" class="pa-2 mb-2 mx-7 mt-3"
        ><v-icon> mdi-chevron-left </v-icon>All Blogs</v-btn
      ></nuxt-link
    >

    <v-card class="mx-6 my-6">
      <v-card-title>
        <span class="text-h6 font-weight-light">{{ title }} </span>
      </v-card-title>

      <v-card-text class="text-h6">
        {{ desc }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-title>By {{ author }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Classic Books',
      desc: 'Altough most classic novels are a bit harder to read, they carry the authenticity with a time-stamp that takes you to a time you;ve never been.',
      author: 'Luhana',
    }
  },
}
</script>

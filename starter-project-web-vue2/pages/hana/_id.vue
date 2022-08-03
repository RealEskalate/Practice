<template>
  <v-app>
    <nuxt-link style="text-decoration: none; color: inherit" :to="'/hana/'">
      <v-btn fab outlined x-small color="green" class="pa-2 mb-2 mx-7 mt-3"
        ><v-icon> mdi-chevron-left </v-icon></v-btn
      ></nuxt-link
    >

    <v-card class="mx-6 my-6">
      <v-card-title>
        <span class="text-h6 font-weight-light"
          >{{ title }} <small>{{ id }}</small></span
        >
      </v-card-title>

      <v-card-text class="text-h6">
        {{ content }}
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
      id: 1,
      title: 'Blog',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Hana Workneh',
    }
  },
}
</script>

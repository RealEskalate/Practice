<template>
  <v-app>
    <v-card class="mx-6 my-6">
      <v-card-title>
        <span class="text-h6 font-weight-bold"
          >{{ blog.title }}
          </span
        >
      </v-card-title>

      <v-card-text class="text-h6">
        {{ blog.content }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-title>By : {{ blog.authorUserId.fullName }}</v-list-item-title>
            <v-list-item-title>email:  {{ blog.authorUserId.email }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default: () => ({ empty: true }),
    },
  }

}
</script>


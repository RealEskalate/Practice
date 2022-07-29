<template>
  <div>
    <nuxt-link
      style="text-decoration: none; color: inherit"
      :to="'/ruth/' + blog._id"
    >
      <v-card class="my-4 mx-12" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <small class="text-overline mb-4"></small>
            <v-list-item-title class="text-h5 mb-3"
              >{{ blog.title }} <small>{{ blog._id }}</small>
            </v-list-item-title>
            <v-list-item-subtitle>{{ blog.details }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-card-actions>
            <v-btn class="ma-2" outlined x-small fab color="green">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="ma-2" outlined x-small fab color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle>By {{ blog.author }}</v-list-item-subtitle>
        </v-list-item>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'RuthBlog',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

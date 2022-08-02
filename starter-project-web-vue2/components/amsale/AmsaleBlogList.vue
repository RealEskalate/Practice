<template>
  <div>
    <AmsaleAddBlogVue />
    <v-card class="mx-auto elevation-20 mt-5">
      <v-row justify="space-between">
        <v-col cols="8">
          <v-card-title>
            <div>
              <div class="text-h5">Halycon Days</div>
              <p class="text-sm">
                Ellie Goulding Halycon Days he People write alot about movies
                even more than People write alot about movies even more than
              </p>

              <div>(2013)</div>
            </div>
          </v-card-title>
        </v-col>
        <v-img
          class="ma-1"
          contain
          height="150px"
          width="150px"
          src="http://res.cloudinary.com/hakimhub/image/upload/v1654086909/starter_project/pcen6idszptplrwluiym.png"
          style="flex-basis: 125px"
        ></v-img>
      </v-row>
      <v-divider dark></v-divider>
      <v-card-actions class="pa-4">
        <span class="grey--text text--lighten-1 text-caption mr-2">
          Author Author name
        </span>

        <v-spacer></v-spacer>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="'/amsale/id'"
        >
          <v-btn text> Show more </v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import AmsaleAddBlogVue from './AmsaleAddBlog.vue'
export default {
  name: 'BlogList',
  components: { AmsaleAddBlogVue },
}
</script>

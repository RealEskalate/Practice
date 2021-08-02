<template>
  <div>
    <v-card outlined class="rounded-lg pa-3 purple lighten-5 black--text">
      <v-row>
        <v-col cols="12" md="3" align-self="center">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="250"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </v-col>
        <v-col cols="12" md="9">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="grey--text text--darken-3 text-h4">
                Natnaem Mesele
              </v-list-item-title>
              <v-list-item-subtitle class="grey--text text--darken-1 subtitle">
                se.natneam.mesele@gmail.com
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <p class="grey--text text--darken-2 body px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            perspiciatis velit tenetur quas porro corrupti dolor qui. Harum
            dolorum officiis et dolores, ad nesciunt similique sit sequi
            suscipit non officia ratione dicta possimus. Cumque obcaecati neque
            ea, sapiente similique pariatur. Aspernatur consequuntur molestias
            amet dicta eaque necessitatibus sit eos delectus.
          </p>
        </v-col>
      </v-row>
    </v-card>

    <p class="black--text pt-5 text-h5">POSTS</p>

    <v-card class="my-5 purple lighten-5 pa-5">
      <v-row no-gutters>
        <v-col cols="12" class="black--text text-h6">
          Title
        </v-col>
        <v-col cols="12" class="black--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          libero? Placeat asperiores, sed repellat porro quaerat repudiandae
          labore nesciunt, sequi dolore aliquam explicabo quis laudantium quae
          hic deserunt ex provident.
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style></style>

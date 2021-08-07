<template>
  <v-card class="rounded-lg pa-3 purple lighten-5 black--text">
    <v-row no-gutters>
      <v-col cols="12" md="2" align-self="center">
        <v-img
          lazy-src="/natneam.jpg"
          max-height="250"
          max-width="150"
          src="/natneam.jpg"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
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
          I am Natneam Mesele - a third year software engineering student at
          Addis Ababa Institute of Technology. I am interested in web
          development, algorithms, cyber security, mathematics and philosophy.
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class InfoCard extends Vue {}
</script>

<style></style>

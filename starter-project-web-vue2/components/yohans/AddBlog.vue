<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">
        <v-icon left> mdi-plus </v-icon>
        add blog
      </v-btn>
    </template>
    <v-card>
      <v-card-title> add blog</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="title"></v-text-field>
          <v-textarea label="content"></v-textarea>
          <v-btn color="secondary"> add blog </v-btn>
          <v-spacer></v-spacer>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

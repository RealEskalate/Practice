<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">
        <v-icon left> mdi-plus </v-icon>
        Add Blog</v-btn
      >
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a New Blog</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="BlogTitle" label="Title"></v-text-field>
          <v-textarea v-model="content" label="Content"></v-textarea>
          <v-spacer></v-spacer>
          <v-btn flat @click="submit" class="success mx-0 mt-3">Add Blog</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script></script>

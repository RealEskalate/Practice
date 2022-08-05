<template>
  <v-container class="mx-12">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template #activator="{ on, attrs }">
          <v-btn color="green" v-bind="attrs" outlined v-on="on"
            >Add Blog</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">New Blog</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field dense label="Title*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea dense label="Content*" required></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mx-4 mt-4">
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">
              Discard
            </v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">
              Add Blog
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RuthAddBlog',
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

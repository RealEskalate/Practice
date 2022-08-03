<template>
  <div>
    <v-dialog v-model="dialog" width="700">
      <template #activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Add Blog
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <v-row>
            <v-col> Add Blog</v-col>
          </v-row>
          <v-btn icon color="pink" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="8" sm="6" md="12">
                <v-text-field label="Title" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8" md="12">
                <v-textarea solo name="input-7-4" label="Content"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

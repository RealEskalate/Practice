<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">

        <v-btn
          tile
          color="success"
          :disabled="!isAuthor"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon center pa-4>mdi-pencil</v-icon>Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Blog</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="title"
                  label="Title*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="content"
                  label="Content*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    blogger: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    title: '',
    content: '',
  }),
  mounted() {
    this.title = this.blogger.title
    this.content = this.blogger.content
  },
}
</script>

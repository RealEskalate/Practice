<template>
  <v-container>
    <v-row>
      <v-dialog v-model="dialog" class='my-20' width="800px">
        <template #activator="{ on, attrs }">
          <v-btn color="blue" v-bind="attrs" outlined v-on="on"
            >Add Blog</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Create Your Blog</span>
          </v-card-title>
          <v-form >
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Title" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea dense label="Content" required></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-btn color="blue lighten-2" outlined @click="dialog = false">
              Save Blog
            </v-btn>
            <v-btn color="red lighten-2"  outlined @click="dialog = false">
              Discard
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AmanAddBlog',
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<template>
  <v-container>
    <v-row>
      <v-dialog v-model="dialog" class="my-20" width="800px">
        <template #activator="{ on, attrs }">
          <v-btn
            v-if="isEdit"
            v-bind="attrs"
            icon
            :disabled="newBlog.authorUserId._id !== $auth.state.user._id"
            v-on="on"
            ><v-icon color="green">mdi-pencil</v-icon></v-btn
          >
          <v-btn v-else color="blue" v-bind="attrs" outlined v-on="on"
            >Add Blog</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span v-if="isEdit" class="text-h5">Edit Your Blog</span>
            <span v-else class="text-h5">Create Your Blog</span>
          </v-card-title>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newBlog.title"
                    label="Title"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="newBlog.content"
                    dense
                    label="Content"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-btn
                v-if="isEdit"
                color="blue lighten-2"
                outlined
                @click="onSubmit"
              >
                update Blog
              </v-btn>
              <v-btn v-else color="blue lighten-2" outlined @click="onSubmit">
                Save Blog
              </v-btn>
              <v-btn color="red lighten-2" outlined @click="dialog = false">
                Discard
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AmanAddBlog',
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    blogId: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      dialog: false,
      newBlog: {
        title: '',
        content: '',
        description: 'description',
      },
    }
  },

  computed: {
    ...mapGetters('amanabiy', ['getOneBlog', 'getAllBlogs']),
  },

  created() {
    if (this.blogId) Object.assign(this.newBlog, this.getOneBlog(this.blogId))
  },

  methods: {
    ...mapActions('amanabiy', ['addBlog', 'updateBlog']),

    onSubmit(e) {
      e.preventDefault()
      if (!this.isEdit) {
        this.addBlog(this.newBlog)
      } else {
        this.updateBlog(this.newBlog)
      }
      this.resetData()
    },

    resetData() {
      this.dialog = false
      this.newBlog = {
        title: '',
        content: '',
      }
    },
  },
}
</script>

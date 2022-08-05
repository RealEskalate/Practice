<template>
  <v-app>
    <v-card class="mx-6 my-6 ">
      <v-container v-if="$auth.loggedIn">
        <v-row v-if="$auth.user.email == blog.authorUserId.email" class="float-right" no-gutters >
          <v-col>
            <v-btn icon left text :to="`/keiredin/${blog._id}/edit`" >
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon @click.stop="dialog = true">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <ConfirmDelete
        :id="blog._id"
        :title="blog.title"
        :visible="dialog"
        @close="dialog = false"
      />
      <v-card-title>
        <span class="text-h4 font-weight-bold"
          >{{ blog.title }}
          </span
        >
      </v-card-title>

      <v-card-text class="text-h5">
        {{ blog.description }}
      </v-card-text>


      <v-card-text class="text-h6">
        {{ blog.content }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
            <v-list-item-title>By : {{ blog.authorUserId.fullName }}</v-list-item-title>
            <v-list-item-title>email:  {{ blog.authorUserId.email }}</v-list-item-title>
          </v-list-item-content>


        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-app>
</template>



<script>
import ConfirmDelete from './ConfirmDelete.vue'
export default {
  components: { ConfirmDelete },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}

</script>


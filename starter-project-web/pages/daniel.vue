<template>
  <v-container>
    <v-card
      justify="center"
      ms-width="400"
      color="white"
      outlined
      class="font-weight-light text-center mx-auto"
    >
      <v-card-title dark class="black--text mx-5">
        <span class="text-h2">Info</span>
      </v-card-title>
      <v-responsive>
        <v-avatar size="200" tile>
          <img src="../assets/dani.jpg">
        </v-avatar>
      </v-responsive>
      <v-divider />

      <v-list-item class="black--text">
        <v-list-item-content>
          <v-list-item-title>
            {{ data.name }}
          </v-list-item-title>
          <v-list-item-title>
            {{ data.desc }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <danielalbum />
    <v-divider />

    <v-card max-width="800" outlined class="purple lighten-4 black--text mx-auto">
      <v-list class="gray lighten-5 green--text mx-auto">
        <v-list-group
          v-for="item in album"
          :key="item.title"
          no-action
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="item.userId" />
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
            <v-list-item-action>
              <v-btn color="error" @click="deletealbum(item.id)">
                DELETE
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script >
import Vue from 'vue'
import danielalbum from '@/components/danielalbum.vue'
// this.$vuetify.theme.dark = false
export default Vue.extend({
  components: {
    danielalbum
  },
  data () {
    return {
      data: {
        name: 'Daniel Geremew',
        photo: '../assets/amirPhoto.jpeg',
        desc: 'This is my description'
      },
      album: this.$store.getters['daniel/allAlbums']

    }
  },

  created () {
    return this.$store.dispatch('daniel/fetchalbums')
  },
  methods: {
    deletealbum (id) {
      this.$store.dispatch('daniel/deletealbum', id)
    }

  }
})
</script>

<style scoped></style>

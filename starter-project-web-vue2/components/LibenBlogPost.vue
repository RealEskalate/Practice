<template>
  <v-container>
    <v-row
      v-for="blog in blogs"
      :key="blog.id"
      dense
      class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
      sm="6"
      md="3"
    >
      <v-col>
        <v-card :to="`/${blog._id}`" >
          <v-row >
            <v-col cols="2"></v-col>
            <v-col cols="6" >
              <v-row>
                <v-avatar size="30"
                  ><v-img
                    v-if="blog.imageUrls.length != 0"
                    :src="blog.imageUrls[0]"
                  ></v-img>
                  <v-img
                    v-else
                    style="color: gray"
                    src="/images/account.svg"
                  ></v-img>
                </v-avatar>
                <h6>{{ blog.authorUserId.fullName }}</h6>
                <span>{{ formatTime(blog.updatedAt) }}</span>
                <p></p>
              </v-row>
              <v-card-title class="mx-auto text-center black--text">
                <p>
                  {{ blog.title }}
                </p>
              </v-card-title>
              <v-card-text class="black--text">
                {{ blog.content }}
              </v-card-text>
            </v-col>
            <v-col cols="2">
              <v-img
                v-if="blog.imageUrls.length != 0"
                :src="blog.imageUrls[0]"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import data from '~/data/data'
export default {
  data() {
    return {
      blogs: data,
    }
  },
  methods: {
    formatTime(t) {
      return moment(t).fromNow()
    },
  },
}
</script>
<template>
  <div class="p-10">
    <EditBlog :blog="blog" />
    <v-divider></v-divider>
    <v-card class="m-10">
      <v-card-title>{{ title }}</v-card-title>
      <v-row>
        <v-col>
          <v-card-text>{{ content }}</v-card-text>
        </v-col>
        <v-col>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="250"
            max-width="550"
            :src="img"
          ></v-img>
        </v-col>
      </v-row>
      <v-divider dark></v-divider>
      <v-card-actions>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://picsum.photos/id/11/10/6" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>By : {{ fullname }}</v-list-item-title>
            <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-spacer></v-spacer>
        <v-rating
          v-model="rating"
          background-color="purple lighten-3"
          color="purple"
          small
        ></v-rating>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import EditBlog from '../../components/amsale/AmsaleEditBlog.vue'
export default {
  components: { EditBlog },
  data() {
    return {
      content: '',
      title: '',
      rating: 4,
      fullname: '',
      email: '',
      img: '',
      blog: {},
    }
  },

  async created() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    try {
      const response = await axios.get(
        `https://blog-app-backend.onrender.com/api/articles/${this.$route.params.id}`,
        config
      )
      console.log(response)
      this.blog = response.data
      this.content = response.data.content
      this.title = response.data.title
      this.fullname = response.data.authorUserId.fullName
      this.email = response.data.authorUserId.email
      this.img = response.data.imageUrls[0]
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

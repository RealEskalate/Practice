<template>
  <v-container class="font">
    <v-row
      v-for="blog in blogs"
      :key="blog.id"
      dense
      class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
      sm="6"
      md="3"
    >
      <v-col cols="12">
        <v-card color="white">
          <v-row>
            <v-col cols="10">
              <v-card-title class="mx-auto text-center black--text">
                <p>
                  {{ blog.title }}
                </p>
              </v-card-title>
              <v-card-text class="black--text">
                {{ blog.description }}
              </v-card-text>
            </v-col>
            <v-col cols="1">
              <v-btn left text class="grey--text">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn left text class="grey--text">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: '7 Trends You May Have Missed About Movie',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 2,
          title: 'How to Explain Trendy to Your Mom',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 3,
          title:
            '4 Dirty Little Secrets About the Software Egineering Industry',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 4,
          title: 'Movies Explained in Fewer than 140 Characters',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 5,
          title: 'The Next Big Thing in Movies',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 6,
          title: 'QUIZ: What Type Of Entrepreneur Are You?',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 7,
          title: 'Can You Spot These Problems With Building Wealth?',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 8,
          title: 'Inside The Ecommerce Industry',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
        {
          id: 9,
          title: 'Are You More Like Richard Branson Or David Rockefeller?',
          description:
            'Chestnut, dreadlocks slightly covers a full, frowning face. Beady amber eyes, set thightly within their sockets, watch hungrily over the tribe theyve watched over for so long.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.font {
  font-family: Helvetica, Arial, sans-serif;
}
</style>

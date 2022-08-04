<template>

  <v-list
    flat
    subheader
    three-line
    class="my-50"
  >
    <v-card class="my-20" width="90%">
      <v-subheader> Blogs </v-subheader>
      <div v-for="blog in blogs" :key="blog.id"> 
        <v-list-item  :class="{'grey lighten-4': blog.id % 2 && !blog.done}">
            <v-list-item-action>
            </v-list-item-action>

            <v-list-item-content>
                <nuxt-link
                  style="text-decoration: none; color: inherit"
                  :to="'/amanabiy/' + blog.id"
                >
                    <v-list-item-title>{{ blog.title }}</v-list-item-title>
                    <v-list-item-subtitle> <span class="font-weight-bold"> By {{blog.author}}: </span> {{ blog.desc }}</v-list-item-subtitle>
                </nuxt-link>
            </v-list-item-content>

            <v-list-item-action :key="blog.id">
              <v-btn icon>
                <v-icon color="green">mdi-pencil</v-icon>
              </v-btn>
            </v-list-item-action>

            <v-list-item-action :key="blog.id">
              <v-btn icon>
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          
          </v-list-item>
          <v-divider ></v-divider>
      </div>
    </v-card>
  </v-list>
</template>

<script>
  export default {
    name: 'BlogsList',

    data: () => {
      return {
    
        blogs: [
          {
            id: 1,
            title: "Why you should Wake up",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam.",
            author: "Amanuel Sisay",
          },
          {
            id: 2,
            title: "Why you should Gym",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam.",

            author: "Abel",
          },
          {
            id: 3,
            title: "The benifit of Working hard",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam.",
            author: "Abebe",

          },
          {
            id: 4,
            title: "Interviews Trick",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam.",
            author: "Kebede",

          },
        ]
      }
    },
  }
</script>

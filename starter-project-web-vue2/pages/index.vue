<template>
  <v-container class="font">
    <v-row
      v-for="member in members"
      :key="member.name"
      no-gutters
      dense
      class="pa-5 py-0 mx-auto grey lighten-5 mb-6 "
      sm="6"
      md="3"
    >
      <v-col cols="12">
        <v-card :to="member.link" color="#FFFFFF" nuxt>
          <v-card-title class="mx-auto text-center black--text">
            <p>
              {{ member.name }}
            </p>
          </v-card-title>

          <v-card-subtitle class="black--text">
            {{ member.description }}
          </v-card-subtitle>
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
      members: [
        {
          name: "Abraham Tadesse",
          description: 'Summer Intern',
          link:
            '/abraham',
        },
        {
          name: "Liben",
          description:"Web Team Member",
          link:"/liben"
        }
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

</script>

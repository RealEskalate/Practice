<template>
  <v-container class="font">
    <v-row
      v-for="member in members"
      :key="member.name"
      no-gutters
      dense
      class="pa-5 py-0 mx-auto mb-6"
      sm="6"
      md="3"
    >
      <v-col cols="12">
        <v-card :to="member.link" class="shadow" nuxt>
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
          name: 'Abraham Tadesse',
          description: 'Summer Intern',
          link: '/abraham',
        },
        {
          name: 'Aymen Mohammednur',
          description: 'Group 31 Member',
          link: '/aymen',
        },
        {
          name: "Samiya Hamid",
          description: 'A2SV group 31',
          link: '/samiya',
        },
        {
          name: 'yohans',
          description: 'Summer Intern',
          link: '/yohans',
        },
        {
          name: 'Amsale Gebrehana',
          description: 'A2SV G31',
          link: '/amsale',
        },
        {
          name: 'Ruth Getachew',
          description: 'Web Team Member',
          link: '/ruth',
        },
        {
          name: 'Keiredin Aman',
          description: 'Summer Intern',
          link: '/keiredin',
        },
        {
          name: 'Andualem Sebsbe',
          description: 'Summer Intern',
          link: '/andualem',
        },
        {
          name: 'Liben',
          description: 'Web Team Member',
          link: '/liben/articles',
        },
        {
          name: 'Yared Tegegn',
          description: 'Group 32 Student',
          link: '/yared',
        },
        {
          name: 'Bisrat Walle',
          description: 'Software Engineer',
          link: '/bisrat',
        }
      ],
    }
  },
}
</script>

<style>
.shadow {
  box-shadow: 0 10px 26px rgb(0 0 0 / 10%) !important;
}
</style>

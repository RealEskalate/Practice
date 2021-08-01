<template>
  <v-container>
    <v-row
      v-for="member in members"
      :key="member.name"
      no-gutters
      dense
      class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
      sm="6"
      md="3"
    >
      <v-col cols="12">
        <v-card :to="member.link" color="#FFFFFF" dark nuxt>
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

<script lang='ts'>
// Add decorator to help the development
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {}
})
export default class IndexPage extends Vue {
  public members: Array<object> = [
    { name: 'Lensa Billion', description: 'Full-Time', link: '/lensa' },
    { name: 'Natneam Mesele', description: 'Full-Time', link: '/natneam' },
    { name: 'Adona Tesfaye', description: 'Part-Time', link: '/adona' },
    { name: 'Amir Mustefa', description: 'Part-Time', link: '/amir' },
    { name: 'Beimnet Zewdu', description: 'Part-Time', link: '/beimnet' },
    { name: 'Bereket Heramo', description: 'Part-Time', link: '/bereket' },
    { name: 'Beshir Dekebo', description: 'Part-Time', link: '/beshir' },
    { name: 'Daniel Geremew', description: 'Part-Time', link: '/daniel' },
    { name: 'Lydia Gashawtena', description: 'Part-Time', link: '/lydia' },
    { name: 'Meti Adane', description: 'Part-Time', link: '/meti' },
    { name: 'Rebbeca Samuel', description: 'Part-Time', link: '/rebecca' },
    { name: 'Sinkumen Assefa', description: 'Part-Time', link: '/sinkumen' }

  ];
}
</script>

<style scoped></style>

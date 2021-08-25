<template>
  <v-card color="white" elevation="1">
    <v-container>
      <v-row no-gutters>
        <v-col cols="3">
          <v-list-item-title>
            <img src="../assets/adona.jpg">
          </v-list-item-title>
        </v-col>

        <v-col cols="9" class="">
          <v-list-item class="black--text">
            <v-list-item-content>
              <!-- <v-list-item-title> Adona Tesfaye </v-list-item-title> -->
              <h2 class="name" color="purple">
                Adona Tesfaye
              </h2>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                quo rerum eos maiores hic fugit laudantium rem animi iure minus
                sunt est fugiat adipisci molestiae harum exercitationem
                asperiores soluta Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Consectetur, rem quisquam mollitia veritatis,
                eum quas, modi est impedit eos labore earum laborum similique!
                Aperiam similique, unde officia voluptatibus dolor magni.
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AdonaInfo'
})
</script>
<style scoped>
.description {
  display: flex;
  align-items: center;
}
img {
  width: 250;
  height: 250px;
  object-fit: cover;
  border-radius: 4px 0 0 4px;
}
.name {
  margin: 1rem 0;
}
</style>

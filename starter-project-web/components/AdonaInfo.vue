<template>
  <v-card color="white">
    <v-card-title class="black--text">
      <h2>Adona Tesfaye</h2>
    </v-card-title>
    <v-container>
      <v-row no-gutters>
        <v-col cols="3">
          <v-list-item-title>
            <v-img
              class="circle"
              lazy-src="https://picsum.photos/id/11/10/6"
              src="https://picsum.photos/id/11/500/300"
            />
          </v-list-item-title>
        </v-col>

        <v-col cols="9" class="">
          <v-list-item class="black--text">
            <v-list-item-content>
              <!-- <v-list-item-title> Adona Tesfaye </v-list-item-title> -->

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio sint dicta corporis quasi inventore odio, deserunt
                vitae magnam, accusantium atque rerum adipisci id iusto
                praesentium blanditiis eius beatae facilis repudiandae. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Culpa odio
                blanditiis modi soluta quis architecto, amet est libero alias
                dolorum rem, sapiente porro possimus consequatur quidem, ullam
                eaque officiis! Quae!. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Itaque magni ea explicabo iusto dolores, fugit
                aliquam! Praesentium ab accusamus numquam maxime similique rerum
                excepturi! Aliquam sapiente dolor quis quibusdam. Non.
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
</style>

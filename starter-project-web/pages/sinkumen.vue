<template>
  <v-container class="black--text">
    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <h2>Info</h2>
          </v-card-title>
          <v-list-item class="black--text">
            <v-list-item-content>
              <v-list-item-title>
               <b>Sinkumen Aseffa</b>
              </v-list-item-title>
              <v-list-item-title>
                <img style="border-radius:7px" width="100px" src="../assets/sinkumen.jpg">
              </v-list-item-title>
              <v-list-item-title style="padding:10px">
                <span style="white-space: pre-line">
                     My name is <b>Sinkumen Aseffa</b>, a 5th year software engineer student at Addis ababa university, self thought graphics designer and tech enthusiast with 5 years experience in graphics design currently working on front end web development and android application development and Learning backend to add it to my skill set to meet my passion of solving problems existing in my community. and currently i'm seeking for full time jobs in top-tech companies.
          
                </span>  
                    
               </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="white">
          <v-card-title class="black--text">
            <h3>Sinkumen's Posts</h3>
          </v-card-title>
          <v-card-action>
            <v-btn left>
              Add Post
            </v-btn>
          </v-card-action>
          <v-spacer />

          <v-list-item class="black--text">
            <v-list-item-content>
              <v-list-item-title>
                Post 1
              </v-list-item-title>
              <v-list-item-title>
                Post 2
              </v-list-item-title>
              <v-list-item-title>
                Post 3
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <v-container>
    <v-container >
      <AddBlog />
  </v-container>
  <v-row
    class="pa-5 py-0 mx-auto grey lighten-5 mb-6"
    sm="6"
    md="3"
  >
    <v-col cols="12">
        <v-card
          class="mx-0"
          color="#26c6da"
          dark
          max-width="500"
        >
          <v-card-title>
            <nuxt-link
                style="text-decoration: none; color: inherit"
                :to="'/keiredin/id'"
              >

              <v-icon
                large
                left
              >
                mdi-twitter
              </v-icon>
              <span class="text-h6 font-weight-bold">Title</span>
            </nuxt-link>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-light">
            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <v-btn depressed color="#26c6da">
                  <v-icon >
                    mdi-pencil
                  </v-icon>
                  <span class="subheading ">edit</span>
                </v-btn>

                <v-btn depressed color="#26c6da">
                  <v-icon class="mr-1">
                    mdi-delete
                  </v-icon>
                  <span class="subheading">delete</span>
                </v-btn>

              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import AddBlog from '../keiredin/KeiredinNewBlog.vue'
export default {
  name: 'BlogPost',
  components: {
    AddBlog
  }

}
</script>

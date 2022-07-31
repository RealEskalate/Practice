<template>
  <v-dialog max-width="800">
                <template #activator="{ on }">
                    <v-btn max-width="100" color = "primary" dark v-on="on" >  
                        ADD BLOG
                    </v-btn>
                    <br>
                </template>
                <v-card>
                    <v-card-title>
                        <h3>CREATE NEW BLOG</h3>
                    </v-card-title>
                    <v-form class = "px-3">
                        <v-text-field v-model = 'title'  label="Title" />
                        <v-textarea v-model = 'message' label="Content" />
                        <v-spacer></v-spacer>
                        <v-btn class="success mx-0 mt-3" @click="onSubmit">post</v-btn>
                    </v-form>
                    <v-card-text>

                    </v-card-text>
                </v-card>
    </v-dialog>
</template>

<script>
 
export default {
    name: 'AddPost',
 
    methods:{
        onsubmit(){


        }
    }

}
</script>


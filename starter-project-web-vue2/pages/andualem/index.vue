<template>
    <v-app>
    <v-dialog max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on">
                Add Blog
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                Add a New Blog
            </v-card-title>
            <v-card-text>
                 <v-text-field
                v-model="blogTitle"
                :value="text-title"
                label="title"
                outlined
                >
                </v-text-field>
                
                <v-textarea
                v-model="blogContent"
                label="content"
                >
                
                </v-textarea>
                <v-btn @click="onSubmit" >Add Blog</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
        
   <!-- <v-card> -->
    <div v-for="(item, index) in blogs" :key="index">
        <v-col cols="12">
            <v-card color="white">
                <v-row>
                    <v-col cols="10">
                        <v-card-title>
                            <h1>{{item.title}}</h1>
                        </v-card-title>
                        <v-card-text>
                            <p>{{item.content}}</p>
                        </v-card-text>
                    </v-col>
                    <v-btn cols="1" left text class="grey--text">
                       <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn cols="1" left text class="grey--text">
                       <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-row>
            </v-card>
        </v-col>
    </div>
  <!-- </v-card> -->
 </v-app>
</template>
<script>
export default{
    data(){
        return {
            blog:{title:"this is a titile", content:"this is a contet"},
            blogs:[
                {title:"this is a titile", content:"this is a contet"},
                {title:"this is a titile", content:"this is a contet"},
                {title:"this is a titile", content:"this is a contet"},
                {title:"this is a titile", content:"this is a contet"},
            ]
        }
    }
}
</script>
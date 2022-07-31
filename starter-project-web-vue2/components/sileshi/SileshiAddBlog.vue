<template>
        <v-app>
    
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
                        <v-text-field v-model = 'BlogTitle'  label="Title" />
                        <v-textarea v-model = 'BlogMessage' label="Content" />
                        <v-spacer></v-spacer>
                        <v-btn class="success mx-0 mt-3" @click="onSubmit">post</v-btn>
                    </v-form>
                    <v-card-text>

                    </v-card-text>
                </v-card>
            </v-dialog>
        <div 
    v-for='(blog) in blogs' 
    :key='blog.id' 
  >
  <v-card><h3>{{blog.title}}</h3>
  <br>
  <h4>{{blog.content}}</h4>
   <v-btn style = "background-color:green;color:white;" text @click="edit">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>

  <v-btn style = "background-color:red;color:beige"  left  text @click="delet">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
  </v-card>
  <br>
  </div>

        </v-app>
</template>
<script>
export default{
    name:'AddBlog',
    data(){
        return {
            blogs: [
      {
        id: 0,
        title: "Flutter Crash COurse",
        content: "Flutter is a moblie app frame work that.... "
      },
      {
        id: 1,
        title: "Vue Crash COurse",
        content: "vue is a fronted frame work that... "
      },
      {
        id: 2,
        title: "Node Crash COurse",
        content: "I have no idea what node is... "
      }

    ]
        }
    },
    methods:{
        onSubmit(){
            this.blogs.push({id:this.blogs.length,title:this.BlogTitle,content:this.BlogMessage})
            this.BlogTitle = ''
            this.BlogMessage = ''
        },
        edit(){
          
        },
        delet(){
            
        }
    }
}
</script>
<style>

h3{
    padding: 20px; /* apply to all four sides */
}

h4{
    padding:20px;
}




</style>

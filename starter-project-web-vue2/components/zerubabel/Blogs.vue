<template>
    <v-container>
        <v-container>
            <AddBlog/>
        </v-container>
        <v-container class="
        blog-list d-flex flex-column">
            <v-card v-for="blog in blogs" :key="blog._id" class="blog m-4 ma-5 elevation-9 shaped d-flex flex-column">
                <v-card-title class="card-title">
                    <nuxt-link :to="'/zerubabel/' + blog._id">{{blog.title}}</nuxt-link>
                </v-card-title>
                <v-card-subtitle class="card-subtitle mt-2">Author: {{blog.author}}</v-card-subtitle>
                <v-card-text class="card-text">{{blog.description}}</v-card-text>
                <v-card-actions class="card-actions align-self-end">
                    <EditBlog :blog = "blog"/>
                    <v-btn class="icon-btn">
                        <v-icon title="delete" class="ma-2 icon" color="red" dark @click="()=>del(blog._id)">mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddBlog from './AddBlog.vue';
import EditBlog from './EditBlog.vue';

export default {
    name: "BlogPost",
    components: { AddBlog, EditBlog },

    computed: {...mapState('zerubabel', ['blogs'])},
    methods: {
        ...mapActions('zerubabel', ['deleteBlog']),
        del(id){
            this.deleteBlog(id)
        }
        },
    
}
</script>

<style scoped>
.input{
    max-width: 80%;
}

.input-container{
    width: 100%;
}

.icon-btn{
    margin-left: 5px;
}
</style>
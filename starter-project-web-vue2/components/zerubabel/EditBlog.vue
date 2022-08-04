<template>
    <v-dialog v-model="dialog" width="550" class="d-flex flex-column align-center">
            <v-card>
                <v-card-text class="pa-10">
                    <h1>Edit Blog</h1>
                </v-card-text>
                <v-container class="input-container pa-5">
                    <v-text-field v-model="title" class="input" label="Title" clearable :placeholder="blog.title"></v-text-field>
                    <v-text-field v-model="author" class="input" label="Author" clearable :placeholder="blog.author"></v-text-field>
                    <v-textarea v-model="description" class="input" label="Description" :placeholder="blog.description"></v-textarea>
                    <v-btn class="ma-2"  color="primary" dark @click="update"><span @click="dialog = false">Edit</span></v-btn>
                </v-container>
            </v-card>
            <template #activator="{ on }">
                <v-btn v-on="on">
                    <v-icon title="edit" class="ma-2 icon" color="primary" dark>mdi-pencil</v-icon>
                </v-btn>
            </template>
        </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'EditBlog',
    props: ['blog'],
    data(){
        return {
            title: '',
            author: '',
            description: '',
            dialog: false,
        }
    },
    methods: {
        ...mapActions('zerubabel', ['editBlog']),
        update(){
            const blog = {
                ...this.blog,
                title: this.title,
                author: this.author,
                description: this.description
            }
            this.editBlog(blog)
        },
    }
}
</script>
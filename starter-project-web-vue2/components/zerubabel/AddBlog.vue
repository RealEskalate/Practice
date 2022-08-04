<template>
    <v-dialog v-model="dialog" width="550" class="d-flex flex-column align-center">
            <v-card>
                <v-card-text class="pa-10">
                    <h1>Add Blog</h1>
                </v-card-text>
                <v-container class="input-container pa-5">
                    <v-text-field v-model="title" class="input" label="Title" clearable></v-text-field>
                    <v-text-field v-model="author" class="input" label="Author" clearable></v-text-field>
                    <v-textarea v-model="description" class="input" label="Description"></v-textarea>
                    <v-btn class="ma-2" color="primary" dark @click="add"><span @click="dialog = false">Add</span></v-btn>
                </v-container>
            </v-card>
            <template #activator="{ on }">
                <v-btn class="ma-2" color="primary" dark v-on="on">
                    <v-icon dark left >
                    mdi-plus
                    </v-icon>Add Blog
                </v-btn>
            </template>
        </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddBlog',
    data(){
        return {
            id: Math.floor(Math.random() * 1000),
            title: '',
            author: '',
            description: '',
            dialog: false,
        }
    },
    methods: {
        ...mapActions('zerubabel', ['addBlog'])
        ,
        add(){
            this.addBlog({
                _id: this.id, 
                title: this.title, 
                description: this.description, 
                author: this.author
                })
        }
    }
}
</script>
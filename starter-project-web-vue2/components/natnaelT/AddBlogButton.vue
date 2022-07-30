<template>
    <button class="btn" :style="{ background: 'color' }" @click="onClick()">{{text}}</button>
</template>
<script>
export default {
    name:'AddBlogButton',
    props:{
        text: String,
        color: String
    },
    methods:{
        onClick(){
             this.$emit("toggle-add-blog")
        }
    }
}
</script>
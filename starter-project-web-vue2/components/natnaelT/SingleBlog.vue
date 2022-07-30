<template>
  <div>
    <h3>{{blog.title}}</h3>
    <p>{{blog.content}}</p>
    <button class="btn">Update</button>
    <button @click="$emit('delete-blog',blog.id)" class="btn">Delete</button>
  </div>
</template>

<script>
export default {
    name: "SingleBlog",
    props: {
        blog: Object
    },
    emits: ["delete-blog"]
}
</script>
<style>

.btn {
    display: flex;
    padding: 2px; 
    margin: 1px;
    border-radius: 0.5px;
}

</style>
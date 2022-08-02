<template>
  <div class="singleblog">
    <h2>{{blog.title}}</h2>
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

.singleblog{
  background: 	#D3D3D3;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
}

</style>
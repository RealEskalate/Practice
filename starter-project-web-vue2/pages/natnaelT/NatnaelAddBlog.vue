<template>
  <div>
    <h1>Add your blog below:</h1>
    <form>
        <input type="text" name="title" placeholder="Write your title here...">
        <input type="text" name="content" placeholder="Write your blog content here...">
        <input class="submit" type="submit" name="Save Blog">
    </form>
  </div>
</template>

<script>
export default {
    name: 'NatnaelAddBlog'
}
</script>

<style>
h1{
    display: flex;
    color: blue;
}

input{
    font-style: italic;
    display: block;
}

.submit{
    background-color:blue;
    display: flex;
    justify-content:flex-end;
}
</style>
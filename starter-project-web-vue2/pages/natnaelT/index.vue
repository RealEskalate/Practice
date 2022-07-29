<template>
  <div class="addblog">
    <h1>Test Blog Page</h1>
    <p>This is where the content of the blog would go! List of all the blogs.</p>
    <nuxt-link to='/natnaelT/NatnaelAddBlog'>Add a new Blog</nuxt-link>
  </div>
</template>

<script>
import NatnaelAddBlog from '~/components/natnaelT/NatnaelAddBlog'
export default {
    head() {
        return {
            title: "Blog App",
            meta: [{
                    hid: "description",
                    name: "Blog page",
                    content: "Blog to save thoughts"
                }]
        };
    },
    comments: {
        NatnaelAddBlog
    }
}
</script>

<style>

.addblog p{
    font-style: italic;
}

.addblog nuxt-link{
    display: inline-block;
    background: blue;
    color: aliceblue;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
}

</style>
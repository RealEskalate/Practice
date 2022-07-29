<template>
  <div>
    <h1>Test Blog Page</h1>
    <p>This is where the content of the blog would go! List of all the blogs.</p>
  </div>
</template>

<script>
export default {
    head(){// used to increase the page's detail for the SEO
        return {
            title: "Blog App",
            meta: [{
                hid:"description",
                name:"Blog page",
                content:"Blog to save thoughts"
            }]
        }
    }
}
</script>

<style>
p{
    font-style: italic;
}
</style>
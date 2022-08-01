export default {
    namesoaced: true,
    state : {
        blogs: []
   },
    actions: {
        async fetchBlogs( {commit} ){
            const res = await this.$axios.get('https://blog-app-backend.onrender.com/api/articles/all')
            const data = res.data.slice(0,3)
            commit('setBlog', data);
            
        },
        async addBlog({commit},newBlog){
            const res = await this.$axios.post('https://blog-app-backend.onrender.com/api/articles',newBlog)
            commit('addBlog', res.data)
        },
        async deleteBlog({commit}, id){
            if(confirm('Are you sure?')){
            await this.$axios.delete(`https://blog-app-backend.onrender.com/api/articles/${id}`)
            }
            commit('deleteBlog', id)
        },
        async updateBlog({commit}, id, updBlog){
            const res = await this.$axios.put(`https://blog-app-backend.onrender.com/api/articles/${id}`,updBlog)
            commit('updateBlog', res.data)

        }
    },
    mutations:{
        setBlog: (state, blogs)=> (state.blogs =blogs),
        addBlog: (state, blog) => state.blogs.unshift(blog),
        deleteBlog: (state, id) => (state.blogs = state.blogs.filter((blog) => blog.id !== id)),
        updateBlog: (state, updBlog) => (console.log(updBlog))

    }
}

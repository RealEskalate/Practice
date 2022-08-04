import axios from 'axios';

const state = {
    blogs:[]
}
const actions = {
    async fetchBlogs({commit}){
      
        const response = await axios.get('https://blog-app-backend.onrender.com/api/articles/all');
        commit('setBlogs', response.data)

    },
    async deleteBlog({commit}, id){
        await axios.delete(`articles${id}`)
        commit('deletedBlog',id)
    }

}
const mutations = {
    setBlogs:(state, blogs) => (state.blogs = blogs),
    deletedBlog :(state,id)=> (state.blogs = state.blogs.filter((blog) => blog.id !== id)),
}
export default {
    state,
    actions,
    mutations
}
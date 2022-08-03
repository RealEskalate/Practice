import axios from 'axios'

const state = {
  blogs: [],
}
const getters = {
    allBlogs: (state) => state.blogs 
}
const actions = {
async fetchBlogs({ commit }){
    const response = await axios.get('https://blog-app-backend.onrender.com/api/articles/all');
    commit('setBlogs',response.data)
},
async addBlog({commit}, blog){
    const response = await axios.post('https://blog-app-backend.onrender.com/api/articles/', {blog});
    commit('newBlog',response.data);
},
async deleteBlog({commit},id){
    await axios.delete(`https://blog-app-backend.onrender.com/api/articles/${id}`);
    commit('removeBlog',id)
},
async updateBlog({commit},id){
    await axios.patch(`https://blog-app-backend.onrender.com/api/articles/${id}`)
}
};
const mutations = {
    setBlogs: (state,blogs) => (state.blogs = blogs),
    newBlog: (state,blog) => (state.blogs.unshift(blog)),
    removeBlog: (state,id) => (state.blogs = state.blogs.filter(todo => todo.id !== id))
}
export default{
    state,
    getters,
    actions,
    mutations
}
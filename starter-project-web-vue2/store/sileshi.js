import axios from 'axios'

export const state = {
    blogs: [],
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXVlbEBnbWFpbC5jb20iLCJzdWIiOiI2MmU2N2Q4ZGUwMDQ4MDdlNWUzMzQ1M2EiLCJpYXQiOjE2NTkyOTU0ODcsImV4cCI6MTY1OTI5OTA4N30.tuCmpMKu02VHIGP5uK6Cx1021DE91wNhJjM5weV8Av8"
export const actions = {
  
    async fetchBlogs({ commit }) {
        const response = await axios.get(
            'https://blog-app-backend.onrender.com/api/articles/all'
        )
        commit('setBlogs', response.data)
    },
    async addBlog({ commit }, blogPost) {
        console.log(blogPost, "store");
        const response = await axios.post(
            'https://blog-app-backend.onrender.com/api/articles',
            blogPost, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }

            }
        )
        commit('newBlog', response.data)
    },
    async deleteBlog({ commit }, id) {
        console.log(id)
        await axios.delete(
            `https://blog-app-backend.onrender.com/api/articles/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }

            }

        )
        commit('removeBlog', id)
    },
    async updateBlog({ commit }, updBlog) {
        console.log(updBlog, "updblog")
        const response = await this.$axios.patch(
            `https://blog-app-backend.onrender.com/api/articles/${updBlog._id}`,
            updBlog, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }

            }
        )
        commit('updateBlog', response.data)
    },
}

export const mutations = {
    setBlogs: (state, blogs) => (state.blogs = blogs),
    newBlog: (state, blog) => state.blogs.unshift(blog),
    removeBlog: (state, id) =>
        (state.blogs = state.blogs.filter((blog) => blog._id !== id)),
    updateBlog: (state, updBlog) => {
        const index = state.blogs.findIndex((blog) => blog._id === updBlog._id)

        if (index !== -1) {
            state.blogs.splice(index, 1, updBlog)
        }
    },
}
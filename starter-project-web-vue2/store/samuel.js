import axios from 'axios'

export const state = {
    blogs: [],
}
export const actions = {
    async fetchBlogs({ commit }) {
        const response = await axios.get(
            'https://blog-app-backend.onrender.com/api/articles/all'
        )
        commit('setBlogs', response.data)
    },
    async addBlog({ commit }, blogPost) {
        console.log(blogPost, "store");
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXVlbEBnbWFpbC5jb20iLCJzdWIiOiI2MmU2N2Q4ZGUwMDQ4MDdlNWUzMzQ1M2EiLCJpYXQiOjE2NTkyODUwNDIsImV4cCI6MTY1OTI4ODY0Mn0._KVpK16isY9xLk6bQRyVOMOLLEHwFy4jE2a7Ocsz-cU"
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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXVlbEBnbWFpbC5jb20iLCJzdWIiOiI2MmU2N2Q4ZGUwMDQ4MDdlNWUzMzQ1M2EiLCJpYXQiOjE2NTkyODUwNDIsImV4cCI6MTY1OTI4ODY0Mn0._KVpK16isY9xLk6bQRyVOMOLLEHwFy4jE2a7Ocsz-cU"
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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXVlbEBnbWFpbC5jb20iLCJzdWIiOiI2MmU2N2Q4ZGUwMDQ4MDdlNWUzMzQ1M2EiLCJpYXQiOjE2NTkyODg5NDYsImV4cCI6MTY1OTI5MjU0Nn0.kATyc9S48O_l02dSVIgb8qE3LtZMqCR6bGpq_GDj-wg"
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
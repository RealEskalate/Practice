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
        console.log(blogPost);
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXVlbEBnbWFpbC5jb20iLCJzdWIiOiI2MmU2N2Q4ZGUwMDQ4MDdlNWUzMzQ1M2EiLCJpYXQiOjE2NTkyNzI3MzIsImV4cCI6MTY1OTI3NjMzMn0.pyQFf4SELYx1z5C6nZgfBLuDSMH2-DDeGjUd69uoISw"
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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXVlbEBnbWFpbC5jb20iLCJzdWIiOiI2MmU2N2Q4ZGUwMDQ4MDdlNWUzMzQ1M2EiLCJpYXQiOjE2NTkyNzcwNjgsImV4cCI6MTY1OTI4MDY2OH0.Te1UOSIpbBKBV3J1wU1G7xuQXHGlJZKj0ZkwjhEHSqY"
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
        console.log(updBlog)
        const response = await this.$axios.put(
            `https://blog-app-backend.onrender.com/api/articles/${updBlog.id}`,
            updBlog
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
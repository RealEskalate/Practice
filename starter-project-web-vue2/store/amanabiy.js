const desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum necessitatibus officia labore illo accusamus temporibus commodi eveniet praesentium ullam exercitationem vel nulla, deleniti modi obcaecati laudantium natus soluta laborum quisquam."

export const state = {
        blogs: [
        {
            id: "1",
            title: "Why you should Wake up early",
            author: "Amanuel Sisay",
            desc,
        },
        {
            id: "2",
            title: "Why you should Gym and go to gym",
            desc,
            author: "Abel",
        },
        {
            id: "3",
            title: "The benifit of Working hard",
            desc,
            author: "Abebe",
        },
        {
            id: "4",
            title: "Interviews Trick",
            desc,
            author: "Kebede",
        },
    ],
}

export const actions = {
    getBlogs({ commit }) {
        commit('getBlogs', state.blogs)
    },

    deleteBlog({ commit }, id) {
        commit('deleteBlog', id)
    },

    addBlog({ commit }, addedBlog) {
        commit('addBlogs', addedBlog)
    },

    updateBlog({ commit }, updatedBlog) {
        commit('updateBlog', updatedBlog)
    }

}

export const getters = {
    // sorted options

    // filtered options

    // filtered + sorterd options
}

export const mutations = {
    getBlogs: (state, blogs) => (state.blogs = blogs),
    deleteBlog: (state, id) => {
        (state.blogs = state.blogs.filter((blog) => blog.id !== id))},
    editBlog: (state, newBlog) => {
        const blogToEdit = state.blogs.filter((blog) => blog.id === newBlog.id)[0]
        blogToEdit.title = newBlog.title
        blogToEdit.desc = newBlog.desc
        blogToEdit.author = newBlog.author
    },
    addBlog: (state, newBlog) => { state.blogs.unshift(newBlog)}
}
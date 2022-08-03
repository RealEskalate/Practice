import axios from 'axios'

export const state = () => ({
  // ablogs: res,
  blogs: [],

  editComponenet: false,
  currentBlog: 12,
  userLogedIn: false,
})
export const getters = {
  blogs(state) {
    return state.blogs
  },
}

export const mutations = {
  addBlog(state, { title, content }) {
    const id = state.blogs.length ? state.blogs[0].id + 1 : 0
    if (title.length && content.length)
      state.blogs.unshift({ id, title, content })
  },
  deleteBlog(state, id) {
    state.blogs = state.blogs.filter((item) => item._id !== id)
  },
  setEdit(state, blog) {
    state.editComponenet = !state.editComponenet
    state.currentBlog = blog
  },

  updateBlog(state, { id, newTitle, newContent }) {
    state.blogs = state.blogs.map((blog) => {
      if (+blog.id === +id)
        return { id: +id, title: newTitle, content: newContent }
      return blog
    })
    console.log(state.blogs)
  },
  fetchBlogs(state, blogs) {
    state.blogs = blogs
  },

  logIn(state) {
    state.userLogedIn = true
  },
}

export const actions = {
  addBlog(context, blog) {
    console.log(blog)
    context.commit('addBlog', blog)
  },

  deleteBlog(context, blogid) {
    context.commit('deleteBlog', blogid)
  },

  setEdit(context, blog) {
    context.commit('setEdit', blog)
  },
  updateBlog(context, { id, newTitle, newContent }) {
    context.commit('updateBlog', { id, newTitle, newContent })
  },

  async fetchBlogs(context) {
    const url = 'https://blog-app-backend.onrender.com/api/articles/all'
    const res = await axios.get(url)
    if (+res.status === 200) {
      context.commit('fetchBlogs', res.data)
    }
  },

  logIn(context) {
    context.commit('logIn')
  },
}

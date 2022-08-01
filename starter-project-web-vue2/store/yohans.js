export const state = () => ({
  // ablogs: res,
  blogs: [
    { id: 4, title: 'a', content: 'content of a' },
    { id: 3, title: 'b', content: 'content of b' },
    { id: 2, title: 'c', content: 'content of c' },
    { id: 1, title: 'd', content: 'content of d' },
  ],

  editComponenet: false,
  currentBlog: 12,
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
    state.blogs = state.blogs.filter((item) => item.id !== id)
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
}

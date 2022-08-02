export const state = () => ({
  articles: [],
  article: {},
  comments: [],
})

export const getters = {
  articles: (state) => state.articles,
  article: (state) => state.article,
  comments: (state) => state.comments,
}

export const actions = {
  async getArticles({ commit }) {
    const response = await this.$axios.get('articles/all')
    commit('SET_ARTICLES', response.data)
  },
  async getArticle({ commit }, id) {
    const response = await this.$axios.get(`articles/${id}`)
    commit('SET_ARTICLE', response.data)
  },
  async createArticle({ commit }, article) {
    const response = await this.$axios.post('articles', article)
    commit('SET_NEWARTICLE', response.data)
  },
  async updateArticle({ commit }, article) {
    const response = await this.$axios.patch(`articles/${article._id}`, article)
    commit('UPDATE_ARTICLE', response.data)
  },
  async deleteArticle({ commit }, id) {
    await this.$axios.delete(`articles/${id}`)
    commit('DELETE_ARTICLE', id)
  },
  async searchArticle({ commit }, term) {
    const response = await this.$axios.get(
      `articles/search/?search-term=${term}`
    )
    commit('SET_ARTICLES', response.data)
  },
  async getComments({ commit }, id) {
    const response = await this.$axios.get(`comments/${id}`)
    commit('SET_COMMENTS', response.data)
  },
  async createComment({ commit }, { id, text }) {
    const response = await this.$axios.post(`comments/${id}`, { text })
    commit('SET_COMMENT', response.data)
  },
}

export const mutations = {
  SET_ARTICLES: (state, articles) => {
    state.articles = articles
  },
  SET_ARTICLE(state, article) {
    state.article = article
  },
  SET_NEWARTICLE: (state, article) => {
    state.articles = [article, ...state.articles]
  },
  DELETE_ARTICLE: (state, id) => {
    state.articles = state.articles.filter((article) => article.id !== id)
  },
  SET_COMMENTS: (state, comments) => {
    state.comments = comments
  },
  SET_COMMENT: (state, comment) => {
    state.comments = [comment, ...state.comments]
  },
  UPDATE_ARTICLE: (state, updatedArticle) => {
    const index = state.articles.findIndex(
      (article) => article.id === updatedArticle.id
    )
    if (index !== -1) {
      state.articles.splice(index, 1, updatedArticle)
    }
  },
}

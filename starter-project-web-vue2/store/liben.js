import ArticleService from "@/services/ArticleService";
import CommentService from "@/services/CommentService";
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
    getArticles({ commit }) {
        return ArticleService.getArticles().then(response => {
            commit('SET_ARTICLES', response.data)
        })
    },
    getArticle({ commit }, id) {
        return ArticleService.getArticle(id).then(response => {
            commit('SET_ARTICLE', response.data)
        })
    },
    createArticle({ commit }, article) {
        return ArticleService.createArticle(article).then(response => {
            commit('SET_NEWARTICLE', response.data)
        })
    },
    updateArticle({ commit }, article) {
        return ArticleService.updateArticle(article).then(response => {
            commit('UPDATE_ARTICLE', response.data)
        })
    },
    deleteArticle({ commit }, id) {
        return ArticleService.deleteArticle(id).then(response => {
            commit('DELETE_ARTICLE', id)
        })
    },
    searchArticle({ commit }, term) {
        return ArticleService.searchArticle(term).then(response => {
            commit('SET_ARTICLES', response.data)
        })
    },
    getComments({ commit }, id) {
        return CommentService.getComments(id).then(response => {
            commit('SET_COMMENTS', response.data)
        })
    },
    createComment({ commit }, { id, text }) {
        return CommentService.createComment(id, text).then(response => {
            commit('SET_COMMENT', response.data)
        })
    }
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
        const index = state.articles.findIndex(article => article.id === updatedArticle.id);
        if (index !== -1) {
            state.articles.splice(index, 1, updatedArticle);
        }
    }
}

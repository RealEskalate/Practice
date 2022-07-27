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

export const mutations = {
    SET_ARTICLES: (state, articles) => {
        state.articles = articles
    },
    SET_ARTICLE(state, article) {
        state.article = article
    },
    SET_COMMENTS: (state, comments) => {
        state.comments = comments
    },
    SET_COMMENT: (state, comment) => {
        state.comments = [comment, ...state.comments]
    }
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

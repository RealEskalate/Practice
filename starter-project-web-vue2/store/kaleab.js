
export const state =  {
    articles: []
};                                                                                                                          
    

export const getters = {
    allArticles: (state) => state.articles
};

export const actions = {
    async fetchArticles({ commit }){
        const response = await this.$axios.get("articles/all")
        commit("setArticles", response.data)
    },
    async addArticles({ commit }, article){
        const response = await this.$axios.post("articles", article)
        commit("newArticles", response.data)
    },

    async deleteArticles({ commit }, id){
        await this.$axios.delete(`articles/${id}`)
        commit("removeArticles", id)
    },
    async updateArticles({ commit }, newArticle){

        const response = await this.$axios.patch(`articles/${newArticle._id}`, newArticle)
        commit("modifyArticles", response.data)
    }
};

export const mutations = {
    setArticles: (state, articles) => (state.articles = articles),
    newArticles: (state, article) => (state.articles.unshift(article)),
    removeArticles: (state, id) => (state.articles = state.articles.filter((article) => article._id !== id)),
    modifyArticles: (state, updateArticle) => {
        const index = state.articles.findIndex((article) => article._id === updateArticle._id)
        if (index !== -1){
            state.articles.splice(index, 1, updateArticle)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}



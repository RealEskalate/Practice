import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://blog-app-backend.onrender.com/api`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getArticles() {
        return apiClient.get('/articles/all')
    },
    getArticle(id) {
        return apiClient.get(`/articles/${id}`)
    },
    searchArticle(term) {
        return apiClient.get(`/articles/search/?search-term=${term}`)
    }
}

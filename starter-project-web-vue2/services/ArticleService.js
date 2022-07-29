import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://blog-app-backend.onrender.com/api`,

    withCredentials: false,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZW5AZ21haWwuY29tIiwic3ViIjoiNjI5NjE5OWE5NWI3ZGIyMmRlMzY1MDdmIiwiaWF0IjoxNjU5MDgzMDQ5LCJleHAiOjE2NTkwODY2NDl9.sFGIwMwBImOjmtVO39tD8ML5yMIyK3-eUF_mc5f2g-Y',
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
    createArticle(article) {
        return apiClient.post('articles', article)
    },
    updateArticle(article) {
        return apiClient.patch(`/articles/${article._id}`, article)
    },
    searchArticle(term) {
        return apiClient.get(`/articles/search/?search-term=${term}`)
    },
    deleteArticle(id) {
        return apiClient.delete(`/articles/${id}`)
    }
}

import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://blog-app-backend.onrender.com/api`,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZW5AZ21haWwuY29tIiwic3ViIjoiNjI5NjE5OWE5NWI3ZGIyMmRlMzY1MDdmIiwiaWF0IjoxNjU4ODQwMzk0LCJleHAiOjE2NTg4NDM5OTR9.a3O3utZLmzIxkZl4zQj3yuive6Ygc5wyxyJSv2fMjkg',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getComments(blogId) {
        return apiClient.get(`/comments/${blogId}`)
    },
    createComment(blogId, comment) {
        return apiClient.post(`/comments/${blogId}`, {
            "text": comment
        })
    }
}


import { mutations, getters } from '@/store/liben'

describe('Test mutations', () => {
    it('Adds an article to the state', () => {
        const article = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const state = {
            article: {}
        }
        mutations.SET_ARTICLE(state, article)
        expect(state).toEqual({
            article: article
        })
    })

    it('Adds articles to the state', () => {
        const articles = [{ '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }]
        const state = {
            articles: []
        }
        mutations.SET_ARTICLES(state, articles)
        expect(state).toEqual({
            articles
        })
    })

    it('Deletes an articles from the state', () => {
        const state = {
            articles: [{ 'id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }]
        }
        mutations.DELETE_ARTICLE(state, '62975ca7f785b0b029efa2f5')
        expect(state).toEqual({
            articles: []
        })
    })

    it('Adds a new article to the state', () => {
        const article = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const state = {
            articles: []
        }
        mutations.SET_NEWARTICLE(state, article)
        expect(state).toEqual({
            articles: [article]
        })
    })

    it('Adds a comment to the state', () => {
        const comment = { 'user': '62df9ac5dbfc9f3f9e3e57d8', 'articleId': '62975ca7f785b0b029efa2f5', 'text': 'comment', '_id': '62eb805bc375246a818da592', 'created_at': '2022-08-04T08:16:27.722Z', 'updated_at': '2022-08-04T08:16:27.722Z', '__v': 0 }
        const state = {
            comments: []
        }
        mutations.SET_COMMENT(state, comment)
        expect(state).toEqual({
            comments: [comment]
        })
    })

    it('Adds an comments to the state', () => {
        const comments = [{ 'user': '62df9ac5dbfc9f3f9e3e57d8', 'articleId': '62975ca7f785b0b029efa2f5', 'text': 'comment', '_id': '62eb805bc375246a818da592', 'created_at': '2022-08-04T08:16:27.722Z', 'updated_at': '2022-08-04T08:16:27.722Z', '__v': 0 }]
        const state = {
            comments: []
        }
        mutations.SET_COMMENTS(state, comments)
        expect(state).toEqual({
            comments
        })
    })

    it('Updates an article from the state', () => {
        const updatedArticle = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Update Worst movies ever made', 'content': 'Update People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const state = {
            articles: [{ '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }]
        }
        mutations.UPDATE_ARTICLE(state, updatedArticle)
        expect(state).toEqual({
            articles: [updatedArticle]
        })
    })
})

describe('Test getters', () => {
    it('Gets articles from the state', () => {
        const articles = [{ '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }]
        const state = {
            articles
        }
        const getArticles = getters.articles(state)
        expect(getArticles).toEqual(articles)
    })

    it('Gets comments from the state', () => {
        const comments = [{ 'user': '62df9ac5dbfc9f3f9e3e57d8', 'articleId': '62975ca7f785b0b029efa2f5', 'text': 'comment', '_id': '62eb805bc375246a818da592', 'created_at': '2022-08-04T08:16:27.722Z', 'updated_at': '2022-08-04T08:16:27.722Z', '__v': 0 }]
        const state = {
            comments
        }
        const getComments = getters.comments(state)
        expect(getComments).toEqual(comments)
    })

    it('Gets article from the state', () => {
        const article = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const state = {
            article
        }
        const getArticle = getters.article(state)
        expect(getArticle).toEqual(article)
    })

})
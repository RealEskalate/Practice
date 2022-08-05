import { mutations, getters, actions } from '@/store/liben'

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


describe('Test actions', () => {
    it('Get articles', async () => {
        const articles = [{ '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }]
        const mockResult = {
            data: articles

        }
        const commit = jest.fn();
        const mockAxios = {
            get: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.getArticles({ commit })
        expect(mockAxios["get"]).toHaveBeenCalledWith(
            "articles/all"
        );
        expect(commit).toHaveBeenCalledWith("SET_ARTICLES", articles);
    })

    it('Get article', async () => {
        const article = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const mockResult = {
            data: article

        }
        const commit = jest.fn();
        const mockAxios = {
            get: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.getArticle({ commit }, "62975ca7f785b0b029efa2f5")
        expect(mockAxios["get"]).toHaveBeenCalledWith(
            "articles/62975ca7f785b0b029efa2f5",
        );
        expect(commit).toHaveBeenCalledWith("SET_ARTICLE", article);
    })

    it('Creates an article', async () => {
        const article = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const mockResult = {
            data: article

        }
        const commit = jest.fn();
        const mockAxios = {
            post: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.createArticle({ commit }, article)
        expect(mockAxios["post"]).toHaveBeenCalledWith(
            "articles",
            article
        );
        expect(commit).toHaveBeenCalledWith("SET_NEWARTICLE", article);
    })

    it('Update an article', async () => {
        const updatedArticle = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const mockResult = {
            data: updatedArticle

        }
        const commit = jest.fn();
        const mockAxios = {
            patch: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.updateArticle({ commit }, updatedArticle)
        expect(mockAxios["patch"]).toHaveBeenCalledWith(
            "articles/62975ca7f785b0b029efa2f5",
            updatedArticle
        );
        expect(commit).toHaveBeenCalledWith("UPDATE_ARTICLE", updatedArticle);
    })

    it('Delete article', async () => {
        const article = { '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }
        const mockResult = {
            data: article

        }
        const commit = jest.fn();
        const mockAxios = {
            delete: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.deleteArticle({ commit }, "62975ca7f785b0b029efa2f5")
        expect(mockAxios["delete"]).toHaveBeenCalledWith(
            "articles/62975ca7f785b0b029efa2f5",
        );
        expect(commit).toHaveBeenCalledWith("DELETE_ARTICLE", "62975ca7f785b0b029efa2f5");
    })

    it('Search an article', async () => {
        const articles = [{ '_id': '62975ca7f785b0b029efa2f5', 'authorUserId': { '_id': '629618fad2f52861b8b30182', 'fullName': 'yohans hailu', 'email': 'yohanshailu@gmail.com', '__v': 0 }, 'title': 'Worst movies ever made', 'content': 'People write alot about movies even more than ...', 'imageUrls': [], 'rating': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, 'description': 'discription goes here', 'createdAt': '2022-06-01T12:33:43.544Z', 'updatedAt': '2022-06-01T12:33:43.544Z', '__v': 0 }]
        const mockResult = {
            data: articles
        }
        const term = "Worest Movies"
        const commit = jest.fn();
        const mockAxios = {
            get: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.searchArticle({ commit }, term)
        expect(mockAxios["get"]).toHaveBeenCalledWith(
            `articles/search/?search-term=${term}`

        );
        expect(commit).toHaveBeenCalledWith("SET_ARTICLES", articles);
    })

    it('Get comments', async () => {
        const comments = [{ 'user': '62df9ac5dbfc9f3f9e3e57d8', 'articleId': '62975ca7f785b0b029efa2f5', 'text': 'comment', '_id': '62eb805bc375246a818da592', 'created_at': '2022-08-04T08:16:27.722Z', 'updated_at': '2022-08-04T08:16:27.722Z', '__v': 0 }]
        const mockResult = {
            data: comments

        }
        const commit = jest.fn();
        const mockAxios = {
            get: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.getComments({ commit }, "62975ca7f785b0b029efa2f5")
        expect(mockAxios["get"]).toHaveBeenCalledWith(
            "comments/62975ca7f785b0b029efa2f5"
        );
        expect(commit).toHaveBeenCalledWith("SET_COMMENTS", comments);
    })

    it('Creates a comment', async () => {
        const comment = { 'user': '62df9ac5dbfc9f3f9e3e57d8', 'articleId': '62975ca7f785b0b029efa2f5', 'text': 'comment', '_id': '62eb805bc375246a818da592', 'created_at': '2022-08-04T08:16:27.722Z', 'updated_at': '2022-08-04T08:16:27.722Z', '__v': 0 }
        const mockResult = {
            data: comment

        }
        const commit = jest.fn();
        const mockAxios = {
            post: jest.fn(() => Promise.resolve(mockResult))
        };
        actions.$axios = mockAxios
        await actions.createComment({ commit }, { id: "62975ca7f785b0b029efa2f5", text: "comment" })
        expect(mockAxios["post"]).toHaveBeenCalledWith(
            "comments/62975ca7f785b0b029efa2f5",
            { text: "comment" }
        );
        expect(commit).toHaveBeenCalledWith("SET_COMMENT", comment);
    })
})
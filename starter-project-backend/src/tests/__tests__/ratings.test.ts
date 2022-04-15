import Rating, { IRating } from "../../models/ratings"
import * as dbHandler from '../setupdb'
import request from 'supertest'
import app from "../../app"

beforeAll(async () => {
    await dbHandler.connect()
})

afterEach(async () => {
    await dbHandler.clear()
})

afterAll(async () => {
    await dbHandler.disconnect()
})

describe('GET /api/articles/{id}/ratings', () => {
    it('should return status code 200', async () => {
        const userId = "1"
        const value = 3
        await request(app)
            .post("/api/articles/1/ratings")
            .send({userId, value})
        const res = await request(app)
            .get("/api/articles/1/ratings")
            .send()
        expect(res.statusCode).toEqual(200)
    })
})

describe('POST /api/articles/{id}/ratings', () => {
    it('should return status code 201',async () => {
        const userId = "1"
        const value = 3
        const res = await request(app)
            .post("/api/articles/1/ratings")
            .send({userId, value})
        expect(res.statusCode).toEqual(201)
    })

    it('should return status code 409 if user has already rated this article',async () => {
        const userId = "1"
        const value = 3
        const res = await request(app)
            .post("/api/articles/1/ratings")
            .send({userId, value})
        expect(res.statusCode).toEqual(201)
    })

    it('should return status code 400 if userId or value is missing', async () => {
        const res = await request(app)
            .post("/api/articles/2/ratings")
            .send()
        expect(res.statusCode).toEqual(400)
    })
})

describe('Update /api/articles/{id}/ratings', () => {
    it('should return status code 201', async () => {
        const userId = "1"
        const value = 3
        await request(app)
            .post("/api/articles/1/ratings")
            .send({userId, "value": value + 1})
        const res = await request(app)
            .patch("/api/articles/1/ratings")
            .send({userId, value})
        
        expect(res.statusCode).toEqual(201)
    })
    
    it('should return status code 400 if userId is missing', async () => {
        const userId = "1"
        const value = 3
        await request(app)
            .post("/api/articles/1/ratings")
            .send({userId, "value": value})
        const res = await request(app)
            .patch("/api/articles/1/ratings")
            .send()
        expect(res.statusCode).toEqual(400)
    })

    it(`should return status code 404 if rating doesn't exist`,async () => {
        const userId = "1"
        const value = 3
        const res = await request(app)
            .patch("/api/articles/1/ratings")
            .send({userId, value})
        expect(res.statusCode).toEqual(404)
    })
})

describe('Delete /api/articles/{id}/ratings', () => {
    it('should return status code 201', async () => {
        const userId = "1"
        const value = 3
        await request(app)
            .post("/api/articles/1/ratings")
            .send({userId, value})
        const res = await request(app)
            .delete("/api/articles/1/ratings")
            .send({userId})
        expect(res.statusCode).toEqual(201)
    })
})
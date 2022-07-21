const request = require('supertest')
const app = require('../server').app
const User = require('../models/user.models')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

describe('API Authentication:', () => {
  let token
  beforeEach(async () => {
    const user = await User.create({ firstName: 'minte', lastName: 'alex', email: 'a@gmail.com', password: 'hello' })
    token = jwt.sign({ id: user.id }, 'jwt token')
  })

  describe('api auth', () => {
    test('api should be locked down', async () => {
      let response = await request(app).get('/api/v1/user/')
      expect(response.statusCode).toBe(401)

      response = await request(app).get('/api/v1/user/:id')
      expect(response.statusCode).toBe(401)

      response = await request(app).post('/api/v1/user')
      expect(response.statusCode).toBe(401)
    })

    test('passes with JWT', async () => {
      const jwt = `Bearer ${token}`
      const id = mongoose.Types.ObjectId()
      const results = await Promise.all([
        request(app)
          .get('/api/v1/user')
          .set('Authorization', jwt),
        request(app)
          .get(`/api/v1/user/${id}`)
          .set('Authorization', jwt),
        request(app)
          .post('/api/v1/user')
          .set('Authorization', jwt),
        request(app)
          .put(`/api/v1/user/${id}`)
          .set('Authorization', jwt),
        request(app)
          .delete(`/api/v1/user/${id}`)
          .set('Authorization', jwt)
      ])

      results.forEach(res => expect(res.statusCode).not.toBe(401))
    })
  })
})
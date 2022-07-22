const Rating = require('../models/rating')
const mongoose = require('mongoose')
console.log(Rating)
describe('Rating model', () => {
  describe('schema', () => {
    test('stars', () => {
      const stars = Rating.schema.obj.stars
      expect(stars).toBeDefined()
    })
  })
})

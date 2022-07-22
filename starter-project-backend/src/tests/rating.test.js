const Rating = require('../models/rating')
describe('Rating model', () => {
  describe('schema', () => {
    test('stars', () => {
      const stars = Rating.schema.obj.stars
      expect(stars).toBeDefined()
    })
    test('user', () => {
      const user = Rating.schema.obj.user
      expect(user).toBeDefined()
    })
  })
})

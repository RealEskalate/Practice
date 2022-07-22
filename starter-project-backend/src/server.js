const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const articleRouter = require('./routes/article.routes')
const userRoutes = require('./routes/user.routes')
const ratingRouter = require('./routes/rating.router')
const commentRouter = require('./routes/comment.router')
const { isAuthenticated } = require('./middleware/isAuthenticated')

const port = 3000
const host = '127.0.0.1'
const dbUrl = 'mongodb://localhost:27017/blog'
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/rating', ratingRouter)
app.use('/api/v1/article', articleRouter) //here router is called for article
app.use('/api/v1/comments', isAuthenticated, commentRouter)

const start = async () => {
  await mongoose.connect(dbUrl, { useNewUrlParser: true })
  try {
    app.listen(port, host, () => {
      console.log(`Server running on http://${host}:${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = { start }

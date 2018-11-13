import express from 'express'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
// import schema from './graphql'

const app = new express()

mongoose.connect(
  'mongodb://test:test123@ds261253.mlab.com:61253/graphql-api',
  {
    useNewUrlParser: true
  }
)

const db = mongoose.connection
db.on('error', () => console.log('Failed to connect to database')).once(
  'open',
  () => console.log('Connected to database')
)

app.get('/', (req, res) => {
  res.status(200).send({ type: 'success' })
})

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true
//   })
// )

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

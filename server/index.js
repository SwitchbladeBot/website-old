if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const {Database, Model} = require('mongorito');
const cors = require('cors')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const db = new Database(process.env.MONGODB_URI)
class Guild extends Model {}
class User extends Model {}
db.register(Guild)
db.register(User)

async function start() {
  // Nuxt
  const nuxt = new Nuxt(config)
  if (config.dev) await new Builder(nuxt).build()
  app.use(nuxt.render)

  // API
  app.use('/api', cors()) // TODO: Configure CORS to only accept requests from the same domain
  app.use('/api', express.json())
  app.get('/api', (req, res) => {
    res.json({hey: "This works!"})
  })

  await db.connect()
  app.listen(port, host)
}

start()

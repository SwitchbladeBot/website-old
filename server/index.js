if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)

const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Nuxt
async function start () {
  const nuxt = new Nuxt(config)
  if (config.dev) await new Builder(nuxt).build()
  app.use(nuxt.render)
  app.listen(port, host)
}

start()

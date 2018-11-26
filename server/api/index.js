const { Client } = require('discord.js')

module.exports = class Wrapper extends Client {
  constructor (options = {}, app) {
    super(options)
    this.app = app
  }

  start (token) {
    this.app.get('/api/*', (req, res) => {
      res.json(['ok'])
    })
  }
}

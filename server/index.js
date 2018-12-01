if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const { Database, Model } = require('mongorito')
const cors = require('cors')
const { Client } = require('discord.js')

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

const client = new Client({
  fetchAllMembers: true,
  disableEveryone: true
})

async function start () {
  // API
  app.use('/api', cors()) // TODO: Configure CORS to only accept requests from the same domain
  app.use('/api', express.json())

  app.get('/api/contributors', async (req, res) => {
    const guild = client.guilds.get(process.env.BOT_GUILD)
    const roles = guild.roles
    const members = guild.members
    const alreadyFound = []
    const contributorRoles = roles
      .filter(r => r.hoist)
      .sort((a, b) => b.position - a.position)
      .map(role => {
        return {
          id: role.id,
          name: role.name,
          members: members.map(member => {
            if (member.roles.has(role.id) && !member.user.bot && !alreadyFound.includes(member.id)) {
              alreadyFound.push(member.id)
              const { id, user: { username, discriminator, avatar, presence: { status } } } = member
              return { username, discriminator, id, avatar, status }
            }
          }).filter(u => u)
        }
      }).filter(r => r.members.length > 0)

    res.json({ roles: contributorRoles })
  })

  // Nuxt
  const nuxt = new Nuxt(config)
  if (config.dev) await new Builder(nuxt).build()
  app.use(nuxt.render)

  await db.connect()
  await client.login(process.env.DISCORD_TOKEN)
  app.listen(port, host)
}

start()

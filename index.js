const express = require('express')
const server = express()
require('dotenv').config()

const PORT = process.env.PORT_ENV || 5000

server.use(express.json())

server.get('/', (req, res) => res.status(200).json({ api: 'up' }))

const games = [
  {
    title: 'Super Smash Bros',
    genre: 'Fighting Platformer',
    releaseYear: 1999
  },
  {
    title: 'Minecraft',
    genre: 'Voxel Adventure',
    releaseYear: 2011
  },
  {
    title: 'Super Mario World',
    genre: 'Platformer',
    releaseYear: 1990
  }
]

server.listen(PORT, _ => console.log('Listening on port ' + PORT))

module.exports = server

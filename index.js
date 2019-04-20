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

server.get('/games', (req, res) => res.status(200).json({ games }))
server.get('/nogames', (req, res) =>
  res.status(200).json({ games: games.filter() })
)

server.post('/games', async (req, res) => {
  const { title, genre, releaseYear } = req.body
  let end = false
  for (let i = 0; i < games.length; i++) {
    if (games[i].title === title) {
      console.log(games[i].title, title)
      res.status(405).json({ message: 'Duplicate Game' })
      end = true
      break
    }
  }
  if (end == false) {
    if (!title || !genre || !releaseYear)
      res.status(422).json({ error: 'Please Fill Out All Fields' })
    else {
      // adds games
      games.push(req.body)
      // sends id of game added
      res.status(201).json(games.length - 1)
    }
  }
})

server.listen(PORT, _ => console.log('Listening on port ' + PORT))

module.exports = server

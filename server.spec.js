const server = require('./index')
const request = require('supertest')

describe('get tests', () => {
  it('should return full array', () => {
    server.get('/games', (req, res) => {
      expect(req.body).toEqual([
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
      ])
    })
  })
  it('should return empty array', () => {
    server.get('/nogames', (req, res) => {
      expect(req.body).toEqual([])
    })
  })
  it('should return status code', () => {
    server.get('/games', (req, res) => {
      expect(req.statusCode).toBe(200)
    })
  })
})
describe('post tests', () => {
  it('should return 201 status code', async () => {
    const body = {
      title: 'Golden Eye: 007',
      genre: 'Shooter',
      releaseYear: '1990'
    }
    const res = await request(server)
      .post('/games')
      .send(body)
    expect(res.statusCode).toBe(201)
  })
})

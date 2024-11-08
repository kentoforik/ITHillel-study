import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/posts endpoint', () => {
  it('should create new post with valid data', async () => {
    const response = await fetchJSON(testData.POSTPost)

    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(matchObjects.newPost)
  })
})


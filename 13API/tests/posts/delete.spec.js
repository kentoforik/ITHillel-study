import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/posts endpoint', () => {
  it('should delete post', async () => {
    const response = await fetchJSON(testData.DELETEPost)

    expect(response.status).toBe(200)
  })
})


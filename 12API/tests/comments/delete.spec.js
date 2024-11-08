import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/comments endpoint', () => {
  it('should delete comment', async () => {
    const response = await fetchJSON(testData.DELETEComments)

    expect(response.status).toBe(200)
  })
})


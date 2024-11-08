import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/posts endpoint', () => {
  it('should change existing post', async () => {
    const response = await fetchJSON(testData.PUTpost)

    expect(response.status).toBe(200)
    expect(response.data).toMatchObject(matchObjects.changedPost)
  })
})


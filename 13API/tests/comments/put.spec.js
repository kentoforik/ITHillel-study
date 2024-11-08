import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/comments endpoint', () => {
  it('should change existing comment', async () => {
    const response = await fetchJSON(testData.PUTComments)

    expect(response.status).toBe(200)
    expect(response.data).toMatchObject(matchObjects.changedComment)
  })
})


import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/comments endpoint', () => {
  it('should create new comment with valid data', async () => {
    const response = await fetchJSON(testData.POSTComments)

    expect(response.status).toBe(201)
    expect(response.data).toMatchObject(matchObjects.newComment)
  })
})


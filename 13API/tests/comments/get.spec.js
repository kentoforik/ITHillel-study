import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/comments endpoint', () => {
  it('should return correct status code and array of objects as data for GET all comments ', async () => {
    const response = await fetchJSON(testData.GETComments)

    expect(response.status).toBe(200)
    expect(Array.isArray(response.data)).toBeTruthy()
    expect(response.data.every(item => typeof item === 'object')).toBeTruthy()
  })
})


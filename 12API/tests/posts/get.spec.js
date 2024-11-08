import { fetchJSON } from '../../task1.js'
import { testData } from '../data/testData.js'
import { matchObjects } from '../data/testMatchers.js'

describe('/posts endpoint', () => {
  it('should return correct status code and array of objects as data for GET all posts ', async () => {
    const response = await fetchJSON(testData.GETAllPosts)

    expect(response.status).toBe(200)
    expect(Array.isArray(response.data)).toBeTruthy()
    expect(response.data.every(item => typeof item === 'object')).toBeTruthy()
  })

  it('should return correct status code and data for GET single post ', async () => {
    const response = await fetchJSON(testData.GETPost)
    
    expect(response.status).toBe(200)
    expect(response.data).toEqual(matchObjects.existingPost1)
  })
})


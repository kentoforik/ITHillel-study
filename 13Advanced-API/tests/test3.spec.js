const axios = require('axios')
const { callMockedApi } = require('../task3')
const { url, mockedResponses } = require('./testData3')

jest.mock('axios')

describe('Task3', () => {
  describe('Use mocked axios instead of real requests', () => {
    it('with positive response for POST request', async () => {
      axios.post = jest.fn().mockResolvedValueOnce(mockedResponses.createUser)
      const result = await callMockedApi(url, 'post')

      expect(result.status).toEqual(mockedResponses.createUser.status)
      expect(result.data).toEqual(mockedResponses.createUser.data)
    })

    it('with positive response for GET request', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(mockedResponses.getUser)
      const result = await callMockedApi(url, 'get')

      expect(result.status).toEqual(mockedResponses.getUser.status)
      expect(result.data).toEqual(mockedResponses.getUser.data)
    })

    it('with positive response for DELETE request', async () => {
      axios.delete = jest.fn().mockResolvedValueOnce(mockedResponses.deleteUser)
      const result = await callMockedApi(url, 'delete')

      expect(result.status).toEqual(mockedResponses.deleteUser.status)
    })

    it('with negative response for POST request', async () => {
      axios.post = jest.fn().mockResolvedValueOnce(mockedResponses.invalidAuth)
      const result = await callMockedApi(url, 'post')

      expect(result.status).toEqual(mockedResponses.invalidAuth.status)
      expect(result.data).toEqual(mockedResponses.invalidAuth.data)
    })

    it('with negative response for GET request and network error', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(mockedResponses.networkErr)
      const result = await callMockedApi(url, 'get')

      expect(result.status).toEqual(mockedResponses.networkErr.status)
      expect(result.data).toEqual(mockedResponses.networkErr.data)
    })
  })
})
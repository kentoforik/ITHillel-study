const { getWithCustomHeadersParams } = require('../task2.js')
const { url, params, method, headers } = require('./testData2.js')

describe('Task2', () => {
  let expectedData;

  beforeAll(async () => {
    request = await getWithCustomHeadersParams(url, params, method, headers)
    expectedData = request.config
  })

  it('Function sends request with custom headers', async () => {
    expect(expectedData.headers['token']).toEqual(headers.token)
    expect(expectedData.headers['customHeader1']).toEqual(headers.customHeader1)
    expect(expectedData.headers['customHeader2']).toEqual(headers.customHeader2)
  })

  it('Function sends request with custom URL params', async () => {
    expect(expectedData.params['name']).toEqual(params.name)
    expect(expectedData.params['age']).toEqual(params.age)
  })
})


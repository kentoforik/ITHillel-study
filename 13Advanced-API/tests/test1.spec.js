const { url, customErrors } = require('./testData1.js')
const { getUrl } = require('../task1.js')

describe('Task1', () => {
  it('Function throws NOTFOUND error for non existing domain', async () => {
    await expect(getUrl(url.nonExistingDomain)).rejects.toThrow(customErrors.nonExistingDomain)
  })

  it('Function throws 404 error for existing domain but non existing resource', async () => {
    await expect(getUrl(url.wrongURL)).rejects.toThrow(customErrors.wrongURL)
  })

  it('Function does not throw any error for correct URL', async () => {
    await expect(getUrl(url.correctURL)).resolves.not.toThrow(Object.values(customErrors).join(" "))
  })

})

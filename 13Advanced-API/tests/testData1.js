const url = {
  nonExistingDomain: 'https://www.1234567.com/',
  wrongURL: 'https://www.google.com/wrong',
  correctURL: 'https://google.com'
}

const customErrors = {
  nonExistingDomain: 'Domain not found',
  wrongURL: 'Resource not found',
  randomError: 'Unexpected error'
}

module.exports = {
  url,
  customErrors
}
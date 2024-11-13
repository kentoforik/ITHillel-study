const url = 'https://mytestapi.com'

const user = {
  name: 'Pavlo',
  age: '40'
}

const mockedResponses = {
  createUser: {
    status: 201,
    data: {
      name: user.name,
      age: user.age
    }
  },

  getUser: {
    status: 200,
    data: {
      name: user.name,
      age: user.age
    }
  },

  deleteUser: {
    status: 204,
  },

  invalidAuth: {
    status: 403,
    data: 'Access denied: invalid credentials.'
  },

  networkErr: {
    status: 'Unknown status.',
    data: 'Network error: check connection.'
  }
}

module.exports = {
  url,
  user,
  mockedResponses
}
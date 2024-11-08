import { baseUrl } from '../urls.js'

export const testData = {
  GETAllPosts: {
    url: baseUrl.posts,
    method: 'get',
    data: {}
  },
  GETPost: {
    url: `${baseUrl.posts}/1`,
    method: 'get',
    data: {}
  },
  POSTPost: {
    url: baseUrl.posts,
    method: 'post',
    data: {
      "title": "Post title",
      "body": "Post body",
      "userId": 123
    }
  },
  PUTpost: {
    url: `${baseUrl.posts}/1`,
    method: 'put',
    data: {
      "title": "Post NEW title",
      "body": "Post NEW body",
      "userId": 456
    }
  },
  DELETEPost: {
    url: `${baseUrl.posts}/1`,
    method: 'delete',
    data: {}
  },
  GETComments: {
    url: baseUrl.comments,
    method: 'get',
    data: {}
  },
  POSTComments: {
    url: baseUrl.comments,
    method: 'post',
    data: {
      "title": "Comment title",
      "body": "Comment body",
      "userId": 123
    }
  },
  PUTComments: {
    url: `${baseUrl.comments}/1`,
    method: 'put',
    data: {
      "title": "Comment NEW title",
      "body": "Comment NEW body",
      "userId": 123
    }
  },
  DELETEComments: {
    url: `${baseUrl.comments}/1`,
    method: 'delete',
    data: {}
  }
}
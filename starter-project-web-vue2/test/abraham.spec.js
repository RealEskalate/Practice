import { actions, mutations } from '../store/abraham'

jest.mock('axios', () => {
  return {
    get: () => ({ data: { _id: '62975d53f785b0b029efa2fa' } }),
  }
})

describe('fetchBlogs', () => {
  it('makes a request and commits the response', async () => {
    const store = { commit: jest.fn() }

    await actions.fetchBlogs(store)
    expect(store.commit).toHaveBeenCalledWith('setBlogs', {
      _id: '62975d53f785b0b029efa2fa',
    })
  })
})

describe('setBlogs', () => {
  it('adds a blog to the state', () => {
    const post = { _id: 1, title: 'Test_Blog' }
    const state = {
      blogs: [],
    }

    mutations.setBlogs(state, { post })

    expect(state).toEqual({
      blogs: { post },
    })
  })
})

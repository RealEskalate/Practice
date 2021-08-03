export const state = () => ({
  posts: [
    {
      id: 1,
      date: 'Tuesday, August 3, 2021 2:19 PM',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: 2,
      date: 'Tuesday, August 3, 2021 2:21 PM',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
    }
  ]
})

export const mutations = {
  add (state, post) {
    state.posts.push(post)
  }
}

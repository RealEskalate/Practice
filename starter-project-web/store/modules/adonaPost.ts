import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

@Module
export default class AdonaPost extends VuexModule {
  posts: Array<Object> = []

  @Mutation
  setPosts (posts: Array<Object>) {
    this.posts = posts
  }

  // get allPosts () {
  //   return this.posts
  // }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'setPosts' })
  async fetchTodos () {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
  }
}

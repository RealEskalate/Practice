import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios from '@nuxtjs/axios'
@Module({ namespaced: true, name: 'test' })
class daniel extends VuexModule {
  public article: object = {}
  @Mutation
  public setName (newName: string): void {
    this.name = newName
  }

  @Action
  public updateName (newName: string): void {
    this.context.commit('setName', newName)
  }

  @Action
  async public newArticle (art: article):void {
    const response = await axios.post('http://jsonplaceholder.typicode.com/albums', { art })
    this.context.commit('newArticle', response.data)
  }
}
export default daniel

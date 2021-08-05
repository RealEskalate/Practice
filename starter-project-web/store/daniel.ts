import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
// import axios from '@nuxtjs/axios'
@Module({ namespaced: true, name: 'test' })
class daniel extends VuexModule {
  public article: object = {}
  @Mutation
  public setName (newName: object): void {
    this.article = newName
  }

  @Action
  public updateName (newName: string): void {
    this.context.commit('setName', newName)
  }

  // @Action
  // public  getArticle ():any {
  //   const response =  axios.get('http://jsonplaceholder.typicode.com/albums').then(
  //     (res:any) => {
  //       console.log(res)
  //       this.context.commit('article', response.data)
  //     }
  //   ).catch((err) => {
  //     console.error(err)
  //   })
  // }
}
export default daniel

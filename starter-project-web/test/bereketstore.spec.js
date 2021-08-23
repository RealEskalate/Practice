import Vuex from 'vuex'
import { actions,mutations } from '@/store/bereket'
import * as index from '@/store/bereket'
import { createLocalVue } from '@vue/test-utils'
import _ from 'lodash'
import axios from 'axios'

const localVue = createLocalVue()
Vuex.Store.prototype.$axios = axios
localVue.use(Vuex)

let mockAxiosGetResult
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
  post: jest.fn(() => Promise.resolve(mockAxiosGetResult))
 
}))
let action
const testedAction = (context = {}, payload = {}) => {
  return actions[action].bind({$axios: axios})(context, payload);
}



describe('store/bereket.js', () => {
  let store
  let todo1, todo2
  beforeEach(() => {
    store = new Vuex.Store(_.cloneDeep(index))
   
    todo1 = { id: '1', title: 'title_1', completed: false }
    todo2 = { id: '2', title: 'title_2', completed: false }
  })
  describe('getters', () => {
    let todos
    beforeEach(() => {
      todos = [todo1, todo2]
      store.replaceState({
        todos
      })
    })
    describe('todos_all', () => {
      test('all todos', () => {
        expect(store.getters.alltodos).toEqual(
          expect.arrayContaining(todos)
        )
      })
    })
  })

  describe('actions', () => {
    let commit
    beforeEach(() => {
      commit = jest.fn()
    })

    describe(action='fetchTodos', () => {
      test('todos fetched', async () => {
        mockAxiosGetResult = []
        await testedAction({ commit })
        expect(store.getters.alltodos).toEqual([])
      })
    })
 })
})





describe('Mutations', () => {
    it('mutation todos', () => {
        const state = {
            todos: []
        }
        const todos = [{},{}];
        mutations.setTodos(state,todos);
        expect(state.todos).toBe(todos);
    });
    
});

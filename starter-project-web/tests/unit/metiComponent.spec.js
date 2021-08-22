import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Blogs from '@/components/MetiBlogs.vue'
import { getters } from '~/store/meti'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('Meti Page', () => {
  let actions
  let store
  let state
  let vuetify

  beforeEach(() => {
    state = {
      posts: [{ id: 1, title: 'post', completed:false }]
    }

    actions = {
      allPosts: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        meti: {
          state,
          actions,
          namespaced: true
        }
      }
    })
    vuetify = new Vuetify()
  })

  it('calls get Post', async () => {
    const wrapper = shallowMount(Blogs, { store, localVue, vuetify })
    store.dispatch = jest.fn()
    await wrapper.vm.$nextTick()
    expect(actions.allPosts).toHaveBeenCalled()
  })
  it('renders todos', async () => {
    const wrapper = shallowMount(Blogs, { store, localVue, vuetify })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.post').length).toBe(1)
  })


  it('call delete post', async () => {
    const wrapper = shallowMount(Blogs, { store, localVue, vuetify })
    store.dispatch = jest.fn()
    wrapper.find('.del-btn').trigger('click')
    await wrapper.vm.$nextTick()
    expect(store.dispatch).toHaveBeenCalledWith('meti/deletePost', 1)
  })
})












// import { shallowMount } from "@vue/test-utils";
// import Header from "@/components/MetiHeader.vue";

// console.log(Header)
// describe("Header - Meti", () => {
//   let wrapper;

//   it("shows blogger Name", () => {
//     wrapper = shallowMount(Header, { store, localVue, vuetify })
//     expect(wrapper.find("v-list-item-subtitle").text()).toContain(
//       "Meti Adane"
//     );
//   });

//   it("have an image with a source", () => {
//     wrapper = shallowMount(Header, { store, localVue, vuetify })
//     expect(wrapper.find("[src='@/assets/meti.jpg']").exists()).toBe(true);
//   });

// });
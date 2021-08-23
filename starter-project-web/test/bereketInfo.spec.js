import { mount, createLocalVue } from '@vue/test-utils'
import BereketInfo from '../components/BereketInfo.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue()




describe('Bereket info renders', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('renders properly', () => {
    const wrapper = mount(BereketInfo, { vuetify, localVue })
    expect(wrapper.text()).toContain('Bereket Heramo')
    expect(wrapper.html()).toMatchSnapshot()
  })
})


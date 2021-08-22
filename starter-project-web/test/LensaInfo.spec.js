import { mount, createLocalVue } from '@vue/test-utils'
import LensaInfo from '@/components/LensaInfo.vue'
import Vuetify from 'vuetify'
const localVue = createLocalVue()

describe('LensaInfo', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('renders properly and matchs snapshoot', () => {
    const wrapper = mount(LensaInfo, { vuetify, localVue })
    expect(wrapper.text()).toContain('Lensa Billion')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

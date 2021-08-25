
import Vuetify from 'vuetify'

import { createLocalVue, mount } from '@vue/test-utils'
import AdonaInfo from '@/components/AdonaInfo.vue'

describe('AdonaInfo', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('Title', () => {
    const wrapper = mount(AdonaInfo, { localVue, vuetify })
    const title = wrapper.find('h2')
    expect(title.text()).toBe('Adona Tesfaye')
  })
})

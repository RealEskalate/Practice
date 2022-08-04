import LoadingBar from '@/components/liben/LoadingBar'
import { mount } from '@vue/test-utils'

function factory({ data }) {
    return mount(LoadingBar, {
        data
    })
}

describe('Loading Bar', () => {
    it.skip('renders loading bar', () => {
        const wrapper = factory({ data() { return { loading: true } } })
        expect(wrapper.html()).toContain('Loading...')
    })
})
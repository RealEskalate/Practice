import LibenArticle from '@/components/liben/LibenArticle'
import { mount } from '@vue/test-utils'

function factory(propsData) {
    return mount(LibenArticle, {
        propsData: {
            ...propsData
        }
    })
}

describe('Liben Article', () => {
    it.skip('renders liben article', () => {
        const wrapper = factory({ article: { "_id": "62975ca7f785b0b029efa2f5", "authorUserId": { "_id": "629618fad2f52861b8b30182", "fullName": "yohans hailu", "email": "yohanshailu@gmail.com", "__v": 0 }, "title": "Worst movies ever made", "content": "People write alot about movies even more than ...", "imageUrls": [], "rating": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }, "description": "discription goes here", "createdAt": "2022-06-01T12:33:43.544Z", "updatedAt": "2022-06-01T12:33:43.544Z", "__v": 0 } })
        expect(wrapper.html()).toContain('Worst movies ever made')
    })
})
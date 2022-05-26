import {useStoreTest} from '../../store/configureStore'
import {addBlog} from '../../store/slices/blogs'
import MockAdapter from "axios-mock-adapter"
import axios from 'axios'
describe('blogs slice' , () => {
    let store, slicBlog, fakeAxios
    beforeEach(() => {
        fakeAxios = new MockAdapter(axios)
        store = useStoreTest()
        slicBlog = () => store.getState().entities.blog

    })
    it("should handel add new blog", async() => {
        const blog = {title:'title', id:'1', author:'man', content:'content'}
        
        // after api call intgrated
        // const savedBlog = {...blog, id:1}
        // fakeAxios.onPost('/blogs').reply(200, savedBlog);
        
        await store.dispatch(addBlog(blog))
        expect(slicBlog().value).toContainEqual(blog)
    })


})
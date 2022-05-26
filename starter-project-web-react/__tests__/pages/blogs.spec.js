import { renderWithStore } from '../../testSetup'
import Blogs from '../../pages/blogs'
describe('Blogs', () => {
 
 it('renders', async () => {
  const { getAllByRole, getByText } = renderWithStore(<Blogs/>, undefined)
 })
})
import { renderWithStore } from '../../testSetup'
import Blogs from '../../pages/blogs'
describe('Blogs', () => {
 
 it('renders the blogs page', async () => {
  const { getAllByRole, getByText } = renderWithStore(<Blogs/>, undefined)
 })
})
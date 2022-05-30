import { useStoreTest  } from "./store/configureStore";
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'


export const renderWithStore = (component, initialState) => {
    const Wrapper = ({ children }) => (
      <Provider store={useStoreTest(initialState)}>{children}</Provider>
    )
    return render(component, { wrapper: Wrapper })
  }
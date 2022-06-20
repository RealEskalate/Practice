import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginCard from '../../../components/auth/LoginCard'

const testInputs = [
  {
    label: 'Email',
    testValue: 'john@gmail.com',
  },
  {
    label: 'Password',
    testValue: 'john1234',
  },
]

describe('Register Form', () => {
  it('Should contain input fields', () => {
    render(<LoginCard />)

    testInputs.forEach((field) => {
      expect(screen.getByLabelText(field.label)).toBeInTheDocument()
    })
  })
  it('Should contain submit button', () => {
    render(<LoginCard />)

    const submitButton = screen.getByRole('button', { name: 'Submit' })

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).not.toBeDisabled()
  })
})

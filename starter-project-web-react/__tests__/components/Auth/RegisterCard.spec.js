import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import RegisterCard from '../../../components/auth/RegisterCard'

const testInputs = [
  {
    label: 'Full Name',
    testValue: 'John Doe',
  },
  {
    label: 'Email',
    testValue: 'john@gmail.com',
  },
  {
    label: 'Password',
    testValue: 'john1234',
  },
  {
    label: 'Confirm Password',
    testValue: 'john1234',
  },
]

describe('Register Form', () => {
  it('Should contain input fields', () => {
    render(<RegisterCard />)

    testInputs.forEach((field) => {
      expect(screen.getByLabelText(field.label)).toBeInTheDocument()
    })
  })
  it('Should contain submit button', () => {
    render(<RegisterCard />)

    const submitButton = screen.getByRole('button', { name: 'Submit' })

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).not.toBeDisabled()
  })
})

describe('empty spec', () => {
  beforeEach(()=>{  
    cy.login(Cypress.env('TEST_EMAIL'), Cypress.env('TEST_PASSWORD')) 
  })

  it('should display profile page', () => {
    cy.visit('/profile')

    cy.get('[name="firstname"]').clear()
    cy.get('[name="lastname"]').clear()
    cy.get('[name="firstname"]').type(Cypress.env('TEST_FIRSTNAME'))
    cy.get('[name="lastname"]').type(Cypress.env('TEST_LASTNAME'))
    cy.get('[name="password"]').type(Cypress.env('TEST_PASSWORD'))
    cy.get('[name="confirmPassword"]').type(Cypress.env('TEST_CONFIRM_PASSWORD'))

    cy.contains('Update').click()

    cy.wait(2000)

    cy.get('[name="successAlert"]').should('be.visible')
    
  })
})

export {}
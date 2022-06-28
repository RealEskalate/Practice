describe('empty spec', () => {
  beforeEach(()=>{  
    cy.login()
  })

  it('should display profile page', () => {
		cy.visit("/profile");
		cy.wait("@session");

    cy.url().should('eq', 'http://localhost:3000/profile')
  })

})

export {}
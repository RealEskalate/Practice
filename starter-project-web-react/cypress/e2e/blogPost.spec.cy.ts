describe('Blog Post', () => {
    beforeEach(()=>{  
      cy.login(Cypress.env('TEST_EMAIL'), Cypress.env('TEST_PASSWORD')) 
    })
  
    it('should display profile page', () => {
      cy.visit('/blogs')

      const title = "TEST_TITLE new 1"
      const content = "Test_Content 1"
      cy.contains('Post Blog').click()
      cy.get('[name="title"]').clear()
      cy.get('[name="content"]').clear()
      cy.get('[name="title"]').type(title)
      cy.get('[name="content"]').type(content)
      
      cy.wait(2000)
      cy.contains("POST").click()
      cy.contains(title).should('be.visible')
      cy.contains(content).should('be.visible')

      
    })
  })
  
  export {}
describe('Blog Post', () => {
    beforeEach(()=>{  
      cy.login(Cypress.env('TEST_EMAIL'), Cypress.env('TEST_PASSWORD')) 
    })
  
    it('should post blog ', () => {
      cy.visit('/blogs')

      const title = "TEST_TITLE new 1"
      const content = "Test_Content 1"
      cy.contains('Post Blog').click()
      cy.get('[name="title"]').clear()
      cy.get('[name="content"]').clear()
      cy.get('[name="title"]').type(title)
      cy.get('[name="content"]').type(content)
      
      cy.contains("POST").click()
      cy.wait(3000)
      cy.contains(title).should('be.visible')
      cy.contains(content).should('be.visible')

      
    })

    it('should show error message for empty content ', () => {
      cy.visit('/blogs')

      const title = "TEST_TITLE 1 error"
      const content = " "
      cy.contains('Post Blog').click()
      cy.get('[name="title"]').clear()
      cy.get('[name="content"]').clear()
      cy.get('[name="title"]').type(title)
      cy.get('[name="content"]').type(content)
      
      cy.contains("POST").click()
      cy.wait(3000)
      cy.contains("Title can not be only space").should('be.visible')
      // cy.contains(content).should('be.visible')

      
    })

    it('should show error message for empty title', () => {
      cy.visit('/blogs')

      const title = " "
      const content = "Test_Content error"
      cy.contains('Post Blog').click()
      cy.get('[name="title"]').clear()
      cy.get('[name="content"]').clear()
      cy.get('[name="title"]').type(title)
      cy.get('[name="content"]').type(content)
      
      cy.contains("POST").click()
      cy.wait(3000)
      cy.contains("content can not be only space").should('be.visible')
    
      
    })
  })
  
  export {}
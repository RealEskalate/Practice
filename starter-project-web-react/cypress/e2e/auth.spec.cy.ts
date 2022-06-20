describe('Authentication', ()=>{

    it("should login user route to home", ()=>{
        cy.visit('/auth/login')
    
        cy.get('[name="email"]').type(Cypress.env('TEST_EMAIL'))
        cy.get('[name="password"]').type(Cypress.env('TEST_PASSWORD'))
        cy.contains('Submit').click()
        
        cy.wait(10000)
    
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it("should register user", ()=>{
        cy.visit('/auth/register')

        cy.get('[name="fullname"]').type(Cypress.env('TEST_NAME'))
        cy.get('[name="email"]').type(Cypress.env('TEST_EMAIL'))
        cy.get('[name="password"]').type(Cypress.env('TEST_PASSWORD'))
        cy.get('[name="confirmPassword"]').type(Cypress.env('TEST_CONFIRM_PASSWORD'))

        cy.contains('Submit').click()

        cy.wait(10000)

        cy.get('[name="successAlert"]').should('be.visible')


    })

})

export {}
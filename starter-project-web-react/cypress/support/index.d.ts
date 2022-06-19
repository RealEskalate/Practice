declare namespace Cypress {
    interface Chainable<Subject = string> {
      login(username: string, password: string): Chainable<Element>;
    }
  }
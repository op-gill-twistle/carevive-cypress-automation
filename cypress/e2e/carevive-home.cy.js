import { loginPage, homePage } from './loginPage'

describe('Carevive Home Page', () => {
  it('logs in with secure credentials and verifies homepage', () => {
    cy.fixture('selectors').then((selectors) => {
      cy.visit('/')
      // Login steps on auth domain (no cy.origin needed)
      cy.get(selectors.usernameInput).should('be.visible').type(Cypress.env('USERNAME'))
      cy.get(selectors.passwordInput).should('be.visible').type(Cypress.env('PASSWORD'))
      cy.get(selectors.loginButton).click()
      // Verify homepage on app domain
      const appOrigin = Cypress.config('baseUrl').replace(/\/$/, '')
      cy.origin(appOrigin, { args: { logoImage: selectors.logoImage } }, ({ logoImage }) => {
        cy.get(logoImage).should('be.visible')
      })
    })
  })
})


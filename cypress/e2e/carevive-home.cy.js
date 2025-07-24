import { loginPage, homePage } from './loginPage'

describe('Carevive Home Page', () => {
  it('logs in with secure credentials and verifies homepage', () => {
    loginPage.visit()
    loginPage.enterUsername(Cypress.env('USERNAME'))
    loginPage.enterPassword(Cypress.env('PASSWORD'))
    loginPage.clickLogin()
    const appOrigin = Cypress.config('baseUrl').replace(/\/$/, '')
    cy.fixture('selectors').then((selectors) => {
      cy.origin(appOrigin, { args: { logoImage: selectors.logoImage } }, ({ logoImage }) => {
        cy.get(logoImage).should('be.visible')
      })
    })
  })
})


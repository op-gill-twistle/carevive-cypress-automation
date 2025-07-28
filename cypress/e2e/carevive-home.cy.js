beforeEach(() => {
  cy.fixture('selectors').then((selectors) => {
    cy.visit('/')
    // Login steps on auth domain (no cy.origin needed)
    cy.get(selectors.usernameInput).should('be.visible').type(Cypress.env('USERNAME'))
    cy.get(selectors.passwordInput).should('be.visible').type(Cypress.env('PASSWORD'))
    cy.get(selectors.loginButton).click()
    // Log the current URL after login
    cy.url().then(url => {
      cy.log('Current URL after login:', url)
    })
    // Log page content after login for debugging
    cy.document().then(doc => {
      cy.log('Page content after login:', doc.documentElement.innerHTML.substring(0, 1000))
    })
  })
});

describe('Carevive Home Page', () => {
  it('verifies homepage', () => {
    cy.fixture('selectors').then((selectors) => {
      // Verify homepage on app domain
      const appOrigin = Cypress.config('baseUrl').replace(/\/$/, '')
      cy.origin(appOrigin, { args: { logoImage: selectors.logoImage, firstNameInput: selectors.firstNameInput } }, ({ logoImage, firstNameInput }) => {
        cy.get(firstNameInput).first().click()
        cy.get(logoImage).should('be.visible')
      })
    })
  })
})

describe('Register New Patient', () => {
  it('registers a new patient', () => {
    cy.fixture('selectors').then((selectors) => {
      const appOrigin = Cypress.config('baseUrl').replace(/\/$/, '')
      cy.origin(appOrigin, { args: { btnRegisterNewPatient: selectors.btnRegisterNewPatient } }, ({ btnRegisterNewPatient }) => {
        cy.get(btnRegisterNewPatient).click()
        // Click on the field with label MRN
       // cy.contains('label', 'MRN').invoke('attr', 'for').then((inputId) => {
        //  if (inputId) {
           //cy.get(`#${inputId}`).click()
          //  cy.get(`#${inputId}`).type('611111')
       //   }
      //  })
        // TODO: Add further steps for registration
      })
    })
  })
})


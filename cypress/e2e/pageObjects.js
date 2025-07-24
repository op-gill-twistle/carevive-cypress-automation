let selectors;
before(() => {
  cy.fixture('selectors').then((data) => {
    selectors = data;
  });
});

class LoginPage {
  visit() {
    cy.visit('/')
  }
  enterUsername(username) {
    cy.get(selectors.usernameInput).should('be.visible').type(username)
  }
  enterPassword(password) {
    cy.get(selectors.passwordInput).should('be.visible').type(password)
  }
  clickLogin() {
    cy.get(selectors.loginButton).click()
  }
}

class HomePage {
  verifyCancerCenterVisible() {
    cy.get(selectors.logoImage).should('be.visible')
  }
}

export const loginPage = new LoginPage()
export const homePage = new HomePage()

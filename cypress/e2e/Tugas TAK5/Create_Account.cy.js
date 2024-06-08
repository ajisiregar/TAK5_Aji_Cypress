describe('Create Account', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })

  it('Success Create Account', () => {
    cy.get('#firstname').type('Ahmadi Zulkarnain'),
    cy.get('#lastname').type('Siregar'),
    cy.get('#email_address').type('ahmadizulkarnain@gmail.com'),
    cy.get('#password').type('Qwerty123?'),
    cy.get('#password-confirmation').type('Qwerty123?'),
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  })

  it('Failed Create Account_wrong confirmed password', () => {
      cy.get('#firstname').type('Ahmadi Zulkarnain'),
      cy.get('#lastname').type('Siregar'),
      cy.get('#email_address').type('ahmadizulkarnain@gmail.com'),
      cy.get('#password').type('Qwerty123?'),
      cy.get('#password-confirmation').type('qwerty123'),
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click(),
      cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again')
    })
})
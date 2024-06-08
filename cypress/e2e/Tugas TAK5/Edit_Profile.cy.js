describe('Edit_Profile', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    })
    it('Success Edit Firstname and Lastname', () => {
        cy.get('#email').type('ahmadizulkarnain@gmail.com'),
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Qwerty123?'),
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.wait(10000),
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click(),
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click(),
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click(),
        cy.get('#firstname').clear().type('Ajisiregar'),
        cy.get('#lastname').clear().type('Pertama'),
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click(),
        cy.wait(1000),
        cy.get('.message-success > div').should('contain.text','You saved the account information')
    })
})

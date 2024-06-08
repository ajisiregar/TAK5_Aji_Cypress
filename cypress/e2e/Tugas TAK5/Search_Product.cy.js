describe('Search_Product', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    })
    it.only('Success search bag', () => {
        cy.fixture('User').then((UserJson) => {
        let Userlogin = UserJson
        cy.get('#email').type(Userlogin.email),
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(Userlogin.pass),
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click(),
        cy.get('#search').type('bag'),
        cy.get('#search').type('{enter}')
        
    })
    it('Failed search driver', () => {
        cy.get('#email').type('ahmadizulkarnain@gmail.com'),
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Qwerty123?'),
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click(),
        cy.get('#search').type('driver'),
        cy.get('#search').type('{enter}')
    })
})
})
/// <reference types='cypress' />

it('Registration flow', () => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=725tnq')
    
    let newUserName = 'user_name' + Math.floor(Math.random() * 100000)
    let newEmail = 'user' + Math.floor(Math.random() * 100000) + '@gmail.com'
    // Fill registartion form
    cy.get('[placeholder="Username"]').type(newUserName)
    cy.get('[placeholder="Email"]').type(newEmail)
    cy.get('[placeholder="Password"]').type('12345678')
    // Click on the button
    cy.get('button').contains('Sign in').click()
    // Assert username on new page
    cy.get('.nav li:nth-child(4) a').should('have.text', newUserName)
})
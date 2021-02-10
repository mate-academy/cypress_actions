// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

// Advanced level:
// Check next test cases:
// 1. Pagination 
// 2. Rows count selection
// 3. Add new worker
// 4. Delete worker
// 5. Delete all worker
// 6. Find worker in search field and edit it
// 7. Validate data in worker row after creating worker
// 8. Check search by all column values

// https://demoqa.com/webtables

/// <reference types='cypress' />


describe('Papilota Dmytro Homework 10-02', () => {
    // beforeEach(function () {
    //     // cy.visit('https://demoqa.com/automation-practice-form');
    //     cy.task("freshUser").then((object) => {
    //        user = object;
    //     });
    // });

    it('Sign up with faker', () => {
        cy.visit('https://demoqa.com/automation-practice-form')

        cy.get('#firstName').type('Name')
        cy.get('#lastName').type('Name')
        cy.get('#userEmail').type('userEmail@tect.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click('left')
        cy.get('#userNumber').type('12345')
        cy.get('#dateOfBirthInput').type('{selectAll}14 Feb 2001{enter}')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click('left')
        cy.get('.subjects-auto-complete__value-container').click().type('s')
        cy.get('#react-select-2-option-0').click()
        cy.get('#currentAddress').type('currentAddress')
        cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click()
        cy.get('#react-select-3-option-0').click()
        cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()

        cy.get('#react-select-4-option-0').click()
        cy.get('#submit').click()

        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Name Name')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'userEmail@tect.com')
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', '12345')
        // cy.get(':nth-child(4) > .nav-link').contains(user.username).should('exist')
    })
  })

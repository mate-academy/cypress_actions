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

describe('Homework 43 - Basic', () => {
    before('Open site', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Fill in the fields', () => {        
        cy.get('[placeholder="First Name"]').type('John');
        cy.get('[placeholder="Last Name"]').type('Ngo');
        cy.get('[placeholder="name@example.com"]').type('test@gmail.com');
        cy.get('[value="Male"]').check({force: true});
        cy.get('[placeholder="Mobile Number"]').type('0123456789');
        cy.get('#dateOfBirthInput').type('{selectall}').type('31 Dec 2020').type('{enter}');
        cy.get('#subjectsInput').type('Chem{enter}Ma{enter}');
        cy.get('[id="hobbies-checkbox-1"]').check({force: true});
        cy.get('[id="hobbies-checkbox-2"]').check({force: true});
        cy.get('[placeholder="Current Address"]').type('Hello, world!');
        cy.get('#react-select-3-input').type('U{enter}', {force: true});
        cy.get('#react-select-4-input').type('A{enter}', {force: true});
    });

    it('Click the button', () => {
        cy.get('.btn.btn-primary').click();
    });

    it('Check input data', () => {
        cy.get('.table-responsive').contains('John').should('exist');
        cy.get('.table-responsive').contains('Ngo').should('exist');
        cy.get('.table-responsive').contains('test@gmail.com').should('exist');
        cy.get('.table-responsive').contains('Male').should('exist');
        cy.get('.table-responsive').contains('0123456789').should('exist');
        cy.get('.table-responsive').contains('31 December,2020').should('exist');
        cy.get('.table-responsive').contains('Chemistry').should('exist');
        cy.get('.table-responsive').contains('Maths').should('exist');
        cy.get('.table-responsive').contains('Sports').should('exist');
        cy.get('.table-responsive').contains('Reading').should('exist');
        cy.get('.table-responsive').contains('Hello, world!').should('exist');
        cy.get('.table-responsive').contains('Uttar Pradesh').should('exist');
        cy.get('.table-responsive').contains('Agra').should('exist');
    });
});
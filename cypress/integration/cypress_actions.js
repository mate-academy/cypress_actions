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


it('Fill all fields in forms', () =>{
    cy.visit ('https://demoqa.com/automation-practice-form'),
    cy.get('#firstName').type('Joan'),
    cy.get('#lastName').type('Smith'),
    cy.get('#userEmail').type('Joansmith@gmail.com'),
    cy.get('[value="Female"]').check({force: true}),
    cy.get('#userNumber').type('9658421387'),
    cy.get('#dateOfBirthInput').type('14.11.18').type('{enter}'),
    cy.get('#subjectsInput').type('Subject'),
    cy.get('#hobbies-checkbox-2').check({force: true}),
    cy.get('[placeholder="Current Address"]').type('My address'),
    cy.get('#react-select-3-input').type('R{enter}', {force: true}),
    cy.get('#react-select-4-input').type('L{enter}', {force: true})
    
});

it('Submitting form', () =>{
    cy.get('#submit').click()
});

it('Validating data', () =>{
    cy.get('.table-responsive').contains('Joan').should('exist'),
    cy.get('.table-responsive').contains('Smith').should('exist'),
    cy.get('.table-responsive').contains('Joansmith@gmail.com').should('exist'),
    cy.get('.table-responsive').contains('Female').should('exist'),
    cy.get('.table-responsive').contains('9658421387').should('exist'),
    cy.get('.table-responsive').contains('28 October,202014').should('exist'),
    cy.get('.table-responsive').contains('Subject').should('exist'),
    cy.get('.table-responsive').contains('Reading').should('exist'),
    cy.get('.table-responsive').contains('My address').should('exist'),
    cy.get('.table-responsive').contains('NCR Delhi').should('exist')
   });

   //Advanced 

   it('Pagination', () =>{
    cy.visit ('https://demoqa.com/webtables'),
    cy.get('.-pageJump > input').should('exist')
});

it('Rows count selection', () =>{
    cy.visit ('https://demoqa.com/webtables'),
    cy.get('select').select('100 rows');
});

it('Add new worker', () =>{
    cy.visit ('https://demoqa.com/webtables'),
    cy.get('#addNewRecordButton').click(),
    cy.get('[ placeholder="First Name"]').type('Kevin'),
    cy.get('[placeholder="Last Name"]').type('Rute'),
    cy.get('[placeholder="name@example.com"]').type('Kevrute@gmail.com'),
    cy.get('[placeholder="Age"]').type('65'),
    cy.get('#salary').type('1000'),
    cy.get('#department').type('Accounter'),
    cy.get('#submit').click()
});

    it('Delete worker', () =>{
      cy.visit ('https://demoqa.com/automation-practice-form'),
      cy.get('#delete-record-4').click()
    
    });
// Немогу найти причину - почему по id не находит кнопки



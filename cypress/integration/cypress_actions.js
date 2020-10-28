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

// <reference types = "cypress" />

it ('basic', () => {
  cy.visit('https://demoqa.com/automation-practice-form')
  cy.get('#firstName').type('Nataly')
  cy.get('#lastName').type('Boicova')
  cy.get('#userEmail').type('email@gmail.com')
  cy.get('[class="custom-control custom-radio custom-control-inline"]').contains('Female').click()
  cy.get('#userNumber').type('1111111')
  cy.get('#dateOfBirthInput').type('{selectall}22 May 1990{enter}')
  cy.get('#subjectsContainer').type('English{enter}')
  cy.get('[class="custom-control custom-checkbox custom-control-inline"]').contains('Reading').click()
  cy.get('#currentAddress').type('Planet Earth')
  cy.get('[class=" css-yk16xz-control"]').contains('Select State').type('n{enter}')
  cy.get('[class=" css-yk16xz-control"]').contains('Select City').type('g{enter}')
  cy.get('[class="btn btn-primary"]').click();
  });

it ('should contain', () => {
  cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Nataly Boicova').should('exist')
  cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('email@gmail.com').should('exist')
  cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Female').should('exist')
  cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('1111111').should('exist')
  cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('22 May,1990').should('exist')
  cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('English').should('exist')
  cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Reading').should('exist')
  cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('Planet Earth').should('exist')
  cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('NCR Gurgaon').should('exist')
   });
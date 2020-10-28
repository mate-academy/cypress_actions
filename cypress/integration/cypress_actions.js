// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

/// <reference types = "cypress" />

it('Basic level', () => {
  cy.visit('https://demoqa.com/automation-practice-form');
  cy.get('[placeholder="First Name"]').type('Raccoon');
  cy.get('[placeholder="Last Name"]').type('City');
  cy.get('[placeholder="name@example.com"]').type('raccooncity@gmail.com');
  cy.get('[for="gender-radio-1"]').click();
  cy.get('[placeholder="Mobile Number"]').type('1234567890');
  cy.get('#dateOfBirthInput').type('{selectall}May 11 1991{enter}');
  cy.get('#subjectsContainer').type('Maths{enter}Computer{enter}English{enter}');
  cy.get('[for="hobbies-checkbox-1"]').click();
  cy.get('[for="hobbies-checkbox-2"]').click();
  cy.get('[for="hobbies-checkbox-3"]').click();
  cy.get('[placeholder="Current Address"]').type('Ukraine, Kyiv');
  cy.get('[class=" css-yk16xz-control"]').contains('Select State').type('Haryana{enter}');
  cy.get('[class=" css-yk16xz-control"]').contains('Select City').type('Panipat{enter}');
  cy.get('[class="btn btn-primary"]').click();

  cy.contains('[class="modal-body"]', 'Raccoon').should('exist');
  cy.contains('[class="modal-body"]', 'City').should('exist');
  cy.contains('[class="modal-body"]', 'raccooncity@gmail.com').should('exist');
  cy.contains('[class="modal-body"]', 'Male').should('exist');
  cy.contains('[class="modal-body"]', '1234567890').should('exist');
  cy.contains('[class="modal-body"]', '11 May,1991').should('exist');
  cy.contains('[class="modal-body"]', 'Maths').should('exist');
  cy.contains('[class="modal-body"]', 'Computer').should('exist');
  cy.contains('[class="modal-body"]', 'English').should('exist');
  cy.contains('[class="modal-body"]', 'Sports').should('exist');
  cy.contains('[class="modal-body"]', 'Reading').should('exist');
  cy.contains('[class="modal-body"]', 'Music').should('exist');
  cy.contains('[class="modal-body"]', 'Ukraine, Kyiv').should('exist');
  cy.contains('[class="modal-body"]', 'Haryana').should('exist');
  cy.contains('[class="modal-body"]', 'Panipat').should('exist');
});

// Advanced level:
// Check next test cases:
// 1. Pagination
// 2. Rows count selection
// 3. Add new worker
// 4. Delete worker
// 5. Delete all workers
// 6. Find worker in search field and edit it
// 7. Validate data in worker row after creating worker
// 8. Check search by all column values
// https://demoqa.com/webtables

/// <reference types = "cypress" />

describe('Advanced level', () => {
  beforeEach('Precondition', () => {
    cy.visit('https://demoqa.com/webtables');
  });

  it('1. Pagination', () => {
    cy.contains('[class="-pagination"]', 'Page').should('exist');
  });

  it('2. Rows count selection', () => {
    cy.get('select').select('20 rows');
  });

  it('3. Add new worker', () => {
    cy.get('#addNewRecordButton').click();
    cy.get('[placeholder="First Name"]').type('Raccoon');
    cy.get('[placeholder="Last Name"]').type('City');
    cy.get('[placeholder="name@example.com"]').type('raccooncity@gmail.com');
    cy.get('[placeholder="Age"]').type('30');
    cy.get('[placeholder="Salary"]').type('100500');
    cy.get('[placeholder="Department"]').type('RaccoonCity');
    cy.get('#submit').click();
  });

  it('4. Delete worker', () => {
    cy.get('#delete-record-1').click();
  });

  it('5. Delete all workers', () => {
    cy.get('#delete-record-1').click();
    cy.get('#delete-record-2').click();
    cy.get('#delete-record-3').click();
  });

  it('6. Find worker in search field and edit it', () => {
    cy.get('[placeholder="Type to search"]').type('Alden');
    cy.get('#edit-record-2').click();
    cy.get('[placeholder="Salary"]').type('{selectall}15000');
    cy.get('#submit').click();
  });

  it('7. Validate data in worker row after creating worker', () => {
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('#addNewRecordButton').click();
    cy.get('[placeholder="First Name"]').type('Raccoon');
    cy.get('[placeholder="Last Name"]').type('City');
    cy.get('[placeholder="name@example.com"]').type('raccooncity@gmail.com');
    cy.get('[placeholder="Age"]').type('30');
    cy.get('[placeholder="Salary"]').type('100500');
    cy.get('[placeholder="Department"]').type('RaccoonCity');
    cy.get('#submit').click();

    cy.contains('[class="rt-tbody"]', 'Raccoon').should('exist');
    cy.contains('[class="rt-tbody"]', 'City').should('exist');
    cy.contains('[class="rt-tbody"]', 'raccooncity@gmail.com').should('exist');
    cy.contains('[class="rt-tbody"]', '30').should('exist');
    cy.contains('[class="rt-tbody"]', '100500').should('exist');
    cy.contains('[class="rt-tbody"]', 'RaccoonCity').should('exist');
  });

  it('8. Check search by all column values', () => {
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type('Cierra');
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type('Vega');
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type('39');
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type('cierra@example.com');
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type('10000');
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type('Insurance');
  });
});
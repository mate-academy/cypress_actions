// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

it('Registration form', () => {
  cy.visit('https://demoqa.com/automation-practice-form');
  cy.get('[placeholder="First Name"]').type('Alyona');
  cy.get('[placeholder="Last Name"]').type('Kobzieva');
  cy.get('[placeholder="name@example.com"]').type('alena123@mail.ua');
  cy.get('[class="custom-control custom-radio custom-control-inline"]').contains('Female').click();
  cy.get('[placeholder="Mobile Number"]').type('0681234567');
  cy.get('#dateOfBirthInput').type('{selectall}').type('11 Jan 2000').type('{enter}');;
  cy.get('#subjectsInput').type('Mat{enter}');
  cy.get('[class="custom-control custom-checkbox custom-control-inline"]').contains('Sports').click();
  cy.get('[placeholder="Current Address"]').type('Kyiv');
  cy.get('#react-select-3-input').type('U{enter}', {force: true});
  cy.get('#react-select-4-input').type('M{enter}', {force: true});
  cy.get('[type="submit"]').click();
});

it('Validate', () => {
  cy.get('[class="table-responsive"]').type('Alyona').should('exist');
  cy.get('[class="table-responsive"]').type('Kobzieva').should('exist');
  cy.get('[class="table-responsive"]').type('alena123@mail.ua').should('exist');
  cy.get('[class="table-responsive"]').type('Female').should('exist');
  cy.get('[class="table-responsive"]').type('0681234567').should('exist');
  cy.get('[class="table-responsive"]').type('11 Jan 2000').should('exist');
  cy.get('[class="table-responsive"]').type('Maths').should('exist');
  cy.get('[class="table-responsive"]').type('Sports').should('exist');
  cy.get('[class="table-responsive"]').type('Kyiv').should('exist');
  cy.get('[class="table-responsive"]').type('Uttar Predesh Merrut').should('exist');
});

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

describe('Advanced', () => {
  beforeEach('Open site', () => {
      cy.visit('https://demoqa.com/webtables');
  })
 

it('Pagination', () => {
  cy.get('[class="-pageInfo"]').contains('1').should('exist');
});

it('Rows count selection', () =>{
  cy.get('select').select('5 rows');
});

it('Add new worker', () => {
  cy.get('#addNewRecordButton').click();
  cy.get('[placeholder="First Name"]').type('Alyona');
  cy.get('[placeholder="Last Name"]').type('Kobzieva');
  cy.get('[placeholder="name@example.com"]').type('alyona12345@mail.ua');
  cy.get('[placeholder="Age"]').type('20');
  cy.get('[placeholder="Salary"]').type('500');
  cy.get('[placeholder="Department"]').type('Blabla');
  cy.get('[type="submit"').click();
});

it('Delete worker', () => {
  cy.contains('[role="row"]', 'Alden').find('[title="Delete"]').click();
});

it('Delete all worker', () => {
  cy.contains('[role="rowgroup"]', 'Alden').find('[title="Delete"]').click();
  cy.contains('[role="rowgroup"]', 'Cierra').find('[title="Delete"]').click();
  cy.contains('[role="rowgroup"]', 'Kierra').find('[title="Delete"]').click();
});

it('Find worker in search field and edit it', () => {
  cy.get('[placeholder="Type to search"]').type('Ci{enter}', {force: true});
  cy.get('[class="mr-2"]').click();
  cy.get('[placeholder="Age"]').type('{selectall}20');
  cy.get('[type="submit"]').click();
});

it(' Validate data in worker row after creating worker', () => {
  cy.get('#addNewRecordButton').click();
  cy.get('[placeholder="First Name"]').type('Alyona');
  cy.get('[placeholder="Last Name"]').type('Kobzieva');
  cy.get('[placeholder="name@example.com"]').type('alyona12345@mail.ua');
  cy.get('[placeholder="Age"]').type('20');
  cy.get('[placeholder="Salary"]').type('500');
  cy.get('[placeholder="Department"]').type('Blabla');
  cy.get('[type="submit"').click();

  cy.contains('[class="rt-tbody"]', 'Alyona').should('exist');
  cy.contains('[class="rt-tbody"]', 'Kobzieva').should('exist');
  cy.contains('[class="rt-tbody"]', 'alyona12345@mail.ua').should('exist');
  cy.contains('[class="rt-tbody"]', '20').should('exist');
  cy.contains('[class="rt-tbody"]', '500').should('exist');
  cy.contains('[class="rt-tbody"]', 'Blabla').should('exist');
});

it('Check search by all column values', () => {
    cy.get('[placeholder="Type to search"]').type('Cierra{enter}', {force: true});
    cy.get('[placeholder="Type to search"]').type('{selectall}Gentry', {force: true});
    cy.get('[placeholder="Type to search"]').type('{selectall}39', {force: true});
    cy.get('[placeholder="Type to search"]').type('{selectall}kierra@example.com', {force: true});
    cy.get('[placeholder="Type to search"]').type('{selectall}10000', {force: true});
    cy.get('[placeholder="Type to search"]').type('{selectall}Compliance', {force: true});
});

});
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

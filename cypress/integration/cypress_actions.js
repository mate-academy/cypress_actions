// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form
const TestData = {
  'First Name': 'Tania',
  'Last Name': 'Lastname',
  'Email': 'test@gmail.com',
  'Phone': '0123456789',
  'HB': '28 Oct 1990',
  'Address': 'Some Place ',
  'Salary': '500',
  'Age': '48',
  'Department': 'QA'
  };
 
it('Fill all fields', () => {
  cy.visit('https://demoqa.com/automation-practice-form');
  cy.get('#firstName').type(TestData['First Name']);
  cy.get('#lastName').type(TestData['Last Name']);
  cy.get('#userEmail').type(TestData['Email']);
  cy.get('[for="gender-radio-2"]').click();
  cy.get('#userNumber').type(TestData['Phone']);
  cy.get('#dateOfBirthInput').type('{selectall}').type(TestData['HB']).type('{enter}'); 
  cy.get('#subjectsContainer').type('Eng{Enter}');
  cy.get('[for="hobbies-checkbox-2"]').click();
  cy.get('#currentAddress').type(TestData['Address']);
  cy.get('.css-yk16xz-control').contains('Select State').type('n{enter}');
  cy.get('.css-yk16xz-control').contains('Select City').type('d{enter}'); 
  cy.get('.btn.btn-primary').click();

  cy.get('tbody > :nth-child(1)').contains(TestData['First Name']);
  cy.get('tbody > :nth-child(2)').contains(TestData['Email']);
  cy.get('tbody > :nth-child(3)').contains('Female');
  cy.get('tbody > :nth-child(4)').contains(TestData['Phone']);
  cy.get('tbody > :nth-child(5)').contains('28 October,1990');
  cy.get('tbody > :nth-child(6)').contains('English');
  cy.get('tbody > :nth-child(7)').contains('Reading');
  cy.get('tbody > :nth-child(9)').contains(TestData['Address']);  
  cy.get('tbody > :nth-child(10)').contains('NCR Delhi');
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

/*before (() => {cy.visit('https://demoqa.com/webtables');
});

it('1. Pagination',() => {
  cy.get('.-pageInfo').contains('1').should('exist');
});

it('2. Rows count selection', () => {
  cy.get('select').select('25 rows');
});

it('3. Add new worker', () => {
  cy.get('#addNewRecordButton').click();
  cy.get('[placeholder="First Name"]').type(TestData['First Name']);
  cy.get('[placeholder="Last Name"]').type(TestData['Last Name']);
  cy.get('[placeholder="name@example.com"]').type(TestData['Email']);
  cy.get('[placeholder="Age"]').type(TestData['Age']);
  cy.get('[placeholder="Salary"]').type(TestData['Salary']);
  cy.get('[placeholder="Department"]').type(TestData['Department']);
  cy.get('#submit').click();
});

it('4. Delete worker', () => {
  cy.get('#delete-record-4').click();
});

it('5. Delete all workers', () => {
  cy.get('#delete-record-1').click();
  cy.get('#delete-record-2').click();
  cy.get('#delete-record-3').click();
});

it('6. Find worker in search field and edit it', () => {
  cy.visit('https://demoqa.com/webtables');
  cy.get('[placeholder="Type to search"]').type('Kierra');
  cy.get('#edit-record-3').click();
  cy.get('[placeholder="name@example.com"]').type('{selectall}kierra1@google.com');
  cy.get('[placeholder="Salary"]').type('{selectall}1000');
  cy.get('#submit').click();
});

it('7. Validate data in worker row after creating worker', () => {
  cy.get('[placeholder="Type to search"]').clear();
  cy.get('#addNewRecordButton').click();
  cy.get('[placeholder="First Name"]').type(TestData['First Name']);
  cy.get('[placeholder="Last Name"]').type(TestData['Last Name']);
  cy.get('[placeholder="name@example.com"]').type(TestData['Email']);
  cy.get('[placeholder="Age"]').type(TestData['Age']);
  cy.get('[placeholder="Salary"]').type(TestData['Salary']);
  cy.get('[placeholder="Department"]').type(TestData['Department']);
  cy.get('#submit').click();

  cy.contains('[class="rt-tbody"]', TestData['First Name']).should('exist');
  cy.contains('[class="rt-tbody"]', TestData['Last Name']).should('exist');
  cy.contains('[class="rt-tbody"]', TestData['Age']).should('exist');
  cy.contains('[class="rt-tbody"]', TestData['Email']).should('exist');
  cy.contains('[class="rt-tbody"]', TestData['Salary']).should('exist');
  cy.contains('[class="rt-tbody"]', TestData['Department']).should('exist');
});

it('8. Check search by all column values', () => {
  cy.get('[placeholder="Type to search"]').clear();
  cy.get('[placeholder="Type to search"]').type(TestData['First Name']);
  cy.get('[placeholder="Type to search"]').clear();
  cy.get('[placeholder="Type to search"]').type(TestData['Last Name']);
  cy.get('[placeholder="Type to search"]').clear();
  cy.get('[placeholder="Type to search"]').type(TestData['Age']);
  cy.get('[placeholder="Type to search"]').clear();
  cy.get('[placeholder="Type to search"]').type(TestData['Email']);
  cy.get('[placeholder="Type to search"]').clear();
  cy.get('[placeholder="Type to search"]').type(TestData['Salary']);
  cy.get('[placeholder="Type to search"]').clear();
  cy.get('[placeholder="Type to search"]').type(TestData['Department']);
});
*/


// Basic level:
// 1. Fill all fields in forms except "picture" 

it('Fill all fields', () =>{
    cy.get('[placeholder="First Name"]').type('Natalia');
    cy.get('[placeholder="Last Name"]').type('Pashkovska');
    cy.get('[placeholder="name@example.com"]').type('pashkunya17@gmail.com');
    cy.get('[for="gender-radio-2"]').click();
    cy.get('[placeholder="Mobile Number"]').type('0678951865');
    cy.get('[#dateOfBirthInput]').type('{selectall}').type('17.05.1993').type('{enter}');
    cy.get('[#subjects-label]').type('Eng{enter}');
    cy.get('[custom-control custom-checkbox custom-control-inline]').click();
    cy.get('[placeholder="Current Address"]').type('Lviv');
    cy.get('["col-md-4 col-sm-12"]').type('NCR{enter}');
    cy.get('["col-md-4 col-sm-12"]').type('Del{enter}');

})

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

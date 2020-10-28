// Site: https://demoqa.com/automation-practice-form
/// <reference types="cypress" />

// Basic level:
describe ('cypress_action', () => {
        before(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
        });
        
      const TEST_DATA = {
        'First Name': 'Denis',
        'Last Name': 'Exampl',
        'Email': 'example123@gmail.com',
        'Phone': '1234567895',
        'HB': '23 Apr 1986',
        'Address': 'ARAMARK Ltd. 30 Commercial Road Fratton PORTSMOUTH Hampshire PO1 1AA UNITED KINGDOM'
        };

// 1. Fill all fields in forms except "picture"
    it('fill Up the form', () => {
        cy.get('#firstName').type(TEST_DATA['First Name']);
        cy.get('#lastName').type(TEST_DATA['Last Name']);
        cy.get('#userEmail').type(TEST_DATA['Email']);
        cy.get('[for="gender-radio-1"]').click();
        cy.get('#userNumber').type(TEST_DATA['Phone']);
        cy.get('#dateOfBirthInput').type('{selectall}').type(TEST_DATA['HB']).type('{enter}'); 
        cy.get('#subjectsContainer').type('Eng{Enter}')
        cy.get('[for="hobbies-checkbox-1"]').click();
        cy.get('#currentAddress').type(TEST_DATA['Address']);
        cy.get('.css-yk16xz-control').contains('Select State').type('r{enter}');
        cy.get('.css-yk16xz-control').contains('Select City').type('r{enter}'); 
    });

// 2. Click on [Submit] button
    it('submit', () => {
        cy.get('.btn.btn-primary').click();
    });

// 3. Validate inputed data in modal window
    it('validate data', () =>{
        cy.get('tbody > :nth-child(1)').contains('Denis Exampl');
        cy.get('tbody > :nth-child(2)').contains(TEST_DATA['Email']);
        cy.get('tbody > :nth-child(3)').contains('Male');
        cy.get('tbody > :nth-child(4)').contains(TEST_DATA['Phone']);
        cy.get('tbody > :nth-child(5)').contains('23 April,1986');
        cy.get('tbody > :nth-child(6)').contains('English');
        cy.get('tbody > :nth-child(7)').contains('Sports');
        cy.get('tbody > :nth-child(9)').contains(TEST_DATA['Address']);
        cy.get('tbody > :nth-child(10)').contains('NCR Gurgaon');
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
})

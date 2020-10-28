// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

describe('Basic level', () => {
    it('Fill the form', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('Bumzel');
        cy.get('#lastName').type('Bumzeliuk');
        cy.get('#userEmail').type('bumzel@gmail.com');
        cy.get('[for="gender-radio-3"]').click();
        cy.get('#userNumber').type('0661112233');
        cy.get('#dateOfBirthInput').type('{selectall}01 Jan 1900{enter}');
        cy.get('#subjectsContainer').type('English{Enter}');
        cy.get('[for="hobbies-checkbox-1"]').click();
        cy.get('#currentAddress').type('221B Baker str.');
        cy.get('#state').contains('Select State').type('utt{Enter}');
        cy.get('#city').contains('Select City').type('agr{Enter}');
        cy.get('#submit').click();
    });
    it('Modal window', () => {
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Bumzel Bumzeliuk');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('bumzel@gmail.com');
        cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Other');
        cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('0661112233');
        cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('01 January,1900');
        cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('English');
        cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Sports');
        cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('221B Baker str.');
        cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('Uttar Pradesh Agra');
    });
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

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

describe('Yurii Parfinenko Homework', () => {

    it ('Basic part', () => {

        cy.visit('automation-practice-form');

        cy.get('#firstName').type('Valera');
        cy.get('#lastName').type('Communist');
        cy.get('#userEmail').type('valeracommunist@mailinator.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#userNumber').type('3806755543');
        cy.get('#dateOfBirthInput').type('{selectAll} 03 Oct 1995 {enter}');
        cy.get('#subjectsContainer').type('Mathematics');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
        cy.get('#currentAddress').type('Rambler');
        cy.get('#state > .css-yk16xz-control').type('Rajasthan{enter}');
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type('Jaipur{enter}');
        cy.get('#submit').click();

        /* 
        And now we need to validate the data in the table
 
        By the way - I have ho idea how to select elements in this table to interact with them 
        so I had to use cypress names for elements 
        */

        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', 'Valera Communist');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', 'valeracommunist@mailinator.com');
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', '3806755543');
        cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', '03 October,1995');
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Music');
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', 'Rambler');
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'Rajasthan Jaipur');
    });

/*     it ('Advanced part', () => {

        cy.visit('webtables');

        // Row Count Selection

        cy.get('select').select('10 rows').type('{upArrow} {enter}');

        // Add A Few Workers
        // 1
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Valera');
        cy.get('#lastName').type('Communist');
        cy.get('#userEmail').type('Valera@mail.com');
        cy.get('#age').type('54');
        cy.get('#salary').type('1320');
        cy.get('#department').type('Valera');
        cy.get('#submit').click();

        // 2
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Valera1');
        cy.get('#lastName').type('Communist1');
        cy.get('#userEmail').type('Valera1@mail.com');
        cy.get('#age').type('54');
        cy.get('#salary').type('1320');
        cy.get('#department').type('Valera');
        cy.get('#submit').click();

        // 3
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Valera');
        cy.get('#lastName').type('Communist');
        cy.get('#userEmail').type('Valera@mail.com');
        cy.get('#age').type('54');
        cy.get('#salary').type('1320');
        cy.get('#department').type('Valera');
        cy.get('#submit').click();

        // Pagination 

        cy.get('.-next').click();

    }); */
});

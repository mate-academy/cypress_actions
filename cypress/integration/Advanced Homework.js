/// <reference types='cypress' />

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

describe('Advanced | Yurii Parfinenko', () => {

    const user = {
        firstName: 'Valera',
        lastName: 'Communist',
        age: '71',
        email: 'valeracommunist@mail.com',
        phoneNumber: '0675554367',
        dateOfBirth: '03 October,1995',
        Subject: 'Mathematics',
        address: 'Rambler',
        department: 'Valera',
        salary: '80450',
        country: 'Rajasthan',
        city: 'Jaipur'
    };

    it ('Select 5 rows', () => {
        cy.selectRows(5);
    });

    it ('Add Workers and Check Pagination', () => {
        cy.selectRows(5);
        cy.addWorkers(6);
        cy.get('.-next').click();
        cy.get('.-previous').click();
    });

    it ('Edit records', () => {
        cy.selectRows(5);

        for (let i = 1; i <= 3; i++) {
            cy.get('#delete-record-' + i).click();
            };

        cy.addWorkers(3);

        for (let i = 3; i >= 1; i--) {

            cy.get('#searchBox').type('{selectAll}Valera');
            cy.get('#edit-record-' + i).click();
            cy.get('#firstName').type('{selectAll}' + user.firstName + (i+10));
            cy.get('#lastName').type('{selectAll}' + user.lastName + (i+10));
            cy.get('#userEmail').type('{selectALL}Valera' + (i+10) + '@mail.com');
            cy.get('#submit').click();
            };
    });

    it ('Delete Records', () => {
        cy.selectRows(5);

        for (let i = 1; i <= 3; i++) {
            cy.get('#delete-record-' + i).click();
            };
    });

    it ('Validate Data In Worker Row after creating a worker', () => {
        cy.selectRows(5);
        cy.addWorkers(1);
        cy.recordValidation();
    });

    it ('Check search by all collumns', () => {
        cy.selectRows(5);

        for (let i = 1; i <= 3; i++) {
            cy.get('#delete-record-' + i).click();
            };

        cy.addWorkers(1);
        cy.searchByColumn();
    });
});

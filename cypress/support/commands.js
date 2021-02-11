// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

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

Cypress.Commands.add('registration', () => {
    cy.visit('automation-practice-form');
    
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}' + user.dateOfBirth + '{enter}');
    cy.get('#subjectsContainer').type('Che{downArrow}{enter}');
    cy.get('#hobbies-checkbox-3').click({ force : true });  
    cy.get('#currentAddress').type(user.address);
    cy.get('#state > .css-yk16xz-control').type(user.country + '{enter}');
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type(user.city + '{enter}');
    cy.get('#submit').click();
});

Cypress.Commands.add('validation', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', user.firstName + ' ' + user.lastName);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', user.phoneNumber);
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', user.dateOfBirth);
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Music');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', user.address);
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', user.country + ' ' + user.city);
});

Cypress.Commands.add('addWorkers', (numberOfWorkers) => {
    for (let i = 1; i <= numberOfWorkers; i++) {
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type(user.firstName + i);
        cy.get('#lastName').type(user.lastName + i);
        cy.get('#userEmail').type(i + user.email);
        cy.get('#age').type(user.age);
        cy.get('#salary').type(user.salary);
        cy.get('#department').type(user.department);
        cy.get('#submit').click();
        };
});

Cypress.Commands.add('searchByColumn', () => {
    cy.get('#searchBox').type(user.firstName);
    cy.get(':nth-child(1) > .rt-tr > :nth-child(1)').should('contain', user.firstName);
    cy.get('#searchBox').type('{selectAll}' + user.lastName);
    cy.get(':nth-child(1) > .rt-tr > :nth-child(1)').should('contain', user.firstName);
    cy.get('#searchBox').type('{selectAll}' + user.age);
    cy.get(':nth-child(1) > .rt-tr > :nth-child(1)').should('contain', user.firstName);
    cy.get('#searchBox').type('{selectAll}' + user.email);
    cy.get(':nth-child(1) > .rt-tr > :nth-child(1)').should('contain', user.firstName);
    cy.get('#searchBox').type('{selectAll}' + user.salary);
    cy.get(':nth-child(1) > .rt-tr > :nth-child(1)').should('contain', user.firstName);
    cy.get('#searchBox').type('{selectAll}' + user.department);
    cy.get(':nth-child(1) > .rt-tr > :nth-child(1)').should('contain', user.firstName);
});

Cypress.Commands.add('selectRows', (numberOfRows) => {
    
    cy.visit('webtables');

    cy.get('select').select(numberOfRows + ' rows');
});

Cypress.Commands.add('validation', () => {
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('contain', user.firstName);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('contain', user.lastName);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(3)').should('contain', user.age);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('contain', 1 + user.email);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('contain', user.salary);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('contain', user.department);
});
// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form
/// <reference types="cypress" />
describe('Basic level', () => {
    before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Fill the fields', () => {
    cy.get('[placeholder="First Name"]').type('Zolton');
    cy.get('[placeholder="Last Name"]').type('Baron');
    cy.get('[placeholder="name@example.com"]').type('Zolton@cigan.com');
    cy.get('#genterWrapper >.col-md-9>:nth-child(1)>.custom-control-label').click();
    cy.get('[placeholder="Mobile Number"]').type('3809666');
    cy.get('#dateOfBirthInput').type('{selectall}').type('11 Sep 1989').type('{enter}');
    cy.get('.subjects-auto-complete__value-container').type('English{enter}');
    cy.get('#hobbiesWrapper>.col-md-9>:nth-child(1)>.custom-control-label').click();
    cy.get('[id="currentAddress"]').type('Baba yoga{enter}');
    cy.get('[class=" css-yk16xz-control"]').contains('Select State').type('NCR{enter}');
    cy.get('[class=" css-yk16xz-control"]').contains('Select City').type('Noida{enter}');
    cy.get('[class="btn btn-primary"]').click();
    });

    it('Validate input data', () => {
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Zolton Baron').should('exist');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('Zolton@cigan.com').should('exist');
        cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Male').should('exist');
        cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('3809666').should('exist');
        cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('11 September,1989').should('exist');
        cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('English').should('exist');
        cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Sports').should('exist');
        cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('Baba yoga').should('exist');
        cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('NCR Noida').should('exist');
    })

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

describe('Advanced level', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/webtables');
    });

    it('Pagination', () => {
        cy.get('.-pageInfo').contains('1');
    });

    it('Rows count selection', () => {
        cy.get('select').select('10 rows');
    });

    it('Add new worker', () => {
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Lola');
        cy.get('#lastName').type('Kiska');
        cy.get('#userEmail').type('dodik@shmodik.com')
        cy.get('#age').type('31');
        cy.get('#salary').type('160000');
        cy.get('#department').type('QA')
        cy.get('#submit').click();

    });

    it('Delete worker', () => {
        cy.get('#delete-record-1 > svg > path').click();
    })

    it('Delete all worker', () => {
        cy.get('#delete-record-1 > svg > path').click();
        cy.get('#delete-record-2 > svg > path').click();
        cy.get('#delete-record-3 > svg > path').click();
    })

    it('Find worker in search field and edit it', () => {
        cy.get('#searchBox').type('Kierra{enter}');
        cy.get('#edit-record-3 > svg > path').click();
        cy.get('#lastName').type('{selectall}').type('Zhuzhuka');
        cy.get('#submit').click();
        
    });

    it('Validate data in worker row after creating worker', () => {
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Lola');
        cy.get('#lastName').type('Kiska');
        cy.get('#userEmail').type('dodik@shmodik.com')
        cy.get('#age').type('31');
        cy.get('#salary').type('160000');
        cy.get('#department').type('QA')
        cy.get('#submit').click();
        cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').contains('Lola');
    });

    it('Check search by all column values', () => {
        cy.get('#searchBox').type('Kierra{enter}');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains('Kierra').should('exist');
        cy.get('#searchBox').type('{selectall}').type('Vega{enter}');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)').contains('Vega').should('exist');
        cy.get('#searchBox').type('{selectall}').type('45{enter}');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').contains('45').should('exist');
        cy.get('#searchBox').type('{selectall}').type('alden@example.com{enter}');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)').contains('alden@example.com').should('exist');
        cy.get('#searchBox').type('{selectall}').type('12000{enter}');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(5)').contains('12000').should('exist');
        cy.get('#searchBox').type('{selectall}').type('Insurance{enter}');
        cy.get('.rt-table').contains('Insurance').should('exist');
    });




});
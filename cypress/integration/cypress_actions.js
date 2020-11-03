// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

it('Sign up form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('Tom');
    cy.get('#lastName').type('Smith');
    cy.get('#userEmail').type('tomsmith@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').click();
    cy.get('#userNumber').type('3809765432');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__month-select').select('January');
    cy.get(':nth-child(1) > .react-datepicker__day--001').click();
    cy.get('.subjects-auto-complete__value-container').type('English{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#currentAddress').type('Ukraine, Kyiv, Borschahivka 37');
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('NCR{enter}');
    cy.get('#stateCity-wrapper > :nth-child(3)').type('Delhi{enter}');

    cy.get('#submit').click();
});

it('Validate the data', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Tom Smith');
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('tomsmith@gmail.com');
    cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('3809765432');
    cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('01 January,2000');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('English');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Reading');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('Ukraine, Kyiv, Borschahivka 37');
    cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('NCR Delhi');
});
// Site: https://demoqa.com/automation-practice-form
/// <reference types="cypress" />

// Basic level:

describe('Basic', () => {
    before('Open site', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    const TEST_DATA = {
        'First Name': 'Eugene',
        'Last Name': 'Fadeev',
        'Email': 'example@gmail.com',
        'Phone': '1234567890',
        'HB': '06 Feb 1995',
        'Address': 'Finland, JYVASKYLA, Kangasmoisionkatu 30' 
        };
    
    it('Fill in the fields', () => {        
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

    it('submit', () => {
        cy.get('.btn.btn-primary').click();
    });

    it('validate data', () =>{
        cy.get('tbody > :nth-child(1)').contains('Eugene Fadeev');
        cy.get('tbody > :nth-child(2)').contains(TEST_DATA['Email']);
        cy.get('tbody > :nth-child(3)').contains('Male');
        cy.get('tbody > :nth-child(4)').contains(TEST_DATA['Phone']);
        cy.get('tbody > :nth-child(5)').contains('06 February,1995');
        cy.get('tbody > :nth-child(6)').contains('English');
        cy.get('tbody > :nth-child(7)').contains('Sports');
        cy.get('tbody > :nth-child(9)').contains(TEST_DATA['Address']);
        cy.get('tbody > :nth-child(10)').contains('NCR Gurgaon');
    });
})
// Basic level:
// 1. Fill all fields in forms except "picture" 

it('Fill all fields', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('[placeholder="First Name"]').type('Natalia');
    cy.get('[placeholder="Last Name"]').type('Pashkovska');
    cy.get('[placeholder="name@example.com"]').type('pashkunya17@gmail.com');
    cy.get('[for="gender-radio-2"]').click();
    cy.get('[placeholder="Mobile Number"]').type('0678951865');
    cy.get('#dateOfBirthInput').type('{selectall}').type('17 May 1993').type('{enter}');
    cy.get('#subjectsInput').type('Eng{enter}');
    cy.get('#hobbies-checkbox-2').click({force: true});
    cy.get('[placeholder="Current Address"]').type('Lviv');
    cy.get('[class=" css-yk16xz-control"]').contains('Select State').type('NCR{enter}')
    cy.get('[class=" css-yk16xz-control"]').contains('Select City').type('Del{enter}');
    
});

// // 2. Click on [Submit] button

it('Click a submit button', () => {
    cy.get('[class="btn btn-primary"]').click();
});
// // 3. Validate inputed data in modal window

it('Validate inputed data', () => {
cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Natalia Pashkovska').should('exist')
cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('pashkunya17@gmail.com').should('exist')
cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Female').should('exist')
cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('0678951865').should('exist')
cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('17 May,1993').should('exist')
cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('English').should('exist')
cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Reading').should('exist')
cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('Lviv').should('exist')
cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('NCR Delhi').should('exist')
 }); 

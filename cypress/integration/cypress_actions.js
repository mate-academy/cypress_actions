// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

it('Student_Registration_Form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('Olena');
    cy.get('#lastName').type('Kamen');  
    cy.get('#userEmail').type('ok@gmail.com');   
    cy.get('[class="col-md-9 col-sm-12"]').contains('Female').click();
    cy.get('#userNumber').type('952252255');
    cy.get('#dateOfBirthInput').type('{selectall}28 September,1950{enter}');
    cy.get('#subjectsContainer').type('Math{enter}');   
    cy.get('[class="col-md-9 col-sm-12"]').contains('Sports').click();
    cy.get('#currentAddress').type('Kharkiv, Ukraine, Pushkinska str');   
    cy.get('#state').contains('Select State').type('NCR{enter}');
    cy.get('#city').contains('Select City').type('Delhi{enter}');
    cy.get('[class="btn btn-primary"]').click();
});

it ('Check_list', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Olena Kamen').should('exist')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('ok@gmail.com').should('exist')
    cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Female').should('exist')
    cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('952252255').should('exist')
    cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('28 September,1950').should('exist')
    cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('Math').should('exist')
    cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Sports').should('exist')
    cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('Kharkiv, Ukraine, Pushkinska str').should('exist')
    cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('NCR Delhi').should('exist')
     });

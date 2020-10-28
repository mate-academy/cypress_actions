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
    cy.get('#userNumber').type('380952252255');
    cy.get('#dateOfBirthInput').type('{selectall}28 sept 1950{enter}');
    cy.get('#subjectsContainer').type('Math{enter}');   
    cy.get('[class="col-md-9 col-sm-12"]').contains('Sports').click();
    cy.get('#currentAddress').type('Kharkiv, Ukraine, Pushkinska str');   
    cy.get('#state').contains('Select State').type('NCR{enter}');
    cy.get('#city').contains('Select City').type('Delhi{enter}');
    cy.get('[class="btn btn-primary"]').click();
});
    
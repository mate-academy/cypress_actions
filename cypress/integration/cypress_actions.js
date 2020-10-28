// Basic level:
// 1. Fill all fields in forms except "picture" 


///<reference types = "cypress"/> 

it('Student Registration Form', ()=>{
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('[placeholder="First Name"]').type('Keaton');

    cy.get('[placeholder="Last Name"]').type('Saunders');

    cy.get('[placeholder="name@example.com"]').type('nukoxavaga@mailinator.com');

    cy.get('.custom-control-label').contains('Male').click();

    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click().get('.react-datepicker__month-select').select('5').get('.react-datepicker__year-select').select('1999').get('.react-datepicker__day--018').click();
    
    cy.get('.subjects-auto-complete__value-container').type('English\n Maths\n');

    cy.get('.custom-control-inline').contains('Music').click();
    
    cy.get('#currentAddress').type('Quia nulla officia v 25');
    
    cy.get('.css-yk16xz-control').contains('Select State').type('n\n');
    
    cy.get('.css-yk16xz-control').contains('Select City').type('a\n');

})


    // 2. Click on [Submit] button

    it('submit', () => {
        cy.get('.btn.btn-primary').click();
    });


// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

it('validate data', () =>{
    cy.get('tbody > :nth-child(1)').contains('Keaton');
    cy.get('tbody > :nth-child(2)').contains('nukoxavaga@mailinator.com');
    cy.get('tbody > :nth-child(3)').contains('Male');
    cy.get('tbody > :nth-child(4)').contains('1234567890');
    cy.get('tbody > :nth-child(5)').contains('18 June,1999');
    cy.get('tbody > :nth-child(6)').contains('English, Maths');
    cy.get('tbody > :nth-child(7)').contains('Music');
    cy.get('tbody > :nth-child(9)').contains('Quia nulla officia v 25');
    cy.get('tbody > :nth-child(10)').contains('NCR Gurgaon');
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




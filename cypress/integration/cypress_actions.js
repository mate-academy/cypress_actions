// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form



// describe('Basic level', () => {
//     it('Fill the form', () => {
//         cy.visit('https://demoqa.com/automation-practice-form');
//         cy.get('#firstName').type('Bumzel');
//         cy.get('#lastName').type('Bumzeliuk');
//         cy.get('#userEmail').type('bumzel@gmail.com');
//         cy.get('[for="gender-radio-3"]').click();
//         cy.get('#userNumber').type('0661112233');
//         cy.get('#dateOfBirthInput').type('{selectall}01 Jan 1900{enter}');
//         cy.get('#subjectsContainer').type('English{enter}');
//         cy.get('[for="hobbies-checkbox-1"]').click();
//         cy.get('#currentAddress').type('221B Baker str.');
//         cy.get('#state').contains('Select State').type('utt{enter}');
//         cy.get('#city').contains('Select City').type('agr{enter}');
//         cy.get('#submit').click();
//     });
    // it('Modal window', () => {
    //     cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Bumzel Bumzeliuk');
    //     cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('bumzel@gmail.com');
    //     cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Other');
    //     cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('0661112233');
    //     cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('01 January,1900');
    //     cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('English');
    //     cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Sports');
    //     cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('221B Baker str.');
    //     cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('Uttar Pradesh Agra');
    // });
// });

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

    // describe('Advanced level', () => {
    //     before (() => {
    //         cy.visit('https://demoqa.com/webtables');
    //     });
        
    //     it('Pagination',() => {
    //         cy.get('.-pageInfo').contains('1').should('exist');
    //     });
        
    //     it('Rows', () => {
    //         cy.get('select[aria-label="rows per page"]').select('5 rows');
    //         cy.get('select[aria-label="rows per page"]').contains('5 rows').should('exist');
    //     })
        
    //     it('New worker', () =>{
    //         cy.get('#addNewRecordButton').click();
    //         cy.get('#firstName').type('Sherlock');
    //         cy.get('#lastName').type('Holmes');
    //         cy.get('#userEmail').type('test@gmail.com');
    //         cy.get('#age').type('40');
    //         cy.get('#salary').type('1000000');
    //         cy.get('#department').type('Investigations');

    //         cy.get('#submit').click();
    //     });
        
    //     it('Validate data in worker row after creating worker', () => {
    //         cy.get('.rt-td').contains('Sherlock').should('exist');
    //         cy.get('.rt-td').contains('Holmes').should('exist');
    //         cy.get('.rt-td').contains('40').should('exist');
    //         cy.get('.rt-td').contains('test@gmail.com').should('exist');
    //         cy.get('.rt-td').contains('1000000').should('exist');
    //         cy.get('.rt-td').contains('Investigations').should('exist');
    //     });
        
    //     it('Find worker in search field and edit it', () => {
    //         cy.get('#searchBox').type('ald{enter}');
    //         cy.contains('.rt-tr.-odd', 'Alden').find('#edit-record-2').click();

    //         cy.get('#firstName').clear().type('John');
    //         cy.get('#lastName').clear().type('Watson');
    //         cy.get('#department').clear().type('Investigations');

    //         cy.get('#submit').click();
    //     });
    
    //     it('Check search by all column values', () => {
    //             cy.get('#searchBox').clear().type('she');
    //             cy.contains('.rt-tr.-odd', 'Sherlock').should('exist');
    //             cy.get('#searchBox').clear().type('gen');
    //             cy.contains('.rt-tr.-odd', 'Gentry').should('exist');
    //             cy.get('#searchBox').clear().type('39');
    //             cy.contains('.rt-tr.-odd', '39').should('exist');
    //             cy.get('#searchBox').clear().type('alden@');
    //             cy.contains('.rt-tr.-odd', 'alden@example.com').should('exist');
    //             cy.get('#searchBox').clear().type('10000');
    //             cy.contains('.rt-tr.-odd', '10000').should('exist');
    //             cy.get('#searchBox').clear().type('ins');
    //             cy.contains('.rt-tr.-odd', 'Insurance').should('exist');
    //             cy.get('#searchBox').clear();
    //     });


    //     it('Delete all workers', () => {
    //         let delArr = Array.from({length:4},(v,k)=>k+1)
    //         cy.wrap(delArr).each((index) => {
    //             cy.get("#delete-record-" + index).click()
    //         });
    //     });

    // });




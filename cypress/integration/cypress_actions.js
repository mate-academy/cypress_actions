/// <reference types="cypress" />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

it('Fields filling', () => {
    cy.visit('https://demoqa.com/automation-practice-form') 
    cy.get('#firstName').type('test namme')
    cy.get('#lastName').type('Test name')
    cy.get('#userEmail').type('test@mail.com')
    cy.get('[for="gender-radio-3"]').click();
    cy.get('#userNumber').type('12345678')
    cy.get('#dateOfBirthInput').type('{selectall}').type('12.21.1992').type('{enter}');
    cy.get('#subjectsContainer').type('text for subject container')
    cy.get('[for="hobbies-checkbox-3"]').click()
    cy.get('[for="hobbies-checkbox-1"]').click()
    cy.get('[for="hobbies-checkbox-2"]').click()
     cy.get('[id="currentAddress"]').type('Fastiv')
     cy.get('[id="stateCity-wrapper"]').click().type('{enter}')
     cy.get('[class="modal-body"]').contains('test namme').should('exist')
     cy.get('[class="modal-body"]').contains('Test name').should('exist')
     cy.get('[class="modal-body"]').contains('test@mail.com').should('exist')
     cy.get('[class="modal-body"]').contains('Other').should('exist')
     cy.get('[class="modal-body"]').contains('12345678').should('exist')
     cy.get('[class="modal-body"]').contains('12345678').should('exist')
     cy.get('[class="modal-body"]').contains('Fastiv').should('exist')
     cy.get('[class="modal-body"]').contains('Sports').should('exist')
     cy.get('[class="modal-body"]').contains('Reading').should('exist')
     cy.get('[class="modal-body"]').contains('Music').should('exist')
});


// Advanced level:
// Check next test cases:
// 1. Pagination 



describe('desc_title', () => {
    beforeEach('Go to precon', () => {
        cy.visit('https://demoqa.com/webtables')
        
      })


  it('Pagination',  () => {
    cy.get('[class="-pagination"]').should('exist')
  })




// // 2. Rows count selection

it('Rows count selection',  () => {
  cy.get('select').select('20 rows')
})

// // 3. Add new worker
it('Add new worker',  () => {
    cy.get('[id="addNewRecordButton"]').click()
    cy.get('#firstName').type('test namme')
    cy.get('#lastName').type('Test lastname')
    cy.get('#salary').type('700')
    cy.get('#department').type('some department')
    cy.get('#userEmail').type('test@mail.com')
    cy.get('#age').type('25')
    cy.get('[id="submit"]').click();

})
// // 4. Delete worker
it('Delete worker', () => {
  cy.get('[id="delete-record-1"]').click();


})
// // 5. Delete all worker
it('Delete worker', () => {
  cy.get('[id="delete-record-1"]').click();
  cy.get('[id="delete-record-2"]').click();
  cy.get('[id="delete-record-3"]').click();
})
// 6. Find worker in search field and edit it
it('Search', () => {
  cy.get('[id="edit-record-2"]').click();
  cy.get('#firstName').type('{selectall}test namme')
  cy.get('#lastName').type('{selectall}Test lastname')
  cy.get('#salary').type('{selectall}700')
  cy.get('#department').type('{selectall}some department')
  cy.get('#userEmail').type('{selectall}test@mail.com')
  cy.get('#age').type('{selectall}25')
  cy.get('[id="submit"]').click();
})


// 7. Validate data in worker row after creating worker
it('Add new worker',  () => {
     cy.get('[id="addNewRecordButton"]').click()
     cy.get('#firstName').type('test namme')
     cy.get('#lastName').type('Test lastname')
     cy.get('#salary').type('700')
     cy.get('#department').type('some department')
     cy.get('#userEmail').type('test@mail.com')
     cy.get('#age').type('25')
     cy.get('[id="submit"]').click();
     cy.get('[class="rt-tr -even"]').contains('test namme').should('exist')
     cy.get('[class="rt-tr -even"]').contains('Test lastname').should('exist')
     cy.get('[class="rt-tr -even"]').contains('test@mail.com').should('exist')
     cy.get('[class="rt-tr -even"]').contains('700').should('exist')
     cy.get('[class="rt-tr -even"]').contains('some department').should('exist')
     cy.get('[class="rt-tr -even"]').contains('25').should('exist')

      
  })
// 8. Check search by all column values
it('8. Check search by all column values', () => {
  cy.get('[placeholder="Type to search"]').clear()
  cy.get('[placeholder="Type to search"]').type('Cierra')
  cy.get('[placeholder="Type to search"]').clear()
  cy.get('[placeholder="Type to search"]').type('Vega')
  cy.get('[placeholder="Type to search"]').clear()
  cy.get('[placeholder="Type to search"]').type('39')
  cy.get('[placeholder="Type to search"]').clear()
  cy.get('[placeholder="Type to search"]').type('cierra@example.com')
  cy.get('[placeholder="Type to search"]').clear()
  cy.get('[placeholder="Type to search"]').type('10000')
  cy.get('[placeholder="Type to search"]').clear()
  cy.get('[placeholder="Type to search"]').type('Insurance')
    })
  });
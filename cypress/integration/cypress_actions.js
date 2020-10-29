
// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

// describe ('Working with student registation form', () => {

  it ('Fill all fields in forms except "picture"', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('[placeholder="First Name"]').type('testdima')
    cy.get('[placeholder="Last Name"]').type('testgood')
    cy.get('[placeholder="name@example.com"]').type('test@test.com.mate')
    cy.get('[class="custom-control custom-radio custom-control-inline"]').contains('Male').click()
    cy.get('[placeholder="Mobile Number"]').type('12345678')
    cy.get('[id="dateOfBirthInput"]').type('{selectall}').type('28 Oct 1987').type('{enter}') 
    cy.get('[class="subjects-auto-complete__control css-yk16xz-control"]').type('Math').type('Math{enter}')
    cy.get('[for="hobbies-checkbox-1"]').click()
    cy.get('[placeholder="Current Address"]').type('{selectall}').type('testAddress').type('{enter}') 
    cy.get('[class=" css-yk16xz-control"]').type('NCR{enter}')
    cy.get('[class=" css-yk16xz-control"]').type('Delhi{enter}')
    cy.get('[type="submit"]').click()
    
    })
    //
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
    

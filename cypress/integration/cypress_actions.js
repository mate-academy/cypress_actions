
// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

// describe ('Working with student registation form', () => {

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
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('testdima testgood')
    
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('test@test.com.mate')
    cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Male')
    cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('12345678')
    cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('28 October,1987')
    cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('Maths')
    cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Sports')
    cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('testAddress')
    cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('NCR Delhi')
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
    

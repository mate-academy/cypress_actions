// Basic level:
// 1. Fill all fields in forms except "picture" 


///<reference types = "cypress"/> 



const testData = {
    'First Name': 'Keaton',
    'Last Name': 'Saunders',
    'Email': 'nuko@mailinator.com',
    'userNumber': '1234567890',
    'Age': '35',
    'Salary': '500000',
    'Department': 'superDepartment',
    'Adress': 'Quia nulla officia v 25'
    };

it('Student Registration Form', ()=>{
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('[placeholder="First Name"]').type(testData['First Name']);
    cy.get('[placeholder="Last Name"]').type(testData['Last Name']);
    cy.get('[placeholder="name@example.com"]').type(testData['Email']);
    cy.get('.custom-control-label').contains('Male').click();
    cy.get('#userNumber').type(testData['userNumber']);
    cy.get('#dateOfBirthInput').click().get('.react-datepicker__month-select').select('5').get('.react-datepicker__year-select').select('1999').get('.react-datepicker__day--018').click();    
    cy.get('.subjects-auto-complete__value-container').type('English\n Maths\n');
    cy.get('.custom-control-inline').contains('Music').click();    
    cy.get('#currentAddress').type(testData['Adress']);    
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
    cy.get('tbody > :nth-child(1)').contains(testData['First Name']);
    cy.get('tbody > :nth-child(2)').contains(testData['Email']);
    cy.get('tbody > :nth-child(3)').contains('Male');
    cy.get('tbody > :nth-child(4)').contains(testData['userNumber']);
    cy.get('tbody > :nth-child(5)').contains('18 June,1999');
    cy.get('tbody > :nth-child(6)').contains('English, Maths');
    cy.get('tbody > :nth-child(7)').contains('Music');
    cy.get('tbody > :nth-child(9)').contains(testData['Adress']);
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


  it('1. Pagination', () => {
    cy.visit('https://demoqa.com/webtables');
    cy.contains('.-pagination', 'Page').should('exist');
  });

  it('2. Rows count selection', () => {
    cy.get('select').select('25 rows');
  });

  it('3. Add new worker', () => {
    cy.get('#addNewRecordButton').click();
    cy.get('[placeholder="First Name"]').type(testData['First Name']);
    cy.get('[placeholder="Last Name"]').type(testData['Last Name']);
    cy.get('[placeholder="name@example.com"]').type(testData['Email']);
    cy.get('[placeholder="Age"]').type(testData['Age']);
    cy.get('[placeholder="Salary"]').type(testData['Salary']);
    cy.get('[placeholder="Department"]').type(testData['Department']);
    cy.get('#submit').click();
  });

  it('4. Delete worker', () => {
    cy.get('#delete-record-4').click();
  });
  
  it('5. Delete all workers', () => {
    cy.get('#delete-record-1').click();
    cy.get('#delete-record-2').click();
    cy.get('#delete-record-3').click();
  });

  it('6. Find worker in search field and edit it', () => {
    cy.visit('https://demoqa.com/webtables');
    cy.get('[placeholder="Type to search"]').type('Kierra');
    cy.get('#edit-record-3').click();
    cy.get('[placeholder="name@example.com"]').type('{selectall}kierra1@google.com');
    cy.get('[placeholder="Salary"]').type('{selectall}15000');
    cy.get('#submit').click();
  });

  it('7. Validate data in worker row after creating worker', () => {
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('#addNewRecordButton').click();
    cy.get('[placeholder="First Name"]').type(testData['First Name']);
    cy.get('[placeholder="Last Name"]').type(testData['Last Name']);
    cy.get('[placeholder="name@example.com"]').type(testData['Email']);
    cy.get('[placeholder="Age"]').type(testData['Age']);
    cy.get('[placeholder="Salary"]').type(testData['Salary']);
    cy.get('[placeholder="Department"]').type(testData['Department']);
    cy.get('#submit').click();

    cy.contains('[class="rt-tbody"]', testData['First Name']).should('exist');
    cy.contains('[class="rt-tbody"]', testData['Last Name']).should('exist');
    cy.contains('[class="rt-tbody"]', testData['Age']).should('exist');
    cy.contains('[class="rt-tbody"]', testData['Email']).should('exist');
    cy.contains('[class="rt-tbody"]', testData['Salary']).should('exist');
    cy.contains('[class="rt-tbody"]', testData['Department']).should('exist');
  });

  it('8. Check search by all column values', () => {
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type(testData['First Name']);
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type(testData['Last Name']);
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type(testData['Age']);
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type(testData['Email']);
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type(testData['Salary']);
    cy.get('[placeholder="Type to search"]').clear();
    cy.get('[placeholder="Type to search"]').type(testData['Department']);
  });


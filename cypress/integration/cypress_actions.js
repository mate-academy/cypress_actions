// Site: https://demoqa.com/automation-practice-form
/// <reference types="cypress" />

// Basic level:
describe ('cypress_action', () => {
        before(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
        });
        
      const TEST_DATA = {
        'First Name': 'Denis',
        'Last Name': 'Exampl',
        'Email': 'example123@gmail.com',
        'Phone': '1234567895',
        'HB': '23 Apr 1986',
        'Address': 'ARAMARK Ltd. 30 Commercial Road Fratton PORTSMOUTH Hampshire PO1 1AA UNITED KINGDOM'
        };

// 1. Fill all fields in forms except "picture"
    it('fill Up the form', () => {
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

// 2. Click on [Submit] button
    it('submit', () => {
        cy.get('.btn.btn-primary').click();
    });

// 3. Validate inputed data in modal window
    it('validate data', () =>{
        cy.get('tbody > :nth-child(1)').contains('Denis Exampl');
        cy.get('tbody > :nth-child(2)').contains(TEST_DATA['Email']);
        cy.get('tbody > :nth-child(3)').contains('Male');
        cy.get('tbody > :nth-child(4)').contains(TEST_DATA['Phone']);
        cy.get('tbody > :nth-child(5)').contains('23 April,1986');
        cy.get('tbody > :nth-child(6)').contains('English');
        cy.get('tbody > :nth-child(7)').contains('Sports');
        cy.get('tbody > :nth-child(9)').contains(TEST_DATA['Address']);
        cy.get('tbody > :nth-child(10)').contains('NCR Gurgaon');
    });
});

// Advanced level:
// Check next test cases:
describe ('advanced_cypress_action', () => {
    before(() => {
        cy.visit('https://demoqa.com/webtables');
    });

    let TEST_DATA2 = {
        FirstName: ['John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel'],
        LastName: ['Akers', 'Akes', 'Akey', 'Alan', 'Alban', 'Albert', 'Alberts', 'Albin', 'Alborn', 'Albright', 'Albro', 'Albury', 'Alcock'],
        Email: 'example',
        Age: 25,
        Salary: 100,
        Department: [ 'Production', 'Research and Development', 'Purchasing', 'Marketing', 'Human Resource', 'Accounting and Finance']
    };
        
    Cypress.Commands.add('AddNewUser', (num) => {
        for (let i = 0; i <= num; i++){   
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName.mr-sm-2.form-control').type(TEST_DATA2.FirstName[Math.floor(Math.random() * TEST_DATA2.FirstName.length)]);
        cy.get('#lastName.mr-sm-2.form-control').type(TEST_DATA2.LastName[Math.floor(Math.random() * TEST_DATA2.LastName.length)]);
        cy.get('#userEmail.mr-sm-2.form-control').type(TEST_DATA2['Email'] + Math.floor(Math.random() * 100) + '@gmail.com');
        cy.get('#age.mr-sm-2.form-control').type(TEST_DATA2['Age'] + Math.floor(Math.random() * 10));
        cy.get('#salary.mr-sm-2.form-control').type(TEST_DATA2['Salary'] + Math.floor(Math.random() * 10000));
        cy.get('#department.mr-sm-2.form-control').type(TEST_DATA2.Department[Math.floor(Math.random() * TEST_DATA2.Department.length)]);
        cy.get('#submit.btn.btn-primary').click();
        }});
    
    Cypress.Commands.add('DelWorker', (WorkerNum) => {
        let i = 2;
        
        for ( i; i <= WorkerNum; i++){
        let n = '#delete-record-'+i;
        cy.get(n).click();
    }});
        

// 1. Pagination
    it ('Pagination', () => {
        cy.AddNewUser(2);
        cy.get('select').select('5 rows');
        cy.get('.-next > .-btn').click();
        cy.get('.-pageInfo').contains('2');
        cy.get('.-previous > .-btn').click();
    });

// 2. Rows count selection
    it('RowsCountSelection', () => {
        cy.get('select').select('5 rows');
    });

// 3. Add new worker
    it ('AddNewWorker', () => {
        cy.AddNewUser(1);
    });

// 4. Delete worker
    it('DeleteWorker', () => {
        cy.get('#delete-record-1').click();
    });

// 5. Delete all worker
    it('DeleteWorker', () => {
        cy.DelWorker(8);
        cy.get('.rt-noData').contains('No rows found').should('be.visible');
    });

// 6. Find worker in search field and edit it
    it('find&edit', () => {
        cy.AddNewUser(2);
        cy.get('#edit-record-2').click();
        cy.get('#firstName').type('{selectall}').type(TEST_DATA2.FirstName[Math.floor(Math.random() * TEST_DATA2.FirstName.length)]);
        cy.get('#lastName').type('{selectall}').type(TEST_DATA2.LastName[Math.floor(Math.random() * TEST_DATA2.LastName.length)]);
        cy.get('#salary').type('{selectall}').type(TEST_DATA2['Salary'] + Math.floor(Math.random() * 10000));
        cy.get('#department').type('{selectall}').type(TEST_DATA2.Department[Math.floor(Math.random() * TEST_DATA2.Department.length)]);
        cy.get('#userEmail').type('{selectall}').type(TEST_DATA2['Email'] + Math.floor(Math.random() * 100) + '@gmail.com');
        cy.get('#age').type('{selectall}25').type(TEST_DATA2['Age'] + Math.floor(Math.random() * 10));
        cy.get('#submit').click();
    });

// 7. Validate data in worker row after creating worker
    it('validateData',  () => {
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(TEST_DATA2.FirstName[0]);
        cy.get('#lastName').type(TEST_DATA2.LastName[0])
        cy.get('#salary').type('5000')
        cy.get('#department').type(TEST_DATA2.Department[0])
        cy.get('#userEmail').type('test@mail.com')
        cy.get('#age').type('25')
        cy.get('#submit').click();
        cy.get('.rt-tr.-even').contains('John').should('exist')
        cy.get('.rt-tr.-even').contains('Akers').should('exist')
        cy.get('.rt-tr.-even').contains('test@mail.com').should('exist')
        cy.get('.rt-tr.-even').contains('5000').should('exist')
        cy.get('.rt-tr.-even').contains('Production').should('exist')
        cy.get('.rt-tr.-even').contains('25').should('exist')
    });

// 8. Check search by all column values
    it('checkSearchBox', () => {
        cy.get('#searchBox').clear()
        cy.get('#searchBox').type('John')
        cy.get('.rt-tbody').contains('John').should('exist')
        cy.get('#searchBox').clear()
        cy.get('#searchBox').type('Akers')
        cy.get('.rt-tbody').contains('Akers').should('exist')
        cy.get('#searchBox').clear()
        cy.get('#searchBox').type('25')
        cy.get('.rt-tbody').contains('25').should('exist')
        cy.get('#searchBox').clear()
        cy.get('#searchBox').type('test@mail.com')
        cy.get('.rt-tbody').contains('test@mail.com').should('exist')
        cy.get('#searchBox').clear()
        cy.get('#searchBox').type('5000')
        cy.get('.rt-tbody').contains('5000').should('exist')
        cy.get('#searchBox').clear()
        cy.get('#searchBox').type('Production')
        cy.get('.rt-tbody').contains('Production').should('exist')
        cy.get('#searchBox').clear()
     })

});

// Site: https://demoqa.com/automation-practice-form

/// <reference types="Cypress" />

describe ('ToolsQA', () => {
    before (() => {
            cy.visit('https://demoqa.com/automation-practice-form')
        })
// Basic level:
// 1. Fill all fields in forms except "picture" 
    it('Fill all fields', () => {
        cy.get('[placeholder="First Name"]').type('Nissan')
        cy.get('[placeholder="Last Name"]').type('Skyline')
        cy.get('[id="userEmail"]').type('nissan@skyline.com')
        cy.get('[for="gender-radio-1"]').click()
        cy.get('[id="userNumber"]').type('0991234567')
        cy.get('[id="dateOfBirthInput"]').type('{selectall}').type('10 Jul 1998').type('{enter}')
        cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
        .type('English{enter}')
        cy.get('[for="hobbies-checkbox-1"]').click()
        cy.get('[for="hobbies-checkbox-3"]').click()
        cy.get('[placeholder="Current Address"]').type('Kyiv')
        cy.get('[class=" css-2b097c-container"] [class=" css-1hwfws3"]')
        .type('NCR{enter}')
        cy.get('[class="col-md-4 col-sm-12"] [class=" css-1wa3eu0-placeholder"]')
        .type('Delhi{enter}')

        // 2. Click on [Submit] button
        cy.get('[id="submit"]').click()

        // 3. Validate inputed data in modal window
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Nissan Skyline').should('exist')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('nissan@skyline.com').should('exist')
        cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Male').should('exist')
        cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('0991234567').should('exist')
        cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('10 July,1998').should('exist')
        cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('English').should('exist')
        cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Sports, Music').should('exist')
        cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('Kyiv').should('exist')
        cy.get('tbody > :nth-child(10) > :nth-child(2)').contains('NCR Delhi').should('exist')

    })
})

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

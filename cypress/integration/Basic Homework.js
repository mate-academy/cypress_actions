/// <reference types='cypress' />
// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

describe('Basic | Yurii Parfinenko', () => {

    it ('Registration and user data validation', () => {
        cy.registration();
        cy.validation();
    });
});

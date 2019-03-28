
describe('Disney Fast Pass Bot', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('Login to Disney', () => {
        cy.visit('https://disneyworld.disney.go.com/login/');

        cy.get('#loginPageUsername').type('smoreira1@live.com'); // Type 'Hello, World' into the 'input'
       // cy.get('#loginPagePassword').type(''); // Type 'Hello, World' into the 'input'
        cy.get('#loginPageSubmitButton').click();
        cy.visit('https://disneyworld.disney.go.com/fastpass-plus/select-party/');
        // let guestUsers = document.querySelector('.firstName guestSensitive');
        // function partyPerson(firstName) {
        //     return firstName === 'Ruby';
        // }
        // if(guestUsers){
        //     guestUsers.filter(partyPerson);
        // }
        // for(let i = 0 ; i < guestUsers.length; i++){
        //     cy.get(guestUsers.closest('.checkbox')).click();
        // }
        // https://on.cypress.io/should
        //   cy.get('.assertion-table')
        //     .find('tbody tr:last')
        //     .should('have.class', 'success')
        //     .find('td')
        //     .first()
        //     // checking the text of the <td> element in various ways
        //     .should('have.text', 'Column content')
        //     .should('contain', 'Column content')
        //     .should('have.html', 'Column content')
        //     // chai-jquery uses "is()" to check if element matches selector
        //     .should('match', 'td')
        //     // to match text content against a regular expression
        //     // first need to invoke jQuery method text()
        //     // and then match using regular expression
        //     .invoke('text')
        //     .should('match', /column content/i)

        //   // a better way to check element's text content against a regular expression
        //   // is to use "cy.contains"
        //   // https://on.cypress.io/contains
        //   cy.get('.assertion-table')
        //     .find('tbody tr:last')
        //     // finds first <td> element with text content matching regular expression
        //     .contains('td', /column content/i)
        //     .should('be.visible')

        // for more information about asserting element's text
        // see https://on.cypress.io/using-cypress-faq#How-do-I-get-an-element’s-text-contents
    })

    it('.and() - chain multiple assertions together', () => {
        //   // https://on.cypress.io/and
        //   cy.get('.assertions-link')
        //     .should('have.class', 'active')
        //     .and('have.attr', 'href')
        //     .and('include', 'cypress.io')
    })
})
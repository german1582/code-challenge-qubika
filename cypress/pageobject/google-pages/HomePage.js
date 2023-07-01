class HomePage{
    elements={
        topMenu: ()=>cy.get('#gb'),
        txtInputSearchBar: ()=>cy.get('#APjFqb')

    }

    accessGoogle(){
        cy.visit("https://www.google.com/")
    }

    validatePageTitle(){
        cy.title().should('eq','Google')
    }

    validateTopMenu(){
        this.elements.topMenu().should('be.visible')
    }

    validateSearchBar(){
        this.elements.txtInputSearchBar().should('be.visible')
    }

    performSearch(searching){
        this.elements.txtInputSearchBar().type(searching).type('{enter}')
    }

}

module.exports = new HomePage();
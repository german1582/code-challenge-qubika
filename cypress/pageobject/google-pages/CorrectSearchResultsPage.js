class CorrectSearchResultsPage {

    elements = {
        lnkFirstResult: () => cy.get(':nth-child(3) > :nth-child(1) > [data-text-ad="1"] > .vdQmEd > .v5yQqb > .sVXRqc > .CCgQ5 > span'),
        txtInputTopSearchBar: () => cy.get('#APjFqb'),
        listBoxFilter:()=>cy.get('.fKmH1e'),
        optionImagenes: ()=> cy.get(':nth-child(1) > .YpcDnf > .K1yPdf > span'),
        tagImagenes:()=>cy.get('.rQEFy')

    }

    validateLinkFirstResult(keyWord){
        this.elements.lnkFirstResult().invoke("text").as("txtLink")
        cy.get("@txtLink").should('contain',keyWord)
    }

    validateSearchingWord(searching){
        //this.elements.txtInputTopSearchBar().should('have.text',searching)
        this.elements.lnkFirstResult().invoke("text").as("txtInput")
        cy.get("@txtInput").should('contain',searching)
    }

    validateURL(){

        cy.location('protocol').should('contain','https')
        cy.location('hostname').should('eq','www.google.com')
        cy.location('href').should('contain','search?q=qa+teting')
    }

    clickOnImagesFilter(){
        
        this.elements.listBoxFilter().click()
        this.elements.optionImagenes().click()
    }

    validateThatImageTagIsSelected(){
        this.elements.tagImagenes().should('be.visible').and('not.have.attr','href')
    }
    
}

module.exports = new CorrectSearchResultsPage();
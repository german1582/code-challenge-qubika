class SearchResultsPage {

    elements = {
        txtInputTopSearchBar: () => cy.get('#APjFqb'),
        lblSuggestedSearch: ()=>cy.get('span.gL9Hy'),
        lnkSuggestedSearch:()=>cy.get('i')
    }


    validateLblOfSuggestedSearch(labelOfSuggestion){
        this.elements.lblSuggestedSearch().invoke("text").as("txtLabel")
        cy.get("@txtLabel").should('contain',labelOfSuggestion)

    }

    validateTextLinkOfSuggestedSearch(correctSearching){
        this.elements.lnkSuggestedSearch().invoke("text").as("txtLink")
        cy.get("@txtLink").should('contain',correctSearching)
    }

    clickOnSuggestedSearch(){
        this.elements.lnkSuggestedSearch().click()
    }

    extractAttrHrefOfLink(){

        this.elements.lnkSuggestedSearch().invoke("href").as("URLLink")
        cy.log(cy.get('@URLLink'))
        //return "kkkkkk"

    }
    
}

module.exports = new SearchResultsPage();

import HomePage from '../../pageobject/google-pages/HomePage'
import SearchResultsPage from '../../pageobject/google-pages/searchResultsPage'
import CorrectSearchResultsPage from '../../pageobject/google-pages/CorrectSearchResultsPage'


describe('template spec', () => {
  beforeEach('Access to Google web site',() => {
    //PUNTO 1: Ingresar a la web de Google
    HomePage.accessGoogle() 
})

    it('Validate title, top menu and search bar', ()=>{
      // PUNTO 2: Validar que se abre el sitio web correctamente, validando:
                // ○ Título
                // ○ Menú superior
                // ○ Barra de búsqueda

      cy.log("***Validation of the page's title***")
      HomePage.validatePageTitle()

      cy.log("***Validation of the page's top menu***")
      HomePage.validateTopMenu()

      cy.log("***Validation of the page's top menu***")
      HomePage.validateSearchBar()

    })

    it('Search for the word testing and press Enter', ()=>{

      // PUNTO 3: Escribir en el buscador la palabra ‘teting’ y realizar la búsqueda haciendo ‘Enter’
      cy.log("***Search for qa teting and press Enter***")
      HomePage.performSearch("qa teting")

      // PUNTO 4: Validar que se redirecciona a la página de resultado de búsqueda y se sugiere la palabra
      // escrita correctamente ‘testing’.
      cy.log("***Validation of label for suggested search***")
      SearchResultsPage.validateLblOfSuggestedSearch("Se muestran resultados de")

      cy.log("***Validation of link for suggested search***")
      SearchResultsPage.validateTextLinkOfSuggestedSearch("testing")

    })

    it('Validate new searhing page and suggested word', ()=>{
      // PUNTO 5: Hacer click en la sugerencia de búsqueda de ‘Testing’
      HomePage.performSearch("qa teting")
      //SearchResultsPage.extractAttrHrefOfLink()

      // PUNTO 6: Validar que se realiza la búsqueda correctamente, validando:
                // ○ Url
                // ○ Que en el buscador aparezca la palabra ‘Testing’
                // ○ El título del primer resultado de búsqueda contiene la palabra ‘Testing’
      SearchResultsPage.clickOnSuggestedSearch()
      CorrectSearchResultsPage.validateURL()
      CorrectSearchResultsPage.validateSearchingWord("Testing")
      CorrectSearchResultsPage.validateLinkFirstResult("Testing")     

    })

    it('Validate new searhing page and suggested word', ()=>{
      // PUNTO 7: Hacer click en el filtro de ‘Imagen’
      HomePage.performSearch("qa testing")
      CorrectSearchResultsPage.clickOnImagesFilter()
      // PUNTO 8: Validar que se aplicó la búsqueda de imágenes y la tag ‘Imagen’ quedó seleccionada
      CorrectSearchResultsPage.validateThatImageTagIsSelected()

    })

  })
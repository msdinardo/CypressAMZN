import homePage from './pageObject/homePage'
import listingPage from './pageObject/listingPage'

describe('Home Page Test Suite',() => {
    let homePO = new homePage()
    let listingPO = new listingPage()

    beforeEach(() => {
        cy.visit('/')
    })

    it('Search and article',() => {
        let itemToSearch = 'Dress'
        homePO.getMainSearch().type(itemToSearch)
        homePO.getSearchSubmit().click()

        listingPO.getHeading().contains(itemToSearch)
        listingPO.getProducts().contains(itemToSearch)        
    })

    it('Search Main Category',() => {
        let category = 'Women'
        homePO.getWomenCategory().click()      
        listingPO.getCategoryName().contains(category)
        listingPO.getProducts().should('have.length',7)
    })

    it('Search Sub Category',() => {
        let subcategoryTops = 'Tops'
        cy.get('#block_top_menu').contains('a',subcategoryTops).click({force: true})
        listingPO.getCategoryName().contains(subcategoryTops)
        listingPO.getProducts().should('have.length',2)
    })

    it('Search Third Category',() => {
        let thirdCategory = 'Summer Dresses'
        cy.get('#block_top_menu').contains('a',thirdCategory).click({force: true})
        listingPO.getCategoryName().contains(thirdCategory)
        listingPO.getProducts().should('have.length',3)
    })

})
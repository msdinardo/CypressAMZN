import homePage from './pageObject/homePage'
import listingPage from './pageObject/listingPage'

describe('Listing Page Test Suite', () => {
    let homePO = new homePage()
    let listingPO = new listingPage()

    beforeEach(() => {
        cy.visit('/')
        let categoryWomen = 'Women'
        homePO.getWomenCategory().click()
        listingPO.getCategoryName().contains(categoryWomen)
    })

    it('Search Sub Category', () => {
        let subcategoryTops = 'Tops'

        listingPO.getSubCategories().contains('li', subcategoryTops).click()
        listingPO.getCategoryName().contains(subcategoryTops)
        listingPO.getProducts().should('have.length', 2)
    })

    it('Search Third Category', () => {

        let subcategoryTops = 'Tops'
        let thirdcategoryBlouses = 'Blouses'

        listingPO.getSubCategories().contains('li', subcategoryTops).click()
        listingPO.getCategoryName().contains(subcategoryTops)

        listingPO.getSubCategories().contains('li', thirdcategoryBlouses).click()
        listingPO.getCategoryName().contains(thirdcategoryBlouses)
        listingPO.getProducts().should('have.length', 1)
    })

    it('Validate List View', () => {

        listingPO.getListView().click()
        listingPO.getProducts().should('have.length', 7)

        listingPO.getGridView().click()
        listingPO.getProducts().should('have.length', 7)
    })

    it.only('Go to detail', () => {
        listingPO.getProducts().eq(0).find('.product-image-container').click()
    })
})
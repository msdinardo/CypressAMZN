import homePage from './pageObject/homePage'
import listingPage from './pageObject/listingPage'
import detailPage from './pageObject/detailPage'
import comparePage from './pageObject/comparePage'

describe('Listing Page Test Suite', () => {
    let homePO = new homePage()
    let listingPO = new listingPage()
    let detailPO = new detailPage()
    let comparePO = new comparePage()

    beforeEach(() => {
        cy.visit('/')
        let categoryWomen = 'Women'
        homePO.getWomenCategory().click()
        listingPO.getCategoryName().contains(categoryWomen)
    })

    it('Compare Two Items', () => {
        listingPO.getProducts().eq(0).trigger('mouseover').find('.compare').click()
        comparePO.getCompareCounter().contains('1')
        listingPO.getProducts().eq(1).trigger('mouseover').find('.compare').click()
        comparePO.getCompareCounter().contains('2')
        comparePO.getCompareCounter().click()
        comparePO.getItemsToCompare().should('have.length',2)
    })

    it('Compare Three Items', () => {
        listingPO.getProducts().eq(0).trigger('mouseover').find('.compare').click()
        comparePO.getCompareCounter().contains('1')
        listingPO.getProducts().eq(1).trigger('mouseover').find('.compare').click()
        comparePO.getCompareCounter().contains('2')
        listingPO.getProducts().eq(2).trigger('mouseover').find('.compare').click()
        comparePO.getCompareCounter().contains('3')
        comparePO.getCompareCounter().click()
        comparePO.getItemsToCompare().should('have.length',3)
    })

    it.skip('Cant Compare Four Items', () => {
        cy.intercept('GET','/index.php?controller=products-comparison**').as('compare')
        listingPO.getProducts().eq(0).trigger('mouseover').find('.compare').click()
        cy.wait('@compare')
        comparePO.getCompareCounter().contains('1')
        listingPO.getProducts().eq(1).trigger('mouseover').find('.compare').click()
        cy.wait('@compare')
        comparePO.getCompareCounter().contains('2')
        listingPO.getProducts().eq(2).trigger('mouseover').find('.compare').click()
        cy.wait('@compare')
        comparePO.getCompareCounter().contains('3')
        listingPO.getProducts().eq(4).trigger('mouseover').find('.compare').click()

        cy.get('.fancybox-error',{timeout: 10000}).should('exist')
        cy.get('.fancybox-item').click()
    })
})

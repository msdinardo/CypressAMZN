import homePage from './pageObject/homePage'
import listingPage from './pageObject/listingPage'
import detailPage from './pageObject/detailPage'

describe('Detail Page Test Suite', () => {
    let homePO = new homePage()
    let listingPO = new listingPage()
    let detailPO = new detailPage()

    before(() => {
        cy.visit('/')
        let categoryWomen = 'Women'
        homePO.getWomenCategory().click()
        listingPO.getCategoryName().contains(categoryWomen)
        listingPO.getProducts().eq(0).find('.product-image-container').click(100,100)
    })

    it('Validate Details', () => {
        detailPO.getTitle().contains('Faded Short Sleeve T-shirts')
        detailPO.getProductReference().contains('demo_1')
        detailPO.getProductCondition().contains('New')
    })

    it('Validate Social Media', () => {
        detailPO.getTweeter().should('exist')
        detailPO.getFacebook().should('exist')
        detailPO.getGoogle().should('exist')
        detailPO.getPinterest().should('exist')
    })

    it('Validate Miscelaneous', () => {
        detailPO.getSendEmail().should('exist')
        detailPO.getPrint().should('exist')
    })

    
    it('Validate Images at Once', () => {
        cy.get('#thumb_1').trigger('mouseover').click()
        cy.get('.fancybox-item').click()

        cy.get('#thumb_2').trigger('mouseover').click()
        cy.get('.fancybox-item').click()

        cy.get('#thumb_3').trigger('mouseover').click()
        cy.get('.fancybox-item').click()
        
    })

    let array = ['#thumb_1','#thumb_2','#thumb_3']
    for(var i = 0;i < array.length;i++)
    {
        let name = array[i]
        it('Validate Image ' + name, () => {
            cy.get(name).trigger('mouseover')
            //cy.get('.fancybox-item').click()
        })
    }
})
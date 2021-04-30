import homePage from './pageObject/homePage'
import listingPage from './pageObject/listingPage'
import detailPage from './pageObject/detailPage'
import comparePage from './pageObject/comparePage'
import shoppingCart from './pageObject/shoppingCart'

describe.only('Listing Page Test Suite', () => {
    let homePO = new homePage()
    let listingPO = new listingPage()
    let detailPO = new detailPage()
    let comparePO = new comparePage()
    let shoppingPO = new shoppingCart()

    beforeEach(() => {
        cy.visit('/')
    })

    const addItemToShoppingCart = (index) => {
        listingPO.getProducts().eq(index).trigger('mouseover').find('div.button-container').contains('Add to cart').click()
        shoppingPO.getShoppingCartFeedback().as('popup').should('be.visible')
        cy.get('@popup').contains('Product successfully added to your shopping cart')
        cy.get('@popup').find('span.continue').contains('Continue shopping').click()
    }

    it('Add Elements to the shopping cart', () => {

        //Add Items
        addItemToShoppingCart(0)

        addItemToShoppingCart(1)

        addItemToShoppingCart(2)

        //Validate Shopping Cart
        shoppingPO.getShoppingCartPreview().contains('3')

        shoppingPO.getShoppingCartPreview().trigger('mouseover')

        shoppingPO.getShoppingCartPreviewRemoveLink().should('have.length', 3)

        shoppingPO.getShoppingCartPreview().click()

        shoppingPO.getShoppingCartReviewItems().should('have.length', 3)

    })

    it('Remove Elements from the shopping cart', () => {

        //Add Items
        addItemToShoppingCart(0)

        addItemToShoppingCart(1)

        addItemToShoppingCart(2)

        //Validate Shopping Cart
        shoppingPO.getShoppingCartPreview().contains('3')

        shoppingPO.getShoppingCartPreview().trigger('mouseover')

        shoppingPO.getShoppingCartPreviewRemoveLink().should('have.length', 3)

        shoppingPO.getShoppingCartPreview().click()

        shoppingPO.getShoppingCartReviewItems().should('have.length', 3)

        //Validate that the Shopping Cart is Empty
        shoppingPO.getShoppingCartReviewRemoveLink().click({ multiple: true })
        cy.wait(5000)
        shoppingPO.getShoppingCartEmptyDialog().contains('Your shopping cart is empty.').should('be.visible')
    })


})
import homePage from './pageObject/homePage'
import listingPage from './pageObject/listingPage'
import detailPage from './pageObject/detailPage'
import comparePage from './pageObject/comparePage'
import shoppingCart from './pageObject/shoppingCart'
import registerUser from './pageObject/registerPage'
import myAcccount from './pageObject/myaccountPage'
import checkout from './pageObject/checkoutPage'

describe('Checkout Page Test Suite', () => {
    let homePO = new homePage()
    let listingPO = new listingPage()
    let detailPO = new detailPage()
    let comparePO = new comparePage()
    let shoppingPO = new shoppingCart()
    let registerPO = new registerUser()
    let myAcccountPO = new myAcccount()
    let checkoutPO = new checkout()

    beforeEach(() => {
        cy.visit('/')
    })

    const addItemToShoppingCart = (index) => {
        listingPO.getProducts().eq(index).trigger('mouseover').find('div.button-container').contains('Add to cart').click()
        shoppingPO.getShoppingCartFeedback().as('popup').should('be.visible')
        cy.get('@popup').contains('Product successfully added to your shopping cart')
        cy.get('@popup').find('span.continue').contains('Continue shopping').click()
    }

    it('Submit an Order', () => {

        //Login into the account
        homePO.getLogin().click()

        registerPO.getLoginEmail().type('johnsnow@winterfell.com')

        registerPO.getLoginPassword().type('Qwerty12345')

        registerPO.getSubmitLogin().click()

        myAcccountPO.getMyName().contains('John Snow')

        cy.visit('/')

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

        shoppingPO.getCheckOutButton().click()

        checkoutPO.getCheckOutAddress().click()

        checkoutPO.getTerms().click()

        checkoutPO.getCheckOutAddress().click()

        checkoutPO.getBankWire().click()

        checkoutPO.getPageHeading().contains('Order summary')

        checkoutPO.getConfirmOrder().click()

        checkoutPO.getOrderConfirmation().contains('Your order on My Store is complete.')

    })
})
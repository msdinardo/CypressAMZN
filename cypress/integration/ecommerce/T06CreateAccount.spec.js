import homePage from './pageObject/homePage'
import listingPage from './pageObject/listingPage'
import detailPage from './pageObject/detailPage'
import comparePage from './pageObject/comparePage'
import shoppingCart from './pageObject/shoppingCart'
import registerUser from './pageObject/registerPage'
import myAcccount from './pageObject/myaccountPage'

describe('Create Account Test Suite', () => {
    let homePO = new homePage()
    let listingPO = new listingPage()
    let detailPO = new detailPage()
    let comparePO = new comparePage()
    let shoppingPO = new shoppingCart()
    let registerPO = new registerUser()
    let myAcccountPO = new myAcccount()

    beforeEach(() => {
        cy.visit('/')
        homePO.getLogin().click()
    })


    it('Create an Account', () => {
        let r = Math.random().toString(36).substring(5);
        let email = 'johnsnow' + r + '@winterfell.com'

        //Register the Email
        registerPO.getCreateEmail().type(email)

        //Submit the Form
        registerPO.getCreateAccount().click()

        //Fill all the registration fields
        registerPO.getTitle().check()

        registerPO.getFirstName().type('John')

        registerPO.getLastName().type('Snow')

        registerPO.getPassword().type('Qwerty12345')

        registerPO.getBirthDay().select('31');

        registerPO.getBirthMonth().select('12');

        registerPO.getBirthYear().select('1990');

        registerPO.getAddressFirstName().type('John')

        registerPO.getAddressLastName().type('Snow')

        registerPO.getAddress().type('The Castle')

        registerPO.getCity().type('Winterfell')

        registerPO.getState().select('Montana')

        registerPO.getZip().type('60610')

        registerPO.getPhone().type('5555555')

        registerPO.getAlias().type('WinterIsComming')

        registerPO.getRegister().click()

        myAcccountPO.getMyName().contains('John Snow')

        myAcccountPO.getLogout().click()
    })

    it('Login With an Account',() => {

        registerPO.getLoginEmail().type('johnsnow@winterfell.com')

        registerPO.getLoginPassword().type('Qwerty12345')

        registerPO.getSubmitLogin().click()

        myAcccountPO.getMyName().contains('John Snow')
    })

})
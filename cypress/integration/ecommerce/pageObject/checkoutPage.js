class checkout
{
    getTerms()
    {
        return cy.get('#cgv')
    }

    getCheckOutAddress()
    {
        return cy.get('button[type="submit"]').contains('Proceed to checkout')
    }

    getBankWire()
    {
        return cy.get('a.bankwire')
    }

    getConfirmOrder()
    {
        return cy.get('button[type="submit"]').contains('I confirm my order')
    }

    getOrderConfirmation()
    {
        return cy.get('div.box > p.cheque-indent > .dark')
    }

    getPageHeading()
    {
        return cy.get('.page-heading')
    }
}

export default checkout
class comparePage
{
    getCompareCounter()
    {
        return cy.get('.top-pagination-content > .compare-form > .btn > span')
    }

    getItemsToCompare()
    {
        return cy.get('a.product-name')
    }
}

export default comparePage
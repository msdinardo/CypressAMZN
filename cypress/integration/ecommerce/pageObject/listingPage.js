class listingPage
{
    getHeading()
    {
        return cy.get('.page-heading')
    }

    getProducts()
    {
        return cy.get('.product-container')
    }

    getCategoryName()
    {
        return cy.get('.cat-name')
    }

    getSubCategories()
    {
        return cy.get('#subcategories').find('li')
    }

    getListView()
    {
        return cy.get('.icon-th-list')
    }

    getGridView()
    {
        return cy.get('.icon-th-large')
    }
}

export default listingPage
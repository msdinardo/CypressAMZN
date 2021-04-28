class homePage
{
    getMainSearch()
    {
        return cy.get('#search_query_top')
    }

    getSearchSubmit()
    {
        return cy.get('button[name="submit_search"]')
    }

    getWomenCategory()
    {
        return cy.get('#block_top_menu').contains('li','Women')
    }

    getDressCategory()
    {
        return cy.get('#block_top_menu').contains('a','Dresses')
    }

    getTshirtCategory()
    {
        return cy.get('#block_top_menu').contains('a','T-shirts')
    }

    getNextCarrousel()
    {
        return cy.get('.bx-next')
    }

    getPrevCarrousel()
    {
        return cy.get('.bx-prev')
    }
}

export default homePage
class shoppingCart
{
    getShoppingCartFeedback()
    {
        return cy.get('div#layer_cart')
    }

    getShoppingCartPreview()
    {
        return cy.get('div.shopping_cart > a')
    }

    getShoppingCartPreviewRemoveLink()
    {
        return cy.get('span.remove_link')
    }

    getShoppingCartReview()
    {
        return cy.get('table#cart_summary')            
    }

    getShoppingCartReviewItems()
    {
        return this.getShoppingCartReview().find('tr.cart_item')
    }

    getShoppingCartReviewRemoveLink()
    {
        return cy.get('a[title=Delete]')
    }

    getShoppingCartEmptyDialog()
    {
        return cy.get('.alert')
    }
}

export default shoppingCart
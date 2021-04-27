class detailPage
{
    getTitle()
    {
        return cy.get('.pb-center-column').find('h1')
    }

    getProductReference()
    {
        return cy.get('.pb-center-column').find('#product_reference > .editable')
    }

    getProductCondition()
    {
        return cy.get('.pb-center-column').find('#product_condition > .editable')      
    }

    getTweeter()
    {
        return cy.get('.pb-center-column').find('.btn-twitter')
    }

    getFacebook()
    {
        return cy.get('.pb-center-column').find('.btn-facebook')
    }

    getGoogle()
    {
        return cy.get('.pb-center-column').find('.btn-google-plus')
    }

    getPinterest()
    {
        return cy.get('.pb-center-column').find('.btn-pinterest')
    }

    getSendEmail()
    {
        return cy.get('.pb-center-column').find('#send_friend_button')
    }

    getPrint()
    {
        return cy.get('.pb-center-column').find('.print > a')
    }
}

export default detailPage
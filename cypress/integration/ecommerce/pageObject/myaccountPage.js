class myAcccount
{
    getMyName()
    {
        return cy.get('.account')
    }

    getLogout()
    {
        return cy.get('.logout')
    }
}

export default myAcccount
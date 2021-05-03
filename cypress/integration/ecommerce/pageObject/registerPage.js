class registerUser {
    getCreateAccount() {
        return cy.get('#SubmitCreate')
    }

    getCreateEmail() {
        return cy.get('#email_create')
    }

    getLoginEmail()
    {
        return cy.get('#email')
    }

    getLoginPassword()
    {
        return cy.get('#passwd')
    }

    getSubmitLogin()
    {
        return cy.get('#SubmitLogin')
    }

    getTitle() {
        return cy.get('#id_gender1')
    }

    getFirstName() {
        return cy.get('#customer_firstname')
    }

    getLastName() {
        return cy.get('#customer_lastname')
    }

    getPassword() {
        return cy.get('#passwd')
    }

    getBirthDay() {
        return cy.get('#days')
    }

    getBirthMonth() {
        return cy.get('#months')
    }

    getBirthYear() {
        return cy.get('#years')
    }

    getAddressFirstName() {
        return cy.get('#firstname')
    }

    getAddressLastName() {
        return cy.get('#lastname')
    }

    getAddress() {
        return cy.get('#address1')
    }

    getCity() {
        return cy.get('#city')
    }

    getState() {
        return cy.get('#id_state')
    }

    getZip() {
        return cy.get('#postcode')
    }

    getCountry() {
        return cy.get('#id_country')
    }

    getPhone() {
        return cy.get('#phone_mobile')
    }

    getAlias() {
        return cy.get('#alias')
    }

    getRegister() {
        return cy.get('#submitAccount')
    }
}

export default registerUser
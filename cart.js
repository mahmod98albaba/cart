/// <reference types= "cypress" />


describe("Login and  process", () => {
    it("login process", () => {
        cy.visit("https://www.automationteststore.com/");

        cy.get("#customer_menu_top > ").click();
        cy.get("#loginFrm_loginname").type("MAHmod25");
        cy.get("#loginFrm_password").type("Mahmod1998@");
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get(':nth-child(1) > .active').click();
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click();
        cy.get('ul.thumbnails > :nth-child(1) > :nth-child(1) > img').click();
        cy.get(':nth-child(2) > .thumbnail > .pricetag > .productcart > .fa').click();
        cy.get('.quick_basket > a > .fa').click();
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();
        cy.get('.maintext').should('include.text', 'Your Order Has Been Processed!')
    

    })
});



describe("Transforming Data with Promises", () => {
  it("should perform all transformations correctly for input 5", () => {
    cy.visit(baseUrl + "/main.html");

    cy.get("#ip").type("5");
    cy.get("#btn").click();

    cy.wait(2000);
    cy.get("#output").should("contain", "Result: 5");

    cy.wait(1000);
    cy.get("#output").should("contain", "Result: 10");

    cy.wait(1000);
    cy.get("#output").should("contain", "Result: 7");

    cy.wait(1000);
    cy.get("#output").should("contain", "Result: 3.5");

    cy.wait(1000);
    cy.get("#output").should("contain", "Final Result: 13.5");
  });
});
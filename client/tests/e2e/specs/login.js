// https://docs.cypress.io/api/introduction/api.html

describe("Test Login Page", () => {
  beforeEach(() => {
    cy.viewport(1200, 720);
  });
  it("Visit login page", () => {
    cy.visit("/");
    cy.contains("h1", "Login");
  });
  it("Test reset button", () => {
    cy.get("[data-test='email']").type("u608110@gmail.com");
    cy.get("[data-test='password']").type("12qwasZX");
    cy.get("[data-test='reset']").click();
    cy.get("[data-test='email']").should("be.empty");
    cy.get("[data-test='password']").should("be.empty");
  });
  it("Test validation", () => {
    cy.get("[data-test='reset']").click();
    cy.get("[data-test='email']").type("test").blur();
    cy.get(".el-form-item__error").should("be.visible");
  });
  it("Test submit form", () => {
    cy.get("[data-test='reset']").click();
    cy.get("[data-test='email']").type("u608110@gmail.com");
    cy.get("[data-test='password']").type("12qwasZX");
    cy.get("[data-test='submit']").click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});

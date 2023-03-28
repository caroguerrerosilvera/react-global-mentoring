describe("App component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the Counter component", () => {
    cy.get("h3").contains("Counter component");
    cy.get("[data-testid=counter]").should("have.text", "2");
  });

  it("renders the SearchForm component", () => {
    cy.get("h3").contains("Search form component");
    cy.get("[data-testid=search-form-input]")
      .type("Hello world")
      .should("have.value", "Hello world");
    cy.get("[data-testid=search-form-button]").click();
    cy.log("Query submitted!");
  });

  it("renders the GenreSelect component", () => {
    cy.get("h3").contains("Genre select component");
    cy.get("[data-testid=genre-select]").eq(0).should("contain.text", "Action");
    cy.get("[data-testid=genre-select]").eq(1).should("contain.text", "Comedy");
    cy.get("[data-testid=genre-select]").eq(2).should("contain.text", "Drama");
    cy.get("[data-testid=genre-select]").eq(3).should("contain.text", "Horror");
    cy.get("[data-testid=genre-select]").eq(4).should("contain.text", "Sci-Fi");
  });
});

describe("Primary DOM elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Contains PaceX in the title", () => {
    cy.title().should("eq", "PaceX Calculator");
  });

  it("Contains a <main />", () => {
    cy.get("main");
  });

  it("Contains 3 <section /> titles", () => {
    cy.get("section h1").contains("Time");
    cy.get("section h1").contains("Distance");
    cy.get("section h1").contains("Pace");
  });

  it("Contains 3 sliders", () => {
    cy.get("input[type=range]");
  });
});

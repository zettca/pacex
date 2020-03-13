describe("Clicking Distance Buttons", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Mile should set 1.6km", () => {
    cy.get("button")
      .contains("Mile")
      .click();

    cy.get("section > h1").contains("Distance 1.6km");
  });

  it("50K should set 50.0km", () => {
    cy.get("button")
      .contains("50K")
      .click();

    cy.get("section > h1").contains("Distance 50.0km");
  });

  it("100K should set 100.0km", () => {
    cy.get("button")
      .contains("100K")
      .click();

    cy.get("section > h1").contains("Distance 100.0km");
  });
});

describe("Clicking Pace Buttons", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Walk should set 10:00/km", () => {
    cy.get("button")
      .contains("Walk")
      .click();

    cy.get("section > h1").contains("Pace 10:00/km");
  });

  it("Run should set 05:00/km", () => {
    cy.get("button")
      .contains("Run")
      .click();

    cy.get("section > h1").contains("Pace 05:00/km");
  });

  it("Bekele should set 02:30/km", () => {
    cy.get("button")
      .contains("Bekele")
      .click();

    cy.get("section > h1").contains("Pace 02:30/km");
  });
});

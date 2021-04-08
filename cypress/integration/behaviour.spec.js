describe("Slider mark clicking", () => {
  describe("Time", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("12min", () => {
      cy.get("section:nth-child(1) .MuiSlider-markLabel").contains("12'").click();
      cy.get("section:nth-child(1) h1").contains("Time 00:12:00");
    });

    it("30min", () => {
      cy.get("section:nth-child(1) .MuiSlider-markLabel").contains("30'").click();
      cy.get("section:nth-child(1) h1").contains("Time 00:30:00");
    });

    it("Max (+)", () => {
      cy.get("section:nth-child(1) .MuiSlider-markLabel").contains("+").click();
      cy.get("section:nth-child(1) h1").contains("Time 01:00:00");
    });
  });

  describe("Distance", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Mile", () => {
      cy.get("section:nth-child(2) .MuiSlider-markLabel").contains("1 mi").click();
      cy.get("section:nth-child(2) h1").contains("Distance 1.6km");
    });

    it("5K", () => {
      cy.get("section:nth-child(2) .MuiSlider-markLabel").contains("5K").click();
      cy.get("section:nth-child(2) h1").contains("Distance 5.0km");
    });

    it("Max (+)", () => {
      cy.get("section:nth-child(2) .MuiSlider-markLabel").contains("+").click();
      cy.get("section:nth-child(2) h1").contains("Distance 10.0km");
    });
  });

  describe("Pace", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("[aria-label=Lock]").first().click();
    });

    it("Walk 10:00/km", () => {
      cy.get("section:nth-child(3) .MuiSlider-markLabel").contains("🚶").click();
      cy.get("section:nth-child(3) h1").contains("Pace 10:00/km");
    });

    it("Run 05:00/km", () => {
      cy.get("section:nth-child(3) .MuiSlider-markLabel").contains("🏃").click();
      cy.get("section:nth-child(3) h1").contains("Pace 05:00/km");
    });

    it("Run fast 04:00/km", () => {
      cy.get("section:nth-child(3) .MuiSlider-markLabel").contains("🏃💨").click();
      cy.get("section:nth-child(3) h1").contains("Pace 04:00/km");
    });

    it("Max (+) Pace 03:45/km", () => {
      cy.get("section:nth-child(3) .MuiSlider-markLabel").contains("+").click();
      cy.get("section:nth-child(3) h1").contains("Pace 03:45/km");
    });
  });
});

describe("Slider growing", () => {
  describe("Time", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("growing", () => {
      const slider = "section:nth-child(1) span[role=slider]";
      const marks = "section:nth-child(1) .MuiSlider-markLabel";

      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "3600");
      cy.get(marks).contains("+").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "4320");
    });

    it("growing & shrinking", () => {
      const slider = "section:nth-child(1) span[role=slider]";
      const marks = "section:nth-child(1) .MuiSlider-markLabel";

      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "3600");
      cy.get(marks).contains("+").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "4320");
      cy.get(marks).contains("12'").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "3600");
    });
  });

  describe("Distance", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("growing", () => {
      const slider = "section:nth-child(2) span[role=slider]";
      const marks = "section:nth-child(2) .MuiSlider-markLabel";

      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "10000");
      cy.get(marks).contains("+").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "12000");
    });

    it("growing & shrinking", () => {
      const slider = "section:nth-child(2) span[role=slider]";
      const marks = "section:nth-child(2) .MuiSlider-markLabel";

      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "10000");
      cy.get(marks).contains("+").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "12000");
      cy.get(marks).contains("1 mi").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "10000");
    });
  });

  describe("Pace", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("[aria-label=Lock]").first().click();
    });

    it("growing", () => {
      const slider = "section:nth-child(3) span[role=slider]";
      const marks = "section:nth-child(3) .MuiSlider-markLabel";

      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "16000");
      cy.get(marks).contains("+").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "19200");
    });

    it("growing & shrinking", () => {
      const slider = "section:nth-child(3) span[role=slider]";
      const marks = "section:nth-child(3) .MuiSlider-markLabel";

      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "16000");
      cy.get(marks).contains("+").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "19200");
      cy.get(marks).contains("🚶").click();
      cy.get(slider).should("have.attr", "aria-valuemax").and("eq", "16000");
    });
  });
});

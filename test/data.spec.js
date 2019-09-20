require("../src/data.js");


describe("funcao filType", () => {
  it("is a function", () => {
    expect(typeof app.listTypes).toBe("function");
  });

  it("returns `example`", () => {
    expect(app.listTypes([{"type": ["Grass","Poison"]}], "Grass")).toEqual([{"type": ["Grass","Poison"]}], "Grass");
  });
})
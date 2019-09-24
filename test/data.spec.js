require("../src/data.js");

describe("FilterTypes", () => {
  it("should be a function", () => {
    expect(typeof app.listTypes).toBe("function");
  });
});

describe("FilterPoke", () => {
  it("should be a function", () => {
    expect(typeof app.listText).toBe("function");
  });
});

describe("FilterAZ", () => {
  it("should be a function", () => {
    expect(typeof app.listOrder).toBe("function");
  });
});

describe("FilterEgg", () => {
  it("should be a function", () => {
    expect(typeof app.listEgg).toBe("function");
  });
});

describe("printStatic", () => {
  it("should be a function", () => {
    expect(typeof app.printStatic).toBe("function");
  });
});

it("returns `example`", () => {
  expect(app.listTypes([{"type": ["Grass", "Poison"]}], "Grass")).toEqual([{"type": ["Grass", "Poison"]}], "Grass");
});

it("returns `example`", () => {
  expect(app.listText([{"name": "Bulbasaur", "num": "001", "type": ["Grass", "Poison"]}], "Bulbasaur")).toEqual([{"name": "Bulbasaur", "num": "001", "type": ["Grass", "Poison"]}]);
});

it("returns `example`", () => {
  expect(app.listOrder([{"num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"]}, 
    {"num": "002", "name": "Ivysaur", "type": ["Grass", "Poison"], }, 
    {"num": "003", "name": "Venusaur", "type": ["Grass", "Poison"]}], "Z-A")).toEqual([
    {"num": "003", "name": "Venusaur", "type": ["Grass", "Poison"]}, 
    {"num": "002", "name": "Ivysaur", "type": ["Grass", "Poison"]}, 
    {"num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"]}]);
});

it("returns `example`", () => {
  expect(app.listEgg([{"num": "001", "name": "Bulbasaur", "type": [ "Grass", "Poison" ], "egg": "2 km", }, 
    {"num": "023", "name": "Ekans", "type": ["Poison"], "egg": "5 km", }, 
    {"num": "095", "name": "Onix", "type": [ "Rock", "Ground" ], "egg": "10 km", }], "5km")).toEqual([{"num": "023", "name": "Ekans", "type": ["Poison"], "egg": "5 km", }]);
});
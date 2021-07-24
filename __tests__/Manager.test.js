const Manager = require("../lib/Manager.js");

test ('check manager info', ()=> {
  const manager = new Manager ('Dana');

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(String));

});
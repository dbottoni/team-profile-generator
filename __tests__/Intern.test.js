const Intern = require("../lib/intern.js");

test ('check intern info', ()=> {
  const intern = new Intern ('');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toExpect(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));

});
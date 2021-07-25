const Intern = require("../lib/intern.js");

test ('create new intern', ()=> {
  const intern = new Intern ('');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));

});

test ('check intern functions', () =>{
  const intern = new Intern('Dana');

  expect(intern.getInfo()).toBeDefined();  
  expect(intern.getRole()).toEqual(expect.any(String));
  expect(intern.getSchool()).toBeDefined(); 
  



})
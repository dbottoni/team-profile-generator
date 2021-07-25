const Engineer = require('../lib/Engineer');


test('create new engineer', () => {
  const engineer = new Engineer('Dana');

  expect(engineer.name).toBe('Dana');
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});


test('check engineer functions', () => {
  const engineer = new Engineer('Dana');

  expect(engineer.getInfo()).toHaveProperty('name');
  expect(engineer.getInfo()).toHaveProperty('id');
  expect(engineer.getInfo()).toHaveProperty('email');
  expect(engineer.getInfo()).toHaveProperty('github');

});

test('check the engineers github', () => {
    const engineer = new Engineer('DanaGithub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

const Employee = require('../lib/Employee.js');


test('tests employee info', () => {
  const employee = new Employee('Dana');

  expect(employee.name).toBe('Dana');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});


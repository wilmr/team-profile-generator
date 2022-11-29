const Manager = require('../lib/Manager');

test('Creates new Manager', () => {
	const employee = new Manager('Step Curry', 1234, 'step@curry.com', 824824824);

	expect(employee.name).toBe('Step Curry');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.officeNumber).toEqual(expect.any(Number));
});

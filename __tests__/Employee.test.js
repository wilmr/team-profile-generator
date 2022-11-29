const Employee = require('../lib/Employee');

test('Creates new employee', () => {
	const employee = new Employee('John Smith', 1234, 'john@smith.com');

	expect(employee.name).toBe('John Smith');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});

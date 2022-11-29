const Engineer = require('../lib/Engineer');

test('Creates new Engineer', () => {
	const employee = new Engineer('Jane Doe', 5678, 'jane@doe.com', 'janedoe');

	expect(employee.name).toBe('Jane Doe');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.github).toEqual(expect.any(String));
});

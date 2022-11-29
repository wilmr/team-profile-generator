const Intern = require('../lib/Intern');

test('Creates new Intern', () => {
	const employee = new Intern('Lebron James', 1234, 'lebron@james.com', 'LA');

	expect(employee.name).toBe('Lebron James');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.school).toEqual(expect.any(String));
});

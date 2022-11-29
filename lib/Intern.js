const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email) {}

	getSchool() {
		return;
	}

	getRole() {
		return 'Intern';
	}
}

module.exports = Intern;

const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {}

	getRole() {
		return 'Manager';
	}

	getOfficeNumber() {
		return;
	}
}

module.exports = Manager;

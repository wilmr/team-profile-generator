const inquirer = require('inquirer');
const path = require('path');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');

const OUTPUT_DIR = path.resolve(__dirname, 'output');

teamProfileArr = [];

function addManager() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'managerName',
				message: "Enter the Manager's name.",
			},

			{
				type: 'input',
				name: 'managerId',
				message: "Enter the Manager's ID.",
			},

			{
				type: 'input',
				name: 'managerEmail',
				message: "Enter the Manager's Email.",
			},

			{
				type: 'input',
				name: 'managerOfficeNumber',
				message: "Enter the Manager's Office Number",
			},
		])
		.then((response) => {
			const manager = new Manager(
				response.managerName,
				response.managerId,
				response.managerEmail,
				response.managerOfficeNumber
			);
			teamProfileArr.push(manager);
			createTeam();
		});
}

function addEngineer() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'engineerName',
				message: "Enter the Engineer's name.",
			},

			{
				type: 'input',
				name: 'engineerId',
				message: "Enter the Engineer's ID number.",
			},

			{
				type: 'input',
				name: 'engineerEmail',
				message: "Enter the Engineer's Email.",
			},

			{
				type: 'input',
				name: 'engineerGithub',
				message: "Enter the Engineer's Github name.",
			},
		])
		.then((response) => {
			const engineer = new Engineer(
				response.engineerName,
				response.engineerId,
				response.engineerEmail,
				response.engineerGithub
			);
			teamProfileArr.push(engineer);
			createTeam();
		});
}

function createTeam() {
	inquirer
		.prompt([
			{
				type: 'list',
				message: 'Choose the type of Employee you wish to add.',
				name: 'employeeRole',
				choices: [
					'Manager',
					`Engineer`,
					'Intern',
					'No more team members are needed.',
				],
			},
		])
		.then(function (response) {
			switch (response.employeeRole) {
				case 'Manager':
					addManager();
					break;
				case 'Engineer':
					addEngineer();
					break;
				case 'Intern':
					addIntern();
					break;

				default:
					htmlBuilder();
			}
		});
}

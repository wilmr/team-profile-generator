const createTeamHTML = (team) => {
	const createManager = (manager) => {
		return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
	};

	const createEngineer = (engineer) => {
		return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
	};

	const createIntern = (intern) => {
		return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
	};

	const htmlBuild = [];

	htmlBuild.push(
		team
			.filter((employee) => employee.getRole() === 'Manager')
			.map((manager) => createManager(manager))
	);
	htmlBuild.push(
		team
			.filter((employee) => employee.getRole() === 'Engineer')
			.map((engineer) => createEngineer(engineer))
			.join('')
	);
	htmlBuild.push(
		team
			.filter((employee) => employee.getRole() === 'Intern')
			.map((intern) => createIntern(intern))
			.join('')
	);

	return htmlBuild.join('');
};

module.exports = (team) => {
	return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="style.css" />
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                        <h1 class="text-center text-white">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="row team-area col-12 d-flex justify-content-center">
                        ${createTeamHTML(team)}
                    </div>
                </div>
            </div>
        </body>
    </html>`;
};

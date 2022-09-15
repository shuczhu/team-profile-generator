const generateHTML = function (team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="card-deck">
        ${generateTeam(team)}
        </div>
    </body>
    
    </html>
    `
}

const generateTeam = function (team) {
    let html = '';

    team.managers.forEach(function (manager) {
        html += `
            <div class="card">
            <div class="card-header">
                <h2 class="name">${manager.getName()} <i class="fa-solid fa-mug-saucer"></i></h2>
                <p class="position">Manager</p>
            </div>
    
            <div class="card-info">
                <div class="card-info-container">
                    <p class="id">ID: ${manager.getId()}</p>
                    <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <p class="note">Office number: ${manager.getOffice()}</p>
                </div>
            </div>
        </div>
            `
    })

    team.engineers.forEach(function (engineer) {
        html += `
            <div class="card">
            <div class="card-header">
                <h2 class="name">${engineer.getName()} <i class="fa-sharp fa-solid fa-robot"></i></h2>
                <p class="position">Manager</p>
            </div>
    
            <div class="card-info">
                <div class="card-info-container">
                    <p class="id">ID: ${engineer.getId()}</p>
                    <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <p class="note">Github: ${engineer.getGithub()}</p>
                </div>
            </div>
        </div>
            `
    })

    team.interns.forEach(function (intern) {
        html += `
            <div class="card">
            <div class="card-header">
                <h2 class="name">${intern.getName()} <i class="fa-solid fa-person"></i></h2>
                <p class="position">Manager</p>
            </div>
    
            <div class="card-info">
                <div class="card-info-container">
                    <p class="id">ID: ${intern.getId()}</p>
                    <p class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <p class="note">School: ${intern.getSchool()}</p>
                </div>
            </div>
        </div>
            `
    })

    return html;


}

module.exports = generateHTML;
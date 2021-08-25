const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'enter a team member?',
      name: 'name',
    },
    {
      type: 'list',
      message: 'What position do they fulfill?',
      choices: ["Team Lead", "Engineer", "Junior Engineer", "Intern"],
      name: 'position',
      validate: (value)=>{if(value){return true} else {return 'please pick one'}}
    },
    {
      type: 'input',
      message: 'What is their ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'enter their email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'enter their GitHub Username',
      name: 'gitname',
      when: (answers) => answers.position !== 'Intern'
    },
    {
      type: 'input',
      message: 'what school are they enrolled in',
      name: 'school',
      when: (answers) => answers.position === 'Intern'
    },
  ]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TEAMWORK?</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  </head>
  <body>
      <header>
       <h1 class="text-center bg-danger text-white">My Team</h1>   
      </header>
      <main class="d-flex flex-wrap justify-content-around px-1">      
         
          <div class="card mb-3" style="max-width: 18rem;">
              <h5 class="card-title card-header bg-info text-lg-left">${answers.name}</h5>
              <h5 class="card-title card-header bg-info text-lg-left">${answers.position}</h5>
              <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${answers.id}</li>
                  <li class="list-group-item">Email: ${answers.email}</li>
                  <li class="list-group-item">GitHub: ${answers.gitname}</li>
              </ul>        
              </div>
          </div>
         
      </main>  
  </body>
  </html>`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

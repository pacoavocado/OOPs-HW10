const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { prototype } = require("./lib/employee.js");
// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "enter a team member?",
      name: "name",
    },
    {
      type: "list",
      message: "what position do they fulfill?",
      choices: ["Manager", "Engineer", "Intern"],
      name: "position",
    },
    {
      type: "input",
      message: "what is their ID?",
      name: "id",
    },
    {
      type: "input",
      message: "enter their email?",
      name: "email",
    },
    {
      type: "input",
      message: "enter their GitHub Username",
      name: "gitname",
      when: (answers) => answers.position === "Mannager" || "Engineer",
    },
    {
      type: "input",
      message: "what school are they enrolled in",
      name: "school",
      when: (answers) => answers.position === "Intern",
    },
    {
      type: "list",
      message: "do you want to add another member",
      choices: ["yes", "no"],
      name: "done",
    },
  ]);
};

const generateHTML = () =>
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
      <main class="d-flex flex-wrap row justify-content-around px-1">      
         <section>
        ${generateManagerCard()}
        </section>
        <section>
        ${generateEngineerCard()}
        </section>
        <section>
        ${generateInternCard()}
        </section>
         
      </main>  
  </body>
  </html>`;

const employees = [];
const managerArray = [];
const engineerArray = [];
const internArray = [];
// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => {
      if (answers.position === "Manager") {
        managerArray.push(
          new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.gitname
          )
        );
      }
      if (answers.position === "Engineer") {
        engineerArray.push(
          new Engineer(answers.name, answers.id, answers.email, answers.gitname)
        );
      }
      if (answers.position === "Intern") {
        internArray.push(
          new Intern(answers.name, answers.id, answers.email, answers.school)
        );
      }
      if (answers.done === "no") {
        writeFileAsync("./output/index.HTML", generateHTML());
      } else {
        init();
      }
    })

    // .then(() => console.log("Successfully wrote to index.HTML"))
    .catch((err) => console.error(err));
};

function generateManagerCard() {
  let managerCard = "";
  for (let i = 0; i < managerArray.length; i++) {
    const element = managerArray[i];
    managerCard = `<section><div class="card mb-3" style="max-width: 18rem;">
    <h5 class="card-title card-header bg-info text-lg-left text-white">${element.name}</h5>
    <h5 class="card-title card-header bg-info text-lg-left text-white">${element.position}</h5>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <a class="list-group-item">ID: ${element.id}</a>
    <a class="list-group-item" id="emailAddress" type="email" href="mailto:${element.email}?subject=From%20Da%20Team!">Email: ${element.email}</a>
    <a class="list-group-item" target="blank">GitHub: ${element.gitname}</a>
    </ul>        
    </div></section>`;
  }
  return managerCard;
}

function generateEngineerCard() {
  let engineerCard = "";
  for (let i = 0; i < engineerArray.length; i++) {
    const element = engineerArray[i];
    engineerCard += `<section><div class="card mb-3" style="max-width: 18rem;">
    <h5 class="card-title card-header bg-info text-lg-left text-white">${element.name}</h5>
    <h5 class="card-title card-header bg-info text-lg-left text-white">${element.position}</h5>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <a class="list-group-item">ID: ${element.id}</a>
    <a class="list-group-item" id="emailAddress" type="email" href="mailto:${element.email}?subject=From%20Da%20Team!">Email: ${element.email}</a>
    <a class="list-group-item" target="blank">GitHub: ${element.gitname}</a>
    </ul>        
    </div></section>`;
  }
  return engineerCard;
}

function generateInternCard() {
  let internCard = "";
  for (let i = 0; i < internArray.length; i++) {
    const element = internArray[i];
    internCard += `<section><div class="card mb-3" style="max-width: 18rem;">
    <h5 class="card-title card-header bg-info text-lg-left text-white">${element.name}</h5>
    <h5 class="card-title card-header bg-info text-lg-left text-white">${element.position}</h5>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <a class="list-group-item">ID: ${element.id}</a>
    <a class="list-group-item" id="emailAddress" type="email" href="mailto:${element.email}?subject=From%20Da%20Team!">Email: ${element.email}</a>
    <a class="list-group-item" target="blank">GitHub: ${element.school}</a>
    </ul>        
    </div>
    </section>`;
  }
  return internCard;
}

init();

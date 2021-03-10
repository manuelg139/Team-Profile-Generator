
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// EMPLOYEE CLASSES
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


const writeFileAsync = util.promisify(fs.writeFile);

    
const mangerQuestions = () => {
    return inquirer.prompt([ 
        {
          type: 'input',
          name: 'team',
          message: 'What is the name of your team?',
        },
        {
          type: 'input',
          name: 'managerName',
          message: 'Who is managing this project?',
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'What is your Manager ID?',
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: 'What is your Manger Email?',
          default: "npm install"
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "What is the manager's office number?",
        },
    ])
};

 
const engineerQuestions = () => {
  return inquirer.prompt([ 
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineer\'s name?',
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s ID?',
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s email?',
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer\'s github username?",
      },
  ])
};

const internQuestions = () => {
  return inquirer.prompt([ 
      {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name?',
      },
      {
        type: 'input',
        name: 'internID',
        message: 'What is the intern\'s ID?',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern\'s email?',
      },
      {
        type: 'input',
        name: 'shcool',
        message: "Where did the intern go to school?",
      },
  ])
};


//Laying down the order for the functions and the answers with .then promises 
const init = () => {
  mangerQuestions()
    /* .then((answers) => writeFileAsync('Readme.md', generateREADME(answers))) */
    .then(() => console.log('Input the New Team Member\'s Information'))
    .catch((err) => console.error(err))
    .then(() =>  
        engineerQuestions())
    .then(() => console.log('Input the New Team Member\'s Information'))
    .then(() =>  
      internQuestions())
    
};




// Function call to initialize app
init();

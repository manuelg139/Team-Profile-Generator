
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// EMPLOYEE CLASSES
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


//Employee Array we are pushing individual employees to before rendering to HTML
let employees = [];
let teamTitle;
let teamDesc;


//  ! MANAGER FUNCTION //
const writeFileAsync = util.promisify(fs.writeFile);

const mangerQuestions = () => {
    return inquirer.prompt([ 
        {
          type: 'input',
          name: 'teamTitle',
          message: 'What is the name of your team?',
        },
        {
          type: 'input',
          name: 'teamDesc',
          message: 'What is the goals for this team?',
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
          
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "What is the manager's office number?",
        },
    ])
};


//  ! NEW MEMBER FUNCTION //

const newMember = () => {
  return inquirer.prompt([ 
    {
      type: 'list',
      name: 'newMember',
      message: 'What type of new team member would you like to add?',
      choices: [
        "Engineer",
        "Intern",
        "No Teams To Add",
      ]
    },
  ])  .then((answers) =>  {

  if (answers.newMember === "Engineer") {
      engineerQuestions();
  } else if  (answers.newMember === "Intern")  {
    internQuestions();
  } else {

  // Use readfile first to sync in the html file and specify where to add the employee objects
    let index = fs.readFileSync('./src/index.html', 'utf8');
    index = index.replace(/{{teamTitle}}/g, teamTitle);
    index = index.replace(/{{teamDesc}}/g, teamDesc);
  
    // create a loop to print out all of the employees one by one depending on how many they would want to add
    let managerCard = fs.readFileSync('./src/manager.html', 'utf8');
    managerCard = managerCard.replace('{{name}}',manager.getName());
    managerCard = managerCard.replace('{{role}}',manager.getRole());
    managerCard = managerCard.replace('{{id}}',manager.getId());
    managerCard = managerCard.replace('{{email}}',manager.getEmail());
    managerCard = managerCard.replace('{{officeNumber}}',manager.getOfficeNumber());

    cards = employees;
    index = index.replace(/{{cards}}/g, cards);
    fs.writeFileAsync('./dist/index.html', index);

   
    console.log('Congratualtions!!! Your Team is Full', employees);
  }

 
  })
};

//  ! INTERN FUNCTION //

const internQuestions = () => {
  return inquirer.prompt([ 
      {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name?',
      },
      {
        type: 'input',
        name: 'internId',
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
      
  ]) .then(internAnswers => { 
    //this is the informtion sent to intern class
    let intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.shcool);
    // pushing intern into - employees array
    employees.push(intern);
    newMember();
});
};




//  ! ENGINEER FUNCTION //
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
  ]) .then(engineerAnswers => { 
    //this is the informtion sent to engineer class
    let engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.github);
    // pushing engineer into - employees array
    employees.push(engineer);
    newMember();
  });
};




//  ! INITIAL FUNCTION //

//Laying down the order for the functions and the answers with .then promises 
const init = () => {
  mangerQuestions()
    .then(managerAnswers => { 
      //this is the informtion sent to manager class
    manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber );
      /* ? managerAnswers.teamTitle, managerAnswers.teamGoals */

      // pushing manager into - employees array
      employees.push(manager);
     //this is grsabbing the title of the new team from answers for the HTML 
    teamTitle = managerAnswers.teamTitle; 
    teamDesc = managerAnswers.teamDesc; 
    })
    .then(() => console.log('Input the New Team Member\'s Information'))
    .catch((err) => console.error(err))
    .then(() =>  
    newMember())
  }

// Function call to initialize app
init();

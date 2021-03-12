
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// EMPLOYEE CLASSES

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


//Employee Array we are pushing individual team to before rendering to HTML
let team = [];
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

    // manager card with repleacement items
    let managerCard = fs.readFileSync('./src/manager.html', 'utf8');
    managerCard = managerCard.replace('{{name}}',manager.getName());
    managerCard = managerCard.replace('{{role}}',manager.getRole());
    managerCard = managerCard.replace('{{id}}',manager.getId());
    managerCard = managerCard.replace('{{email}}',manager.getEmail());
    managerCard = managerCard.replace('{{officeNumber}}',manager.getOfficeNumber());

    // tried adding all cards together but get me an error
    // cards will need to be managerCard + a for loop of the team array to render each eaployee individaully 
    cards = managerCard;
    for (var i = 0; i < team.length; i++) {
      var employee = team[i];
      // Cards adds and then equals every new employee card info.
      cards += renderEmployee(employee);
  }
// add cards into the html
    index = index.replace(/{{cards}}/g, cards);

// this function deploys into the team.html
    fs.writeFile('./dist/team.html', index, function (err) {
      if (err) throw err;
      console.log('Congratualtions!!! Your Team is Full') 
      console.log('File team.html has been deployed!!') ;
      console.log(cards) ;
    });
  }

  })
};
// fucntion to render the intern and engineer cards individually depeding on selection
const renderEmployee = (employee) =>  {
  if (employee.getRole() === "Intern") {
      let internCard = fs.readFileSync('./src/intern.html', 'utf8');
      internCard = internCard.replace('{{name}}', employee.getName());
      internCard = internCard.replace('{{role}}', employee.getRole());
      internCard = internCard.replace('{{id}}', employee.getId());
      internCard = internCard.replace('{{email}}', employee.getEmail());
      internCard = internCard.replace('{{school}}', employee.getSchool());
      return internCard;
  } else if (employee.getRole() === "Engineer") {
      let engineerCard = fs.readFileSync('./src/engineer.html', 'utf8');
      engineerCard = engineerCard.replace('{{name}}', employee.getName());
      engineerCard = engineerCard.replace('{{role}}', employee.getRole());
      engineerCard = engineerCard.replace('{{id}}', employee.getId());
      engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
      engineerCard = engineerCard.replace('{{github}}', employee.getGithub());
      return engineerCard;
  }
}

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
    // pushing intern into - team array
    team.push(intern);
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
    // pushing engineer into - team array
    team.push(engineer);
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

      // pushing manager into - team array
      team.push(manager);
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

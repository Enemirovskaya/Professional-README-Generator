const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./generateMarkdown.js');


//Prompt the user questions to populate the README.md
inquirer.prompt([
    {   type: "input",
        name: "title",
        message: "Your Project Title. "
    },
    {
        type: "input",
        name: "description",
        message: "What is short description? "
    },
    {
        type: "input",
        name: "instalation",
        message: "What is instruction of instalation if any? "
    },
    {
        type: "input",
        name: "instructions",
        message: "What are instructions for usege? "
    },
    {
        type: "list",
        name: "license",
        message: "License: ",
        choices:[
            "MIT",
            "Apache",
            "cc1"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are contibution guidelines? "
    },
    {
        type: "input",
        name: "test",
        message: "What are test instructions if any? "
    },
    {
        type: "input",
        name: "username",
        message: "Your GitHub username: "
    },
    {
        type: "input",
        name: "file",
        message: "Your Linkedin: "
    },
    {
        type: "input",
        name: "email",
        message: "Your email: "
    }
   
]).then(({
    title,
    instalation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution

})=>{
    // templates
    const template = ` #${title}
    *[Instalation](#instalation)
    *[Usage](#usage)
    *[Contribution](#contribution)
    *[Credits](#credits)
    *[License](#license)
    # Instalation ${instalation}
    ## Usage ${usage}
    ## Contribution ${contribution}
    ### Instructions ${instructions}
    ## Credits ${credit}
    ##License ${license}
    
    #Contact
    * GitHub :${git}
    * Linkedin :${linkedin}
    * Email :${email}`;
    
    // Function to write README file using fs
    writeToFile(title,template);

}
);
// function createNewFile(fileName, data){
    function writeToFile(fileName, data){
    fs.writeFile(`./${fileName.join("")}.md`,data,()=>{
     if(err){
        console.log(err)
     }
     console.log('README has been generated')
    })
        
}






// , will place this in function init
//

// // Create a function to initialize
// function init(){
//     // prompt method calls in array of questions
//     inquirer.prompt(questions)
//     // answers function takes answer responses and writes to readme 
//     .then((answers)=>{
//         console.log(answers);
//         const response = generateMarkdown(answers);
//         writeToFile("README.md", response);
    
//     });
// }
// init();




// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

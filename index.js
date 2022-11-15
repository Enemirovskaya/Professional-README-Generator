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
        name: "contribution",
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
    license,
    git,
    linkedin,
    email,
    contribution

})=>{
    // templates
    const template = `${title}

* [Instalation](#instalation)

* [Usage](#usage)

* [Contribution](#contribution)

* [Credits](#credits)

* [License](#license)

## Instalation ${instalation}
## Contribution ${contribution}
### Instructions ${instructions}
## License ${license}
## Contact
* GitHub : ${git}
* Linkedin : ${linkedin}
* Email : ${email}`;
    
    // Function to write README file using fs
    writeToFile(template);

}
);
// function createNewFile(fileName, data){
    function writeToFile(data){
    fs.writeFile("example-README.md",data,(err)=>{
     if(err){
        console.log(err)
     }
     console.log('README has been generated')
    })
        
}


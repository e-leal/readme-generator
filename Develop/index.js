const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your GitHub Name. (Required)',
            validate : nameInput => {
                if(nameInput){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's a good email to reach you? (Required)",
            validate: emailInput => {
                if(emailInput){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project name? (Required)',
            validate: projectInput => {
                if (projectInput){
                    return true;
                }else{
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Enter your project description. (Required)',
            validate: descriptInput => {
                if(descriptInput){
                    return true;
                }else{
                    console.log("please enter your project description!")
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'Enter project installation instructions.(Required)',
            validate: installInput => {
                if(installInput){
                    return true;
                }else{
                    console.log('Please enter installation instructions!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter project usage details. (Required)',
            validate: usageInput => {
                if(usageInput){
                    return true;
                }else{
                    console.log('Please enter project usage details');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select license(s) applied for this project.',
            default: 'MIT',
            choices: ['MIT', 'ISC', 'BSD', 'Apache']
        },
        {
            type: 'editor',
            name: 'contribution',
            message: 'Enter contribution guidelines. (Required)',
            validate: contributeInput => {
                if(contributeInput){
                    return true;
                }else{
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'testing',
            message: 'Enter project testing instructions. (Required)',
            validate: testInput => {
                if(testInput){
                    return true;
                }else{
                    console.log('Please enter testing instructions!');
                    return false;
                }
            }
        }
    ]);
};


const generateReadme = projData => {
    console.log(projData);
    const {project, description, ...steps} = projData;
    return `
## ${project}
![${project}](https://img.shields.io/badge/License-${steps.license}-blue)   
    
## Description
${description}

## Table of Contents
This table of contents is used to help navigate a long README file:

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)   
    
## Installation
${steps.installation}
    
## Usage
${steps.usage}

## License
${steps.license}

## Badges
![${project}](https://img.shields.io/badge/License-${steps.license}-blue)
This badge is applied for the license that is applied to the project
    
## Contributing
${steps.contribution}
    
## Tests
${steps.testing}

## Questions
Github: [${steps.name}](http://github.com/${steps.name})

You can reach me at the following email

Email: ${steps.email}`;
}



// function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) =>{
        fs.writeFile(fileName, generateReadme(data), err =>{
            if(err){
                reject(err);
                return;
            }

            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });
};
    

// function to initialize program
function init() {
    questions()
    .then(projectData =>{
        writeToFile('./README.md', projectData); 
    })
    
};

// function call to initialize program
init();

const fs = require('fs');
//const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
// const questions = [
//     'What is your project name? (Required)',
//     'Enter your project description. (Required)',
//     'Enter project installation instructions.(Required)'
// ];
// array of questions for user
const questions = () => { 
    return inquirer.prompt([
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
            type: 'input',
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
            type: 'input',
            name: 'install',
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
            type: 'input',
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
            type: 'input',
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

// questions()
//     .then(projectData => {
//         console.log(projectData);
//         return generatePage(projectData);
//     })
//     .then(pageReadMe => {
//         return writeToFile(pageReadMe);
//     })
//     .then(writeFileResponse => {
//         return copyFile();
//     })
//     .then(copyFileResponse => {
//         console.log(copyFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });


const generateReadme = projData => {
    console.log(projData);
    const {project, description, ...steps} = projData;
    return `
    ## ${project}
    ![License](https://img.shields.io/badge/License-${steps.license}-brightgreen)
    
    ## Description
    ${description}

    ## Table of Contents
    This table of contents is used to help navigate a long README file:

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)   
    
    ## Installation
    ${steps.installation}
    
    ## Usage
    ${steps.usage}

    ## License
    ${steps.license}

    ## Badges
    ${steps.badges}
    
    ## Contribution
    ${steps.contribution}
    
    ## Testing
    ${steps.testing}`;
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

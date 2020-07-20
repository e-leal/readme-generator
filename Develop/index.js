// array of questions for user
const questions () => { 
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
}

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const testPrint = questions => {
    for (let i = 0; i < questions.length; i+= 1){
        console.log(questions[i]);
    }
}

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
testPrint(questions);

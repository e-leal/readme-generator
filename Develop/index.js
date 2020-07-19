// array of questions for user
const questions = [
"Please enter project title: ",
"Please enter a project description: ",
"Please enter installation instructions: ",
"Please enter usage information: ",
"Please enter contrinbution guidelines: ",
"Please enter test instructions: "
];

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


// create general template
// const generateDescription = projectDescript => {
//     if(!projectDetails){
//         return `
        
//         `
//     }
// }


module.exports = templateData => {
    console.log(templateData);
    const {project, description, ...steps} = templateData;
    return `
    ## ${project}
    
    ## Description
    ${description}
    
    ## Installation
    ${steps.installation}
    
    ## Usage
    ${steps.usage}

    ## Badges
    ${steps.badges}
    
    ## Contribution
    ${steps.contribution}
    
    ## Testing
    ${steps.testing}`;
};
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                }else{
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: gitName => {
                if(gitName){
                    return true
                }else{
                    console.log('Please enter your Github!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};


const promptProject = (portfolioData) => {
        console.log(`
        =================
        Add a New Project
        =================
        `);
        // If there's no 'projects' array property, create one
        if (!portfolioData.projects) {
            portfolioData.projects = [];
        }
        return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectName => {
                if(projectName){
                    return true
                }else{
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if(projectDescription){
                    return true
                }else{
                    console.log('Please enter the description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: gitLink => {
                if(gitLink){
                    return true
                }else{
                    console.log('Please enter the Github link to your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
    console.log(portfolioData);
});

// const fs = require('fs');//The fs module enables interacting with the file system in a way modeled on standard POSIX functions.

// const generatePage = require('./src/page-template.js');//creating link to page-template to call the generatePage function in the page-template.js file


// const pageHTML = generatePage(name, github);

// console.log(pageHTML);

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //const [name, github] = profileDataArgs;//this does the same as the above two lines

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;// if error then throw the error

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

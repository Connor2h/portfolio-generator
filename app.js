// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },

        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};


const promptProject = () => {
        console.log(`
        =================
        Add a New Project
        =================
        `);
        return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
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
            message: 'Enter the GitHub link to your project. (Required)'
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
    ]);
};
promptUser().then(answers => console.log(answers));

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

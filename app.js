// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const fs = require('fs');//The fs module enables interacting with the file system in a way modeled on standard POSIX functions.

const generatePage = require('./src/page-template.js');//creating link to page-template to call the generatePage function in the page-template.js file


const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

const [name, github] = profileDataArgs;//this does the same as lines 6 and 7 but shorter

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});

const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');

const fs = require('fs');


const promptUser = () => {
    
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (Required)', 
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)', 
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter your projects name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repolink',
            message: 'Please provide link to your repository (Required)',
            validate: repoLink => {
                if (repoLink) {
                    return true;
                } else {
                    console.log('Please provide link to repository');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please describe your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions for your project (Required)',
            validate: fileInstall => {
                if (fileInstall) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for your project (Required)',
            validate: usageINfo => {
                if (usageINfo) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project');
                    return false;
                }
            }
        },    
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Did you have any credits to declare?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.', 
            when: ({confirmCredits}) => {
                if (confirmCredits) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter test instructions for your project (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for your project');
                    return false;
                }
            }
        },    
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Choose your license type: (Choose One)',
            choices: ['MIT License', 'GNU GPLv3', 'ApacheLicense 2.0'],
            validate: licensesCheck => {
                if(licensesCheck > 1) {
                    return 'Only choose one option'
                }
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddNext',
            message: 'Would you like to enter another Readme file?',
            default: false
        }
    ])
};    

promptUser()
    .then(readmeData => {
        const pageMarkdown = generatePage(readmeData);

        fs.writeFile('./dist/README.md', pageMarkdown, err => {
            if(err) throw new Error(err);
            console.log('Readme file created!');
    });
});

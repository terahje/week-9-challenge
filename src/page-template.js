module.exports= templateData => {

    const { github, email, name, repolink, description, installation, usage, credits, tests, ...licenses} = templateData;

    if(licenses === 'ApacheLicense 2') {
        licenses === './src/ApacheLicense_2.txt';
    } else if (licenses === 'GNU GPLv3') {
        licenses === './src/GNU_GPLv3.txt';
    } else if (licenses === 'MIT License') {
        licenses === './src/MIT_License.txt';
    }
    
    return `
# ${templateData.title}

![licenses](https://img.shields.io/badge/License-${templateData.licenses}-blue.svg)

## Description
${templateData.description}
***
## Table of Contents
[Installation](#installation)<br>
[Usage](#usage)<br>
[Credits](#credits)<br>
[Tests](#tests)<br>
[Licenses](#licenses)<br>
[Questions](#question)<br>
***
## Installation
${templateData.installation}

## Usage
${templateData.usage}

## Credits
${templateData.credits}

## Tests
${templateData.tests}

## Questions :question:
For further questions on this project or future collaboration contact me at:<br>
* GitHub: ${templateData.github}
* Repository link: ${templateData.repolink}
* Email: ${templateData.email}

## License
### This license is covered under the ${templateData.licenses} license(s):
* Click ${licenses} for more information.
***


## Footer
Created by: ${templateData.github} <br>
:copyright: ${new Date().getFullYear()}
`;
};
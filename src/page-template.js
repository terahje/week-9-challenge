module.exports= templateData => {

    const { github, email, name, repolink, description, installation, usage, credits, test, ...licenses} = templateData;

    if(licenses.licenses === 'ApacheLicense_2') {
        licenses.licenses === './src/ApacheLicense_2.txt';
    } else if (licenses.licenses === 'GNU_GPLv3') {
        licenses.licenses === './src/GNU_GPLv3.txt';
    } else if (licenses.licenses === 'MIT_License') {
        licenses.licenses === './src/MIT_License.txt';
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
[License](#licenses)<br>
[Questions](#question)<br>
***
## Installation
${templateData.installationInstructions}

## Usage
${templateData.usage}

## Credits
${templateData.credits}

## Tests
${templateData.testInput}

## Questions :question:
For further questions on this project or future collaboration contact me at:<br>
* GitHub: ${templateData.github}
* Email: ${templateData.email}

## License
### This license is covered under the ${templateData.licenses} license(s):
* Click ${templateData.licenses} for more information.
***


## Footer
Created by: ${templateData.github}.<br>\
:copyright: ${new Date().getFullYear()}
`;
};
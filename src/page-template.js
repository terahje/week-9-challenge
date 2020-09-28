module.exports= templateData => {

    const { github, email, name, repolink, description, installation, usage, credits, tests, ...license} = templateData;

    if(license.licenses === 'ApacheLicense_2') {
        license.licenses === './src/ApacheLicense_2.txt';
    } else if (license.licenses === 'GNU_GPLv3') {
        license.licenses === './src/GNU_GPLv3.txt';
    } else if (license.licenses === 'MIT_License') {
        license.licenses === './src/MIT_License.txt';
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
[License](#license)<br>
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
* Email: ${templateData.email}
* Repository link: ${templateData.repolink}

## License
### This license is covered under the following license(s):
* Click ${license.licenses} for more information.
***


## Footer
* Created by: ${templateData.github} :copyright: ${new Date().getFullYear()}
`;
};
const generateReadme = readmeProfile => {

    if(readmeProfile.licenses === 'ApacheLicense_2') {
        readmeProfile.licenses === './src/ApacheLicense_2.txt';
    } else if (readmeProfile.licenses === 'GNU_GPLv3') {
        readmeProfile.licenses === './src/GNU_GPLv3.txt';
    } else if (readmeProfile.licenses === 'MIT_License') {
        readmeProfile.licenses === './src/MIT_License.txt';
    }
    
    return `
    # ${readmeProfile.title}

   ![licenses](https://img.shields.io/badge/License-${readmeProfile.licenses}-blue.svg)

    ## Description
    ${readmeProfile.description}
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
    ${readmeProfile.installationInstructions}

    ## Usage
    ${readmeProfile.usage}

    ## Credits
    ${readmeProfile.credits}

    ## Tests
    ${readmeProfile.testInstructions}

    ## Questions :question:
    For further questions on this project or future collaboration contact me at:<br>
    * GitHub: ${readmeProfile.github}
    * Email: ${readmeProfile.email}

    ## License
    ### This license is covered under the ${readmeProfile.licenses} license(s):
    * Click ${readmeProfile.licenses} for more information.
    ***


    ## Footer
    Created by: ${readmeProfile.github}.<br>\
    :copyright: ${new Date().getFullYear()}
    `;
};

module.exports = generateReadme;
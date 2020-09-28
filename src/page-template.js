const generateReadme = readmeProfile => {
    return `
    # Project Title
    ## Badges
    ## Description
    ## Table of Contents
    ## Usage
    ## Credits
    ## Contributing
    ## Tests
    ## Questions
    ## License 

    * Name: ${readmeProfile.name}
    * GitHub: ${readmeProfile.github}
    `;
};

module.exports = generateReadme;
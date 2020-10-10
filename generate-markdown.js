// function to get license
// let licenseText = "";

function getLicense(license) {
    if (license === "MIT") {
        data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)"
        // licenseText = "MIT license"
    } else if (license === "Apache 2.0") {
        data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-green)](https://opensource.org/licenses/Apache-2.0)"
        // licenseText = "Apache 2.0 license"
    }
};

// Call function
getLicense();

// function to generate markdown
function generateMarkdown(data) {
    return `
# ${data.title}
${data.license}

## Description
${data.description}.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}.

## Usage
${data.usage}.

## Contributing
${data.contributing}.

## Tests
Testing framework used: ${data.tests}.

## Questions
GitHub Profile: https://github.com/${data.github}. 
If you have any further questions, you can contact me through email at ${data.email}.

`
}

module.exports = generateMarkdown;
// function to generate markdown
function generateMarkdown (data) {
    return `<h1>${data.title}<h1>
    <h3>Description<h3>
    ${data.description}

    <h3>Table of Contents<h3>
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
    
    <h3>Installation<h3>
    ${data.installation}

    <h3>Usage<h3>
    ${data.usage}

    <h3>License<h3>
    ${data.license}

    <h3>Contributing<h3>
    ${data.contributing}

    <h3>Tests</h3>
    ${data.tests}

    <h3>Questions<h3>
    GitHub Profile: <a href ="https://github.com/${data.github}">https://github.com/${data.github}</a> .
    If you have any further questions, you can contact me through email at ${data.email}.
    
    
    
    `
}

module.exports = generateMarkdown;
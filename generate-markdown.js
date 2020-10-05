// function to generate markdown
function generateMarkdown (data) {
    return `#<h1>${data.title}<h1>
    <h3>Description<h3>
    ${data.description}

    ### Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
    
    ### Installation
    ${data.installation}

    ### Usage
    ${data.usage}

    ### License
    ${data.license}

    ### Contributing
    ${data.contributing}

    ### Tests
    ${data.tests}

    ### Questions
    GitHub Profile: https://github.com/${data.github}.
    If you have any further questions, you can contact me through email at ${data.email}.
    
    
    
    `
}

module.exports = generateMarkdown;
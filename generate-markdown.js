// function to generate markdown
function generateMarkdown (data) {
    return `<h1>${data.title}<h1>
    <h3>Description<h3>
    <h5>${data.description}</h5>
    <h3>Table of Contents<h3>
    <ul>
        * <a href="https://github.com/amyventura/readme-generator/blob/master/smdfghjkwjg-README.md#installation-">Installation</a>
        * <a href="https://github.com/amyventura/readme-generator/blob/master/smdfghjkwjg-README.md#usage-">Usage</a>
        * <a href="https://github.com/amyventura/readme-generator/blob/master/smdfghjkwjg-README.md#license-">License</a>
        * <a href="https://github.com/amyventura/readme-generator/blob/master/smdfghjkwjg-README.md#contributing-">Contributing</a>
        * <a href="https://github.com/amyventura/readme-generator/blob/master/smdfghjkwjg-README.md#tests-">Tests</a>
        * <a href="https://github.com/amyventura/readme-generator/blob/master/smdfghjkwjg-README.md#questions-">Questions</a>
    </ul>
    <h3>Installation</h3>
    <h5>${data.installation}</h5>
    <h3>Usage</h3>
    <h5>${data.usage}</h5>
    <h3>License</h3>
    <h5>${data.license}</h5>
    <h3>Contributing</h3>
    <h5>${data.contributing}</h5>
    <h3>Tests</h3>
    <h5>${data.tests}</h5>
    <h3>Questions</h3>
    <h5>GitHub Profile: <a href ="https://github.com/${data.github}">https://github.com/${data.github}.</a></h5>
    <h5>If you have any further questions, you can contact me through email at <a href="#">${data.email}.</h5>
    
    
    
    `
}

module.exports = generateMarkdown;
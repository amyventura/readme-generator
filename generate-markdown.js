// function to generate markdown
function generateMarkdown (data) {
    return `<h1>${data.title}<h1>
    <h3>Description<h3>
    <h5>${data.description}</h5>
    <h3>Table of Contents<h3>
        * [Installation] (#installation)
        * [Usage] (#usage)
        * [License] (#license)
        * [Contributing] (#contributing)
        * [Tests] (#tests)
        * [Questions] (#questions)
    <h3>Installation <a name="installation"></a></h3>
    <h5>${data.installation}</h5>
    <h3>Usage <a name="usage"></a></h3>
    <h5>${data.usage}</h5>
    <h3>License <a name="license"></a></h3>
    <h5>${data.license}</h5>
    <h3>Contributing <a name="contributing"></a></h3>
    <h5>${data.contributing}</h5>
    <h3>Tests <a name="tests"></a></h3>
    <h5>${data.tests}</h5>
    <h3>Questions <a name="questions"></a></h3>
    <h5>GitHub Profile: <a href ="https://github.com/${data.github}">https://github.com/${data.github}.</a></h5>
    <h5>If you have any further questions, you can contact me through email at ${data.email}.</h5>
    
    
    
    `
}

module.exports = generateMarkdown;
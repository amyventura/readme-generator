// function to generate markdown
function generateMarkdown (data) {
    return `<h1>${data.title}<h1>
    <h3>Description<h3>
    <h6>${data.description}</h6>
    <h3>Table of Contents<h3>
    <ul>
    <li>* Installation<a href="https://github.com/amyventura/readme-generator/blob/master/wkdjbcnwkbc-README.md#installation"></a></li>
    <li>* Usage<a href="https://github.com/amyventura/readme-generator/blob/master/wkdjbcnwkbc-README.md#usage"></a></li>
    <li>* License<a href="https://github.com/amyventura/readme-generator/blob/master/wkdjbcnwkbc-README.md#license"></a></li>
    <li>* Contributing<a href="https://github.com/amyventura/readme-generator/blob/master/wkdjbcnwkbc-README.md#contributing"></a></li>
    <li>* Tests<a href="https://github.com/amyventura/readme-generator/blob/master/wkdjbcnwkbc-README.md#tests"></a></li>
    <li>* Questions<a href="https://github.com/amyventura/readme-generator/blob/master/wkdjbcnwkbc-README.md#questions"></a></li>
    </ul>
    <h3>Installation<h3>
    <h6>${data.installation}</h6>
    <h3>Usage<h3>
    <h6>${data.usage}</h6>
    <h3>License<h3>
    <h6>${data.license}</h6>
    <h3>Contributing<h3>
    <h6>${data.contributing}</h6>
    <h3>Tests</h3>
    <h6>${data.tests}</h6>
    <h3>Questions<h3>
    <h6>GitHub Profile: <a href ="https://github.com/${data.github}">https://github.com/${data.github}.</a></h6>
    <h6>If you have any further questions, you can contact me through email at ${data.email}.</h6>
    
    
    
    `
}

module.exports = generateMarkdown;
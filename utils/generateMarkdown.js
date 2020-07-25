// function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title} 
## Table of Contents 
[Descriptions](#Descriptions)

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Test](#Test)

[Contribution](#Contribution)

[Questions](#Questions)

## Descriptions
${data.Descriptions}
## Installation
${data.Installation}
## Usage
${data.Usage}
## License
[![License: ${data.License}](https://img.shields.io/badge/License-${data.License}-yellow.svg)](https://opensource.org/licenses/${data.License})
## Test
${data.Test}
## Contributions
${data.Contribution}
## Questions 
https://github.com/${data.username}
https://${data.email}
`;
}

module.exports = generateMarkdown;

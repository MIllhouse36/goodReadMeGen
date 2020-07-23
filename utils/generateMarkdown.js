// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## ${data.Installation}
  ## ${data.Usage}
  ## ${data.License}
  ## ${data.Descriptions}
  ## ${data.Test}
  ## ${data.Contribution}
  ## ${data.Questions} 

  

`;
}

module.exports = generateMarkdown;

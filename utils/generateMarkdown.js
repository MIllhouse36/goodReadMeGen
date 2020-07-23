// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## ${data.Installation}
  ## ${data.Usage}
  ## ${data.License}
  ## ${data.Descriptions}
  ## ${data.Test}
  ## ${data.Contribution}
  ## Questions 
     ${data.username}
     ${data.email}
`;
}

module.exports = generateMarkdown;

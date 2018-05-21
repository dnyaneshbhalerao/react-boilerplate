const fs = require('fs');

const clearPackageDependency = () => {
  const file  = fs.readFileSync('package.json')
  const content = JSON.parse(file)
  
  for (const devDep in content.devDependencies) {
    content.devDependencies[devDep] = '*'
  }
  for (const dep in content.dependencies) {
    content.dependencies[dep] = '*'
  }
  
  fs.writeFileSync('package.json', JSON.stringify(content))
}
if (require.main === module) {
  clearPackageDependency();
} else {
  module.exports = clearPackageDependency;
}
import fs from 'fs';

const BRAND_NAME = 'Giedrius Tamulaitis';

const template = fs.readFileSync('./src/templates/README.template.md', 'utf-8');
const output = template
  .replaceAll('{{BRAND_NAME}}', BRAND_NAME);
fs.writeFileSync('./README.md', output);

console.log('Markdown files generated!');
// This script is run via `yarn run generate:md` command. If it gives errors please make sure that
// version of Node is 18. For some reason Node 20 is throwing errors and they were taking too long
// to solve. Preferred way is to use Node 18 via NVM (https://github.com/nvm-sh/nvm). Install it
// and then run `nvm use` in the root of the project. This will use the correct version of node.
import * as fs from 'fs';
import { SITE_URL, CONTACT_EMAIL, MY_NAME, TAGLINE, WHO_I_AM, WHAT_I_DO, LINKEDIN_URL, GITHUB_URL } from '../constants';
import projects from '../projects';

const MARKDOWN_FILES = [
  {
    templateFilename: './README.template.md',
    outputFilename: './README.md',
  },
  {
    templateFilename: './src/projects/README.template.md',
    outputFilename: './src/projects/README.md',
  },
];

const generateProjectList = (): string => {
  let output = projects.filter(obj => !obj.isComingSoon).map(project => `### **[${project.title}](/src/projects/${project.slug}/README.md)** - ${project.subtitle}`).join('\n');
  output += '\n';
  output += projects.filter(obj => obj.isComingSoon).map(project => `### **${project.title}** - ${project.subtitle} (coming soon)`).join('\n');
  return output;
};

const processTemplate = (template: string): string => {
  return template
    .replaceAll('{{MY_NAME}}', MY_NAME)
    .replaceAll('{{TAGLINE}}', TAGLINE)
    .replaceAll('{{WHO_I_AM}}', WHO_I_AM)
    .replaceAll('{{WHAT_I_DO}}', WHAT_I_DO)
    .replaceAll('{{CONTACT_EMAIL}}', CONTACT_EMAIL)
    .replaceAll('{{SITE_URL}}', SITE_URL)
    .replaceAll('{{LINKEDIN_URL}}', LINKEDIN_URL)
    .replaceAll('{{GITHUB_URL}}', GITHUB_URL)
    .replaceAll('{{PROJECT_LIST}}', generateProjectList());
};

for (const { templateFilename, outputFilename } of MARKDOWN_FILES) {
  const template = fs.readFileSync(templateFilename, 'utf-8');
  const output = processTemplate(template);
  fs.writeFileSync(outputFilename, output);
}

console.log(`Generated files ${MARKDOWN_FILES.map(obj => `'${obj.outputFilename}'`).join(', ')}!`);

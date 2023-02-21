import fs from 'fs';
import { SITE_URL, CONTACT_EMAIL, MY_NAME, TAGLINE, WHO_I_AM, WHAT_I_DO } from '../constants';

const template = fs.readFileSync('./src/templates/README.template.md', 'utf-8');
const output = template
  .replaceAll('{{MY_NAME}}', MY_NAME)
  .replaceAll('{{TAGLINE}}', TAGLINE)
  .replaceAll('{{WHO_I_AM}}', WHO_I_AM)
  .replaceAll('{{WHAT_I_DO}}', WHAT_I_DO)
  .replaceAll('{{CONTACT_EMAIL}}', CONTACT_EMAIL)
  .replaceAll('{{SITE_URL}}', SITE_URL);
fs.writeFileSync('./README.md', output);

console.log('Markdown files generated!');
import fs from 'fs';

export const SITE_URL = 'https://tamulaitis.lt';
export const CONTACT_EMAIL = 'giedrius@tamulaitis.lt';
export const MY_NAME = 'Giedrius Tamulaitis';
export const TAGLINE = 'exploring the sweet spot where art and technology collides';
export const WHO_I_AM = 'Fusing the power of technology and the beauty of music, creating a harmonious blend of innovation and artistry.';
export const WHAT_I_DO = 'As a musician, I have been honing my craft and making a name for myself in the industry. My unique blend of genres, including rock, pop, and electronic, creates a sound that is both fresh and familiar. I have a natural talent for writing catchy hooks and memorable melodies which has helped me to gain a dedicated fan base. I pride myself on my creative approach to music and my undeniable stage presence. I am determined to continue making waves in the industry and am excited for what the future holds.';

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
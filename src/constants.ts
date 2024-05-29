export const MY_NAME = 'Giedrius Tamulaitis';
export const TAGLINE = 'fascinated by technology and arts, exploring the sweet spot where the two collide';
export const WHO_I_AM = 'I\'m Giedrius, a resident of Amsterdam originally hailing from Vilnius. Fascinated by technology and arts, exploring the sweet spot where the two collide. Here I share the stories about my projects.';
export const WHAT_I_DO = 'My fascination with technology and arts started when my father bought me my first computer back in 1995. Since then I am on a constant journey of learning, building and experimenting. I love both technology and arts and am most fascinated to work on projects where the two go hand in hand. Currently mostly focused on a professional career as a technology leader and raising an amazing daughter, I still try to find the time to work on something creative and fun. I love to meet like minded individuals, so if you found some of my projects interesting, have something to suggest or want to collaborate, don\'t hesitate to drop me a line!';
export const WHAT_IS_THIS_PAGE = 'technology & art projects';
export const CONTACT_EMAIL = 'giedrius@tamulaitis.lt';
export const SITE_URL = 'https://tamulaitis.lt';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/giedriustamulaitis';
export const GITHUB_URL = 'https://github.com/GiedriusT';

export const NOT_FOUND_PAGE_TITLE = 'Nothing found at this address!';
export const NOT_FOUND_PAGE_ARTICLE = `# ${NOT_FOUND_PAGE_TITLE}\n\nPlease visit the [homepage](/) to find other interesting information.`;
export const NOT_FOUND_SECRET_TITLE = NOT_FOUND_PAGE_TITLE;
export const NOT_FOUND_SECRET_ARTICLE = NOT_FOUND_PAGE_ARTICLE;
export const NOT_FOUND_PROJECT_TITLE = NOT_FOUND_PAGE_TITLE;
// eslint-disable-next-line max-len
export const NOT_FOUND_PROJECT_ARTICLE = (slug: string | undefined) => `# ${NOT_FOUND_PROJECT_TITLE}\n\nNo project was found at this address, maybe it got renamed. Please visit the [homepage](/) and explore or [search for info about '${slug}'](https://www.google.com/search?q=site%3Atamulaitis.lt+${slug}).`;

// Path to the folder where project assets are stored (relative to 'public' folder)
export const PROJECT_ASSETS_PATH = 'content';

import { CONTACT_EMAIL } from '../constants';

export const languages = {
  en: 'English',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'contactButton.title': `Contact me at ${CONTACT_EMAIL}`,
    'contactButton.text': 'Contact me',

    'projectList.title': 'Projects',
    'projectList.comingSoonText': 'Coming soon: my collaborations with MC Messiah, live visuals for Boogaloo and Mondayjazz parties, attempt to solve locomotion in VR, first computer programs written in Pascal on 386 computer, tracks made with FastTracker, recording studios in smelly basements, legendary Fresh Rice Crew and more VR game prototypes.',

    'codeblock.activationText': 'Click to enable scrolling',
    'codeblock.activationTextMobile': 'Tap to enable scrolling',
    'codeblock.loadingText': 'Loading...',

    'notFoundPage.title': 'Nothing found at this address!',
    'notFoundPage.article': 'Please visit the [homepage](/) to find other interesting information.',
  },
} as const;

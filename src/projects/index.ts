import socialSequencerMd from './social-sequencer.md';
import shilMd from './shil.md';
import dialrheaMd from './dialrhea.md';
import { Project } from '../types';

const projects: Project[] = [
  {
    slug: 'social-sequencer',
    title: 'Social Sequencer',
    subtitle: 'interactive music device',
    article: socialSequencerMd,
  },
  {
    slug: 'shil',
    title: 'Shil',
    subtitle: 'video game with unique art style',
    article: shilMd,
  },
  {
    slug: 'dialrhea',
    title: 'Dialrhea',
    subtitle: 'revolutionary shitty machine',
    article: dialrheaMd,
  },
];

export default projects;
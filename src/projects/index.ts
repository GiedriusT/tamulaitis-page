import socialSequencerMd from './social-sequencer/social-sequencer.md';
import socialSequencerThumb from './social-sequencer/social-sequencer.jpg';
import socialSequencerVideo from './social-sequencer/social-sequencer.mp4';
import shilMd from './shil/shil.md';
import dialrheaMd from './dialrhea/dialrhea.md';
import { Project } from '../types';

const projects: Project[] = [
  {
    slug: 'social-sequencer',
    title: 'Social Sequencer',
    subtitle: 'interactive music device',
    article: socialSequencerMd,
    thumb: socialSequencerThumb,
    video: socialSequencerVideo,
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
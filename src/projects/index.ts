import socialSequencerMd from './social-sequencer/social-sequencer.md';
import socialSequencerThumb from './social-sequencer/social-sequencer.jpg';
import socialSequencerVideo from './social-sequencer/social-sequencer.mp4';
import shilMd from './shil/shil.md';
import shilThumb from './shil/shil.jpg';
import shilVideo from './shil/shil.mp4';
import dialrheaMd from './dialrhea/dialrhea.md';
import dialrheaThumb from './dialrhea/dialrhea.jpg';
import dialrheaVideo from './dialrhea/dialrhea.mp4';
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
    thumb: shilThumb,
    video: shilVideo,
  },
  {
    slug: 'dialrhea',
    title: 'Dialrhea',
    subtitle: 'revolutionary shitty machine',
    article: dialrheaMd,
    thumb: dialrheaThumb,
    video: dialrheaVideo,
  },
];

export default projects;
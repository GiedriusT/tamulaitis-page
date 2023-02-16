import { Project } from '../types';
import { default as socialSequencer } from './social-sequencer';
import { default as shil } from './shil';
import { default as dialrhea } from './dialrhea';
import { default as skraidantisRadijas } from './skraidantis-radijas';
import { default as sewers } from './sewers';

const projects: Project[] = [
  socialSequencer,
  shil,
  dialrhea,
  skraidantisRadijas,
  sewers,
];

export default projects;
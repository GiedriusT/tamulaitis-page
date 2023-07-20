import { ProjectMedia } from '../types';
import { default as socialSequencer } from './social-sequencer/media';
import { default as kamchatkaVinyl } from './kamchatka-vinyl/media';
import { default as dialrhea } from './dialrhea/media';
import { default as skraidantisRadijas } from './skraidantis-radijas/media';
import { default as sewers } from './sewers/media';
import { default as moonLove } from './moon-love/media';
import { default as wavetwistersVr } from './wavetwisters-vr/media';
import { default as captainBadass } from './captain-badass/media';
import { default as bembisBembioMotina } from './bembis-bembio-motina/media';

const projects: Record<string, ProjectMedia> = {
  socialSequencer,
  kamchatkaVinyl,
  dialrhea,
  skraidantisRadijas,
  sewers,
  moonLove,
  wavetwistersVr,
  captainBadass,
  bembisBembioMotina,
};

export default projects;
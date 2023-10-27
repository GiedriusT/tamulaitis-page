import { ProjectMedia } from '../types';
import socialSequencer from './social-sequencer/media';
import kamchatkaVinyl from './kamchatka-vinyl/media';
import dialrhea from './dialrhea/media';
import skraidantisRadijas from './skraidantis-radijas/media';
import sewers from './sewers/media';
import moonLove from './moon-love/media';
import wavetwistersVr from './wavetwisters-vr/media';
import captainBadass from './captain-badass/media';
import bembisBembioMotina from './bembis-bembio-motina/media';

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

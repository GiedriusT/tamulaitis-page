import { Project } from '../../types';
import sewersMd from './README.md';
import sewersThumb from './sewers.jpg';
import sewersVideo from './sewers.mp4';

const project: Project = {
  slug: 'sewers',
  title: 'Sewers EP',
  subtitle: 'album released as a game console cartidge',
  article: sewersMd,
  thumb: sewersThumb,
  video: sewersVideo,
};

export default project;

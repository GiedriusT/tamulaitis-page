import shilMd from './README.md';
import shilThumb from './shil.jpg';
import shilVideo from './shil.mp4';
import { Project } from '../../types';

const project: Project = {
  slug: 'shil',
  title: 'Shil',
  subtitle: 'video game with unique art style',
  article: shilMd,
  thumb: shilThumb,
  video: shilVideo,
};

export default project;

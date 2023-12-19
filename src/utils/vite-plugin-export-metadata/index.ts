import { writeFileSync } from 'node:fs';
import { resolveOptions } from './options';
import { UserOptions } from './types';
import { getProjectPageTitle } from '../metadata';
import projects from '../../projects';
import { getProjectThumbUrl } from '../projects';

function exportMetadataPlugin(options: UserOptions = {}) {
  const resolvedOptions = resolveOptions(options);
  return {
    name: 'vite-plugin-export-metadata',
    closeBundle() {
      const outFilename = `./${resolvedOptions.outDir}/metadata.json`;
      const outMetadata = projects.map((project) => ({
        ...project,
        metaTitle: getProjectPageTitle(project),
        metaImage: getProjectThumbUrl(project.slug),
      }));

      writeFileSync(outFilename, JSON.stringify(outMetadata));
    },
  };
}

export default exportMetadataPlugin;

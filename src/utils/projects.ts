import type { MarkdownInstance } from 'astro';
import { PROJECT_ASSETS_PATH } from '../constants';
import type { Project } from '../types';
import projects from '../projects';
import { absoluteUrl } from './url';

export type ProjectMarkdownFrontmatter = Omit<Project, 'slug'>;
type ProjectMarkdownInstance = MarkdownInstance<ProjectMarkdownFrontmatter>;

export const getProjects = (includeHidden: boolean = false): Project[] => projects.filter((o) => includeHidden || !o.isHidden);

export const getProjectThumbUrl = (projectSlug: string): string => (
  `/${PROJECT_ASSETS_PATH}/${projectSlug}/${projectSlug}.jpg`
);

export const getProjectVideoUrl = (projectSlug: string): string => (
  `/${PROJECT_ASSETS_PATH}/${projectSlug}/${projectSlug}.mp4`
);

export function getSlugFromPath(path: string): string | null {
  const filenameParts = path.split('/');
  if (filenameParts.length < 2) return null;
  return filenameParts[filenameParts.length - 2];
}

export function getMarkdownInstanceBySlug(markdownInstances: ProjectMarkdownInstance[], slug: string): ProjectMarkdownInstance | null {
  return markdownInstances.find((o) => getSlugFromPath(o.file) === slug) || null;
}

export function getProjectBySlug(slug: string): Project | null {
  // const projects = getProjects();
  return projects.find((o) => o.slug === slug) || null;
}

export function getProjectCanonicalUrl(project: Project, retunRelative: boolean = false): string {
  const relativeUrl = `/project/${project.slug}/`;
  return retunRelative ? relativeUrl : absoluteUrl(relativeUrl);
}

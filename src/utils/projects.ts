import type { MarkdownInstance, MDXInstance } from 'astro';
import { PROJECT_ASSETS_PATH } from '../constants';
import type { Project } from '../types';
import projects from '../projects';
import { absoluteUrl } from './url';

type ProjectMarkdownFrontmatter = Omit<Project, 'slug'>;
export type ProjectMdxInstance = MDXInstance<ProjectMarkdownFrontmatter>;

// TODO: Remove when MDX approach is fully working
type ProjectMarkdownInstance = MarkdownInstance<ProjectMarkdownFrontmatter>;

export const getProjects = (includeHidden: boolean = false): Project[] => projects.filter((o) => includeHidden || !o.isHidden);

export const getProjectThumbUrl = (projectSlug: string): string => (
  `/${PROJECT_ASSETS_PATH}/${projectSlug}/${projectSlug}.jpg`
);

export const getProjectVideoUrl = (projectSlug: string): string => (
  `/${PROJECT_ASSETS_PATH}/${projectSlug}/${projectSlug}.mp4`
);

// Extracts slug from temporarily generated MDX path
export function getSlugFromMdxPath(path: string): string | null {
  const filenameParts = path.split('/');
  if (filenameParts.length < 2) return null;
  return filenameParts[filenameParts.length - 2];
}

export function getMdxInstanceBySlug(mdxInstances: ProjectMdxInstance[], slug: string): ProjectMdxInstance | null {
  return mdxInstances.find((o) => getSlugFromMdxPath(o.file) === slug) || null;
}

// TODO: Remove when MDX approach is fully working
// Gets the markdown instance by slug from the original MD file path (not used anymore as we use temporary MDX file approach)
export function getMarkdownInstanceBySlug(markdownInstances: ProjectMarkdownInstance[], slug: string): ProjectMarkdownInstance | null {
  return markdownInstances.find((o) => getSlugFromPath(o.file) === slug) || null;
}

// TODO: Remove when MDX approach is fully working
// Extracts slug from original MD file path (not used anymore as we use temporary MDX file approach)
export function getSlugFromPath(path: string): string | null {
  const filenameParts = path.split('/');
  if (filenameParts.length < 2) return null;
  return filenameParts[filenameParts.length - 2];
}

export function getProjectBySlug(slug: string): Project | null {
  // const projects = getProjects();
  return projects.find((o) => o.slug === slug) || null;
}

export function getProjectCanonicalUrl(project: Project, retunRelative: boolean = false): string {
  const relativeUrl = `/project/${project.slug}/`;
  return retunRelative ? relativeUrl : absoluteUrl(relativeUrl);
}

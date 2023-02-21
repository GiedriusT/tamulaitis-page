import { ProjectMedia } from '../types';

export const getProjectMedia = async (slug?: string): Promise<ProjectMedia | null> => {
  if (!slug)
    return null;

  const thumbUrl = await import(`./${slug}/${slug}.jpg`);
  const videoUrl = await import(`./${slug}/${slug}.mp4`);
  const articleUrl = await import(`./${slug}/README.md`);
  const result = await fetch(articleUrl.default);
  const article = await result.text();
  return {
    thumbUrl: thumbUrl.default,
    videoUrl: videoUrl.default,
    article,
  };
};

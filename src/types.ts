export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  isComingSoon?: boolean;
};

export type ProjectMedia = {
  thumbUrl: string;
  videoUrl: string;
  articleUrl: string;
};

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  isComingSoon?: boolean;
}

export interface ProjectMedia {
  thumbUrl: string;
  videoUrl: string;
  article: string;
}

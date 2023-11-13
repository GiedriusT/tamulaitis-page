import type { Meta, StoryObj } from '@storybook/react';

import ArticleMarkdown from './ArticleMarkdown';

const meta = {
  title: 'Components/ArticleMarkdown',
  component: ArticleMarkdown,
} satisfies Meta<typeof ArticleMarkdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const regularArticle = `# Article Title - article subtitle

Article content here.`;

export const Regular: Story = {
  args: {
    children: regularArticle,
  },
};

const longTitleArticle = `# Article Title That Is Really Long - article subtitle that is even longer than the title

Article content here.`;

export const LongTitle: Story = {
  args: {
    children: longTitleArticle,
  },
};

const basicFormattingArticle = `# Article Title - article subtitle

Intro paragraph.

## H2 section

Paragraph in H2 section.

### H3 section

Paragraph in H3 section.

This is **bold text**.

This is a [link to external site](https://example.com). This is a **[bold link to external site](https://example.com)**.

This is a list:
- Item 1
- Item 2
- Item 3

This is v1.0 of this article.`;

export const TextFormatting: Story = {
  args: {
    children: basicFormattingArticle,
  },
};

const youtubeEmbedArticle = `# Article Title - article subtitle

Youtube embed below:

[![Dialrhea](https://img.youtube.com/vi/R2ZWpkTSonE/0.jpg)](https://www.youtube.com/watch?v=R2ZWpkTSonE)

[Watch Dialrhea in action](https://www.youtube.com/watch?v=R2ZWpkTSonE)

Youtube embed with 4/3 aspect ratio below:

[![Kamchatka EP promotional video](https://img.youtube.com/vi/Xfbk_47v_1w/0.jpg)](https://www.youtube.com/watch?v=Xfbk_47v_1w)

[Watch original Kamchatka EP promotional video](https://www.youtube.com/watch?v=Xfbk_47v_1w#aspect_4_3)

More text here.
`;

export const YoutubeEmbed: Story = {
  args: {
    children: youtubeEmbedArticle,
  },
};

const spotifyEmbedArticle = `# Article Title - article subtitle

Spotify embed below:

[Listen to Kamchatka EP on Spotify](https://open.spotify.com/album/3MFM6vUUTnfpY3vG2Wu7vI)

More text here.`;

export const SpotifyEmbed: Story = {
  args: {
    children: spotifyEmbedArticle,
  },
};

const imagesArticle = `# Article Title - article subtitle

Image:

![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp)

Two images one ofter another:

![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp)

![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp)

Full width image (#full-width attribute):

![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp#full-width)

Image with horizontal padding (#padding-on-mobile attribute):

![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp#padding-on-mobile)

More text here.`;

export const Images: Story = {
  args: {
    children: imagesArticle,
  },
};

const imageGalleriesArticle = `# Article Title - article subtitle

Image gallery:

![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp)
![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp)
![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp)
![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp)

Image galeery with horizontal padding on mobile (#padding-on-mobile attribute):

![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp#padding-on-mobile)
![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp#padding-on-mobile)
![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp#padding-on-mobile)
![Video still shot near Lying Head](https://tamulaitis.lt/images/moon-love/moon-love-video-head-in-video.webp#padding-on-mobile)

More text here.`;

export const ImageGalleries: Story = {
  args: {
    children: imageGalleriesArticle,
  },
};

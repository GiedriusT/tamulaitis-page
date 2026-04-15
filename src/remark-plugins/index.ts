import remarkImage from './remarkImage';
// import remarkArticleTitle from './remarkArticleTitle';
import remarkArticleVersion from './remarkArticleVersion';
import remarkImageGallery from './remarkImageGallery';
import remarkLink from './remarkLink';
import remarkSpotifyEmbed from './remarkSpotifyEmbed';
import remarkYoutubeEmbed from './remarkYoutubeEmbed';
import remarkCodeblock from './remarkCodeblock';

const plugins = [
  remarkCodeblock,
  remarkYoutubeEmbed,
  remarkSpotifyEmbed,
  remarkImage,
  remarkImageGallery,
  remarkArticleVersion,
  remarkLink,
];

export default plugins;

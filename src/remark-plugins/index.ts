import remarkImage from './remarkImage';
import remarkArticleTitle from './remarkArticleTitle';
import remarkArticleVersion from './remarkArticleVersion';
import remarkImageGallery from './remarkImageGallery';
import remarkLink from './remarkLink';
import remarkSpotifyEmbed from './remarkSpotifyEmbed';
import remarkYoutubeVideo from './remarkYoutubeVideo';
import remarkCodeblock from './remarkCodeblock';

const plugins = [
  remarkCodeblock,
  remarkYoutubeVideo,
  remarkSpotifyEmbed,
  remarkImage,
  remarkImageGallery,
  remarkArticleTitle,
  remarkArticleVersion,
  remarkLink,
];

export default plugins;

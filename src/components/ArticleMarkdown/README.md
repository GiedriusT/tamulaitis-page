# ArticleMarkdown component

This component wraps ReactMarkdown and adds support for advanced formatting options.

## Converting YouTube links to embeds
Logic in: [remarkYoutubeVideo.ts](./utils/remarkYoutubeVideo.ts)

YouTube links that are wrapped by empty lines will be automatically converted to embeds. Also, if it's a YouTube link with an image instrad of text, it would be completely removed as we only need them for displaying in GitHub so there is some thumbnail to the video. You should always use the text version of the link right after the image link, like:

```markdown

[![Dialrhea](https://img.youtube.com/vi/R2ZWpkTSonE/0.jpg)](https://www.youtube.com/watch?v=R2ZWpkTSonE)

[Watch Dialrhea in action](https://www.youtube.com/watch?v=R2ZWpkTSonE)

```

This way YouTube links look nice inside GitHub, but also get converted to single embed on the website.

### Support for custom aspect ratios

By default all videos will be embedded as 16:9 aspect ratio, it is however possible to specify a custom aspect ratio by adding a `#aspect_W_H` hash to the end of the url. For example to show 4:3 aspect ratio video you would use:

```markdown

[Watch original Kamchatka EP promotional video](https://www.youtube.com/watch?v=Xfbk_47v_1w#aspect_4_3)

```

## Converting Spotify links to embeds
Logic in: [remarkSpotifyEmbed.ts](./utils/remarkSpotifyEmbed.ts)

Spotify links that are wrapped in empty lines would automatically be converted to embeds. Example:

```markdown

[Listen to Kamchatka EP on Spotify](https://open.spotify.com/album/3MFM6vUUTnfpY3vG2Wu7vI)

```

## Image galleries
Logic in: [remarkImageGallery.ts](./utils/remarkImageGallery.ts)

A series of images wrapped in empty lines would be treated as gallery and converted into grid of images. Example:

```markdown

![Kamchatka Vinyl](https://tamulaitis.lt/images/kamchatka-vinyl/garo-kamchatka-ep-vinyl-horizontal.jpg)
![Kamchatka Vinyl](https://tamulaitis.lt/images/kamchatka-vinyl/garo-kamchatka-ep-vinyl-horizontal.jpg)
![Kamchatka Vinyl](https://tamulaitis.lt/images/kamchatka-vinyl/garo-kamchatka-ep-vinyl-horizontal.jpg)
![Kamchatka Vinyl](https://tamulaitis.lt/images/kamchatka-vinyl/garo-kamchatka-ep-vinyl-horizontal.jpg)

```

## Article title
Logic in: [remarkArticleTitle.ts](./utils/remarkArticleTitle.ts)

Any first level heading in the article will be treated as full article title which is in form of `{title} - {subtitle}` and therefore will be split into separate elements so they can be styled individually.
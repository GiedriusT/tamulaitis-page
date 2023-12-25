# ArticleMarkdown component

This component wraps [ReactMarkdown](https://github.com/remarkjs/react-markdown) and adds support for advanced formatting options.


## Converting YouTube links to embeds

Logic in: [remarkYoutubeVideo.ts](./utils/remarkYoutubeVideo.ts)

YouTube links that are wrapped by empty lines will be automatically converted to embeds. Also, if it's a YouTube link with an image instead of text, it would be completely removed as we only need them for displaying in GitHub so there is some thumbnail to the video. You should always use the text version of the link right after the image link, like:

```markdown

[![Watch Dialrhea in action](https://img.youtube.com/vi/R2ZWpkTSonE/0.jpg)](https://www.youtube.com/watch?v=R2ZWpkTSonE)

[Watch Dialrhea in action](https://www.youtube.com/watch?v=R2ZWpkTSonE)

```

This way YouTube links look nice inside GitHub, but also get converted to single embed on the website.


### Support for custom aspect ratios (`#aspect_W_H`)

By default all videos will be embedded as 16:9 aspect ratio, it is however possible to specify a custom aspect ratio by adding a `#aspect_W_H` hash to the end of the url. For example to show 4:3 aspect ratio video you would use:

```markdown

[![Watch original Kamchatka EP promotional video](https://img.youtube.com/vi/Xfbk_47v_1w/0.jpg)](https://www.youtube.com/watch?v=Xfbk_47v_1w)

[Watch original Kamchatka EP promotional video](https://www.youtube.com/watch?v=Xfbk_47v_1w#aspect_4_3)

```


## Converting Spotify links to embeds
Logic in: [remarkSpotifyEmbed.ts](./utils/remarkSpotifyEmbed.ts)

Spotify links that are wrapped in empty lines would automatically be converted to embeds. Example:

```markdown

[Listen to Kamchatka EP on Spotify](https://open.spotify.com/album/3MFM6vUUTnfpY3vG2Wu7vI)

```


## Images
Logic in: [remarkImage.ts](./utils/remarkImage.ts)

Images will be converted to corresponding HTML tags the standard way.

```markdown

![Bembis Bembio Motina logo](https://tamulaitis.lt/images/bembis-bembio-motina/bembis-bembio-motina-logo-strip.webp)

```

Additionally there is support for flags that can be added after `#` sign in the URL of the image. They allow having more formatting options. You can also combine multiple flags by separating them with `,`. Currently following flags are supported:


### `#full-width`

Makes image span full width on desktop screens.

```markdown

![Bembis Bembio Motina logo](https://tamulaitis.lt/images/bembis-bembio-motina/bembis-bembio-motina-logo-strip.webp#full-width)

```


### `#padding-on-mobile`

Adds horizontal padding on mobile screens (so element does not touch the ends of the screen).

```markdown

![Bembis Bembio Motina logo](https://tamulaitis.lt/images/bembis-bembio-motina/bembis-bembio-motina-logo-strip.webp#padding-on-mobile)

```

### `#animated-frames-*`

Treats image as a strip of frames placed next to one another and animates them. Currently supports:
- `#animated-frames-8` - 8 frame strip
- `#animated-frames-4` 4 frame strip

It also supports several flags allowing to fine tune the animation:
- `reversed` - animates frames in reversed order (e.g. `#animated-frames-8-reversed`)
- `Xs` or `X.YYs` - custom duration for the animation (e.g. `#animated-frames-8-3s`, `#animated-frames-8-5.5s`)

Flags can be combined, putting dash between them, like `#animated-frames-8-reversed-5s`.

```markdown

![WaveTwisters VR character frames](https://tamulaitis.lt/images/wavetwisters-vr/honey-side-walk-8.webp#animated-frames-8)

![WaveTwisters VR character frames](https://tamulaitis.lt/images/wavetwisters-vr/honey-side-walk-8.webp#animated-frames-8-reversed-5s)

```


### `#spin-on-scroll`

Spins image around it's center as the page scrolls.

```markdown

![Kamchatka Vinyl](https://tamulaitis.lt/images/kamchatka-vinyl/garo-kamchatka-ep-vinyl.webp#spin-on-scroll)

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

Image galleries also support all flags defined in [Images section](#images).


## Article title
Logic in: [remarkArticleTitle.ts](./utils/remarkArticleTitle.ts)

Any first level heading in the article will be treated as full article title which is in form of `{title} - {subtitle}` and therefore will be split into separate elements so they can be styled individually.


## Article version
Logic in: [remarkArticleVersion.ts](./utils/remarkArticleVersion.ts)

If first sentence of the last paragraph of the article contains version number (in form of `vX.Y` or `vX.Y.Z`) and the word `article` after it, it will be treated as the version of the article and special formatting will be applied. We use article versions for all unfinished articles, it goes in a form of: `This is v0.7 of this article. Coming soon: few highlights about what will be added.`


## Code blocks
Logic in: [codeElementProcessor.tsx](./utils/codeElementProcessor.tsx) and [CodeBlock component](../CodeBlock/CodeBlock.tsx)

There is support for code syntax highlighting that works the same way as in regular markdown.

````
```typescript

// Your Typescript code here

```
````

In addition to that there is support for remote code to be loaded directly from GitHub or other sources. If there is a link in the first line of the codeblock to remote file in one of supported file formats it will be automatically loaded.

````
```
Check Dialrhea code on GitHub: https://github.com/GiedriusT/dialrhea/blob/master/Dialrhea.ino
```
````

Under the hood links are also transformed into compatible alternatives, therefore you can copy paste direct GitHub links and the raw source code will be loaded. Configurations with supported formats and other details can be found [in CodeBlock component config](../CodeBlock/config.ts).
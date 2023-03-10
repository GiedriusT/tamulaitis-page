# ArticleMarkdown component

This component wraps ReactMarkdown and adds support for advanced formatting options.

## Converting YouTube links to embeds

YouTube links that are wrapped by empty lines will be automatically converted to embeds. Also, if it's a YouTube link with an image instrad of text, it would be completely removed as we only need them for displaying in GitHub so there is some thumbnail to the video. You should always use the text version of the link right after the image link, like:

```
[![Dialrhea](https://img.youtube.com/vi/R2ZWpkTSonE/0.jpg)](https://www.youtube.com/watch?v=R2ZWpkTSonE)

[Watch Dialrhea in action](https://www.youtube.com/watch?v=R2ZWpkTSonE)
```

This way YouTube links look nice inside GitHub, but also get converted to single embed on the website.
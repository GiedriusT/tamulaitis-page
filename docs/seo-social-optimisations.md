# SEO and social network sharing optimizations

The project has two problems: pages are not indexed well be Google and title and description of the index page is shown when sharing the project pages via social networks. These are standard problems for React application, however problems with indexing are not fully clear to me. Anyway, to address these issues we take the measures outlined in this document.


## Generate sitemap and robots.txt

We use `vite-plugin-sitemap` to automatically generate `sitemap.xml` and `robots.txt` during production build to help Google see all the pages.


## Overwrite project page titles and metadata dynamically

Biggest issue is that whenever you share project page via social networks the default title and description are shown instead of project specific one. It is no surprise as we use React and no server side rendering, meaning that on first load the title and metadata are static ones found in `index.html` file and only when page in initialized they are overwritten with the correct ones by `react-helmet-async` library. Google crawler seems to be smart enough these days to interpret this correctly, but social networks don't seem to be able to do that. Therefore we need some custom solution for making it work.

I chose a solution of using tiny PHP script to serve modified `index.html` file. It consists of several parts.


### Custom Vite plug-in to generate metadata

I wrote a small Vite plug-in that exports metadata for the projects to JSON file and puts it is `dist` folder during build time. You can explore the code here: [`vite-plugin-export-metadata`](../src/utils/vite-plugin-export-metadata/index.ts).


### Tiny PHP script to serve modified index page

Second part of this system is a tiny PHP script that reads `index.html` swaps metadata for project and returns it to the client. I used PHP as I am hosting my page on an "old school" server that runs Apache and PHP. It could be easily rewritten for any other runtime and server, ChatGPT was very helpful here and wrote the whole script from start to end, I didn't touch the code at all, you can look at the [`index.php` here](../public/index.php)


### Modifications to existing code

The only changes I needed to do to existing code was to change fallback from `index.html` to `index.php` in [`.htaccess`](../public/.htaccess) file and add `vite-plugin-export-metadata` plug-in to Vite configuration in [`vite.config.ts`](../vite.config.ts).


### Why not proper server side generation solution?

I started from trying to use libraries and frameworks that support SSG out of the box. This would have an additional benefit of decreasing load times as HTML would already be pre-rendered. Two approaches were tested: adding support for server side generation to `Vite` using [`vite-plugin-ssr` (now called Vike)](https://vike.dev/) plug-in and moving project away from `Vite` to [`Next.js`](https://nextjs.org/) completely. However after spending a few hours on each approach I wasn't happy with the results. With both solutions it was quite hard to adapt existing code to work with them, Vike was very poorly documented and had pretty terrible error messages, Next.js was a bit better on this regard, but both were really slow compared to blazingly fast Vite set-up that we currently have, also I am not a big fan of filesystem / folder based routing and some magic happening under the hood because things are named certain way or put into some specific folder. Also the logic of what is rendered on the server side and what is on client and what specific features can you use in which mode were a bit complicated. Given simplicity of the project it felt like an overkill to spend more time and make code more ugly since the only thing I really needed from this is correct metadata rendered for each project. This simple solution I ended up using is much more elegant and was less time consuming. And I learned how to write custom plug-ins for Vite.
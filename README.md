# Giedrius Tamulaitis

I'm Giedrius, a resident of Amsterdam originally hailing from Vilnius. Fascinated by technology and arts, exploring the sweet spot where the two collide. Here I share the stories about my projects.


## About me

My fascination with technology and arts started when my father bought me my first computer back in 1995. Since then I am on a constant journey of learning, building and experimenting. I love both technology and arts and am most fascinated to work on projects where the two go hand in hand. Currently mostly focused on a professional career as a technology leader and raising an amazing daughter, I still try to find the time to work on something creative and fun. I love to meet like minded individuals, so if you found some of my projects interesting, have something to suggest or want to collaborate, don't hesitate to drop me a line!

Contact me at [giedrius@tamulaitis.lt](mailto:giedrius@tamulaitis.lt)

Find me on [LinkedIn](https://www.linkedin.com/in/giedriustamulaitis)


## How to use the repo?

Live version is available at [https://tamulaitis.lt](https://tamulaitis.lt). You can also read markdown files directly in this repo, they are linked in [Projects](#projects) section below. It is also possible to clone this repository and [run the page locally](#running-locally) if you want to do that for whatever reason.


## Projects

### **[Social Sequencer](/public/content/social-sequencer/README.md)** - interactive music device
### **[Garo - Kamchatka](/public/content/kamchatka-vinyl/README.md)** - vinyl re-issue of my first album
### **[Dialrhea](/public/content/dialrhea/README.md)** - play Doom on rotary phone
### **[Wave Twisters VR](/public/content/wavetwisters-vr/README.md)** - ambitious game prototype
### **[Garo - Sewers](/public/content/sewers/README.md)** - album released as a game console cartridge
### **[Moon Love](/public/content/moon-love/README.md)** - unexpectedly controversial music video
### **[Skraidantis Radijas](/public/content/skraidantis-radijas/README.md)** - no nonsense radio with nonsense
### **[Captain Badass](/public/content/captain-badass/README.md)** - game that killed the company
### **[Bembis Bembio Motina](/public/content/bembis-bembio-motina/README.md)** - über eclectic record label


Coming soon: my collaborations with MC Messiah, live visuals for Boogaloo and Mondayjazz parties, attempt to solve locomotion in VR, first computer programs written in Pascal on 386 computer, tracks made with FastTracker, recording studios in smelly basements, legendary Fresh Rice Crew and more VR game prototypes.


## Stack

This page is built with `Astro` and `React`, using `Vite` under the hood and `PNPM` as package manager. Styling is done via `SCSS` following scoped `CSS module` pattern. `Playwright` is used for running automated end-to-end tests. `ESLint` and `Husky` (with `lint-staged`) are keeping the code clean and up to the standards. `GitHub Actions` are used for simple CI/CD pipeline.

During the time project went through many transformations and rewrites, you can find [full technical decision log here](./docs/tech-decision-log.md).


## Documentation
- [Markdown syntax](docs/extended-markdown-syntax.md)
- [Code style guide](docs/code-style-guide.md)
- [Creating animated videos for projects](docs/creating-videos.md)
- [Running locally](docs/running-locally.md)
- [Running end-to-end tests](src/tests/README.md)
- [Tooling set-up (ESLint, Husky, Playwright, etc.)](docs/tooling-set-up.md)
- [Remark set-up (custom markdown transformers)](src/remark-plugins/README.md)


> ***NOTE:*** This file is re-generated from [README.template.md](README.template.md) file before every commit. It can manually be re-generated by running `pnpm run generate:md`.

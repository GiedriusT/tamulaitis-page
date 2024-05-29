import type { Project } from './types';

// This file is now deprecated and all content resides in /public/content folder. This is left for now, because it's
// not really clear if this approach would work everywhere, but for now it seems to do.
const projects: Project[] = [
  {
    slug: 'social-sequencer',
    title: 'Social Sequencer',
    subtitle: 'interactive music device',
    description: 'Social Sequencer is an interactive music device that allows you to create and compose music by simply arranging cubes on a sleek and intuitive board. Each cube represents a unique note or percussion sound, allowing you to build and layer intricate melodies and beats with ease.',
  },
  {
    slug: 'kamchatka-vinyl',
    title: 'Kamchatka vinyl',
    subtitle: 'vinyl re-issue of my first album',
    description: 'This vinyl record is a re-release of my first EP titled "Kamchatka". It was originally released in 2010 as a limited edition of 50 CDs as well as digital format. To mark its ten year anniversary I decided to re-release it on vinyl.',
  },
  {
    slug: 'dialrhea',
    title: 'Dialrhea',
    subtitle: 'play Doom on rotary phone',
    description: 'Dialrhea is a rotary phone that has been repurposed to control the classic first-person shooter game Doom via Bluetooth. We built it in two days during the "Internet Of Shit" hackathon organized by Technarium crew in Vilnius, Lithuania.',
  },
  {
    slug: 'wavetwisters-vr',
    title: 'Wave Twisters VR',
    subtitle: 'ambitious game prototype',
    description: 'Wave Twisters VR is a game prototype I developed based on animated movie "Wave Twisters" released in 2001 by world\'s best turntablist Dj Q-Bert and the crew. It never got finished or released.',
  },
  {
    slug: 'sewers',
    title: 'Sewers EP',
    subtitle: 'album released as a game console cartridge',
    description: 'Sewers is my second EP, released in 2011. It revolves around the theme of Teenage Mutant Ninja Turtles, the cartoon I was absolutely fascinated by while growing up. It was released in a digital format accompanied by a limited edition of game cartridges.',
  },
  {
    slug: 'moon-love',
    title: 'Moon Love',
    subtitle: 'unexpectedly controversial music video',
    description: 'Moon love is a track and music video that we made with studio colleague Emery and amazingly talented artist Umiko. It was released in 2016 on UK based label Slime Recordings.',
  },
  {
    slug: 'skraidantis-radijas',
    title: 'Skraidantis Radijas',
    subtitle: 'no nonsense radio with nonsense',
    description: 'Skraidantis Radijas (Flying Radio in english) is a radio show we were hosting for almost 10 years. It started back in 2006 on then newly founded StartFM radio station, that promised an alternative to mainstream radio stations and focus on underground music.',
  },
  {
    slug: 'captain-badass',
    title: 'Captain Badass',
    subtitle: 'game that killed the company',
    description: 'Captain Badass is a mobile game that started as a fun two week detour from the main title we were working on and ended up taking almost a year to release and effectively killed our gaming company OSM Games.',
  },
  {
    slug: 'bembis-bembio-motina',
    title: 'Bembis Bembio Motina',
    subtitle: 'über eclectic record label',
    description: 'Bembis Bembio Motina Records is an uber eclectic record label that I started back in a day. It started as a joke and the literal translation of the name is Bamby Bamby\'s mother if you must know.',
  },
  // HIDDEN PROJECTS
  {
    slug: 'shil',
    title: 'Shil',
    subtitle: 'first person action puzzler',
    description: 'Shil is a first person action puzzler set in mesmerizing monochrome world. The game is in development and looking for publishing partners.',
    isHidden: true,
  },
];

export default projects;

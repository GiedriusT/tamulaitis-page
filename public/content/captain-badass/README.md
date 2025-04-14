# Captain Badass - game that killed the company

Captain Badass is a mobile game that started as a fun two week detour from the main title we were working on and ended up taking almost a year to release and effectively killed our gaming company OSM Games. Well, at least now the world has this nice trailer.

[![Watch Captain Badass trailer](https://img.youtube.com/vi/-pWfKEBP4Rc/0.jpg)](https://www.youtube.com/watch?v=-pWfKEBP4Rc)

[Watch Captain Badass trailer](https://www.youtube.com/watch?v=-pWfKEBP4Rc)

The big idea was to use stop motion animation for all graphic elements in the game. Planes, enemies and even bullets are actual physical objects that were photographed frame by frame and then put together into animated sequences. We probably made every possible mistake while working on this game and learned enormous amount, but ultimately had to pay the hefty price.

## The Idea

We had a small game development studio and we were working on our main title Puke'n'Roll. The whole company started from the idea for that game but it was a bit above our competences at the time. The development went slowly, especially the coding part. Everybody was a bit tired from not releasing anything and we had some spare illustrator / animator capacity in the team. So our art lead Andrius Labašauskas came up with an idea to make a simple game where all objects were captured using stop motion animation. We liked the idea and green-lighted it. We caped the timeline to around two weeks and agreed that we will be working on weekends on this fun side project. We chose fruits and vegetables as the main theme, because they were colorful, diverse and cheap. We decided that the game will be a vertical shooter.

![Animated Orange enemy](https://tamulaitis.lt/images/captain-badass/captain-badass-polaroid-apelsin.gif)
![Animated Orange enemy](https://tamulaitis.lt/images/captain-badass/captain-badass-polaroid-apelsin.gif)

First few weekends were lots of fun! We got all sorts of equipment including green screens, lights and good cameras from our friends working in film industry. We bought few big bags of exotic fruits and vegetables and I brought in the box of old plane models that I loved building when I was a kid. We started photographing them and trying out different animations. The photo below illustrates how our studio looked at the time.

<!-- Photos OSM Games studio -->


## Visual concept

After first tedious sessions of photographing the objects, cleaning the green screen artifacts and putting everything into animated sequences we evaluated the first results. And it looked nice! Enemies looked very different fro each other, you can see interesting details. We quickly made sprites for more than 10 different enemies and four bosses.

<!-- Photos of bosses, 2, or maybe all 4 -->

The old plastic plane models that i built as a child also worked well for the moment, they were different enough ranging from simple propeller oldies to ultrasonic stealth fighters, we came up with silly names for these planes, the most powerful one was called "Guaranteen 7000".

<!-- Photos of planes, maybe whole progression of small images -->
<!-- Easter egg: make one of the planes flyable. If user presses arrow keys while the planes are in the viewport, one of the planes moves from it's place and you can fly around with it withing the boundaries of the page, you can also shoot using space key. -->

We tried several different approaches for backgrounds over which the areal combat is taking place and settled on using actual screenshots from Google Maps. Our art lead enjoyed very much "scouting for locations" that would have distinct color pallettes and environments, like forests, snowy mountains, deserts and cities. At one point we even tried to contact Google to clarify licensing options for using these screenshots in our game which was a bit silly, but really demonstrates how serious we were about this game and believing that it will become a world wide success.

<!-- Small strips of backgrounds slowly moving like in the game,  -->


## Level design

Towards the end of the project we had stable and robust enough builds so that we could start designing levels and testing them out with real players. We did a usual mistake of making too many levels before starting testing. I remember I was working on all these different levels and trying them out myself and my main worry was that it won't be challenging enough, everything up to first boss seemed so trivial and easy. But after the first play-testing session we realized that almost none of the players were able to finish the first level. Everything was way too hard.

<!-- Few screenshots -->

It's a very hard thing to nail the challenge curve right. There are so many different types of players and other random variables affecting the complexity of the game play. What will be too easy and non engaging for one player can be crazy hard for the other. So even for games with huge budgets it's still somewhat of a gamble. But one lesson that I definitely learned during the making of "Captain Badass" is to be as agile as possible: make a small piece, test it out with real players, adjust and test again. And never trust yourself, you are the worst tester ever for your game.

<!-- Screenshots from level editor and enemy text file -->

Another super important thing is how fast can you iterate. This we did understand already back then and that's why I wrote a simple level editor where you can quickly throw together a level and test it out on actual device. We went for a very simple custom format for storing level data where different letters represent different enemy and power up types and hash symbol represent an empty space. We could then just store this as a text file, field in a database or any other form. Also it's easy to work with it on level editor, but also possible to quickly change it by modifying the text itself. That part actually worked pretty well for us and didn't take too long to come up with.


## Achievements

A place where we definitely spent way too much time was working on illustrations for achievements. Achievements, along side leaderboards we new cool thing offered by iOS at the time, it added social element to any single player game and another layer of engagement. Most of the games were approaching them practically, making simple icons for each achievement and many times reusing the same visuals. We however wanted them to stand out, so we spend time having a nice drawing for each of them.

<!-- Reel of achievement boards -->

It was really fun coming up with silly names for the achievements and looking at nice illustrations, but from practical standpoint we were just wasting our time. They are only shown very briefly and when you view all your achievements as a li
st icons are so small that you don't even see all the details. However, our illustrator was from conventional drawing background, so he loved the fact that he could spend time drawing all these different images.


## Icon

Icon is one of the hardest things to do when creating a mobile game. It's so important, because it is many times the only thing that has potential to capture the attention of the player. It is also very small and has to follow specific rules of each platform, like how rounded the corners should be etc. Of course all the competitor games are doing exactly the same and trying to make their icons stand out and attract the attention.

<!-- DIfferent icon versions -->

We had experimented with many different ideas and variations, doing tests with users and seeing which version captures most of attention, adjusting and trying again. We had quite heated arguments with our art lead as he came from artistic background and we were trying to force him to saturate colors to extreme to make icon pop out, something that seemed off and over the top from artistic point of view. I think he hated the final result, but we loved it.


## Soundtrack

I come from music background, so soundtrack was very important for me. And I was the one responsible for making one. I took a theme and made many variations that ended up being used in different levels. It was energetic, even borrowing sounds from music styles like drum'n'bass and dubstep. It was fun and people liked it in general, even thou some mentioned that it might be too intense and you feel like in the rave, not the video game.

<!-- Level background music in some nice player -->

One more thing that also happened was that during the long night sessions of working on these tracks some started popping out and I couldn't resist spending more time and making them into the full tracks. That actually ended up as a separate release featuring three banging tracks that was distributed via iTunes and other major stores of that time. The tracks themselves were not even used in the game, because they became too professional sounding and long, featuring vocals and heavy bass, something that didn't fit small speakers of iPad or iPhone.

<!-- Spotify embed of the soundtrack -->

We still sometimes talk with Donatas that we should release the vinyl version of the soundtrack, the cover with that ass resembling pear would look really cool.

<!-- Soundtrack vinyl illustrations -->


## Development Hell

After the first two weeks the remaining fruits and vegetables started to rot and so did our timeline and the whole project in general. We were nowhere near the completion and coding part was especially lagging. These were the days where the robust frameworks like Unity with it's asset store where you could buy the template for a vertical shooter and do the asset swap with some modifications were still in their infancy and still using licensing model that was way too expensive for us. So we were working with open-source framework called Cocos2D and we had to implement most of the game logic and most of the systems from scratch. We had to work directly with XCode and use Objective-C, a weird and ugly programming language that Apple had chosen for whatever reason.

<!-- Embed Enemy.mm -->

Weeks went by and we were not advancing with the project much. What was even worse that the project started taking lots of developer time from our main project sinking it even further. We also started taking in external app development work to support the company, something that we were proudly refusing to this point reasoning that we are the game development studio. Our main client became one of the biggest TV stations in Lithuania and they had strict timelines and high expectations. We ended up juggling developers between projects and work for clients was always winning the priority battles. This situation ended up dragging for almost a year and constantly sinking the company further and further. But at least after almost a year of struggle our two week fun project was ready to hit the market.


## Release disaster

Happy with our production ready build we started working on final "formalities" such as uploading the game to Apple AppStore and planning marketing efforts. What we have not taken into account was that during that year the market changed drastically, there was a flood of new games being released every day, premium model didn't work at all anymore, niche for simple single player artsy looking games was practically non existent, and you needed huge marketing budgets to get even noticed.


## Fighting Apple over profanity

What we also didn't anticipate was that Apple is going to be such a pain in the ass. After we fixed all minor technical issues that they found during their initial review, they informed us that the game cannot be published because it violates their non-profanity clause. Apparently the title "Captain Badass" was considered to be too offensive and profane. Of course we started doing what any proud and inexperienced developer would: argue with Apple trying to prove that they are wrong. We pointed out the fact that there were numerous apps and games in their store where word "badass" or even "ass" was used, cited the definition of the word 
"badass" from english dictionary, etc. Of course all we achieved was losing another month. We had to change the name.

![Captain Badass title](https://tamulaitis.lt/images/captain-badass/captain-badass-title.webp)

We considered quite a few names for the game until we finally arrived at "Captain Badass". The first working title was "Veggie Shooter", that's how XCode projects were named. We also for whatever reason were thinking about monosodium glutamate inspired name "E621", the E number for most popular flavour enhancer. I honestly don't remember logic behind all this, something related to vegetables being healthy and E621 not. Either way, pretty tragic idea for naming a video game. Another marvel of creativity was the name "Fruits Not Birds" which was basically a mashup of the names of two very popular mobile games at the time called "Fruit Ninja" and "Angry Birds". The logic behind it was to get some exposure when people are searching to one of these popular titles. When I told this to one friend who was working in marketing, he replied: "Seriously? This is your marketing strategy?".

Given all this struggle with finding the name and the fact that all assets, title screens, icon, etc. were prepared under the name and theme of Captain Badass, we decided to just change the name in the Apple AppStore to "Captain Bad...", but leave "Captain Badass" inside the game. This strategy worked and we passed Apple censorship, but of course our ability to market the game that was called differently in the app store was laughable and marketing under the name "Captain Bad..." with these three stupid dots and two generic words was equally miserable.


## Final flop

Adding to complexity of our robust marketing plan was the fact that our marketing budget for this game was zero. The company wasn't doing too well and mobile game market was already at the point when if you can't spend at least few hundred thousand on marketing, you are just throwing the money away. We did try to find the publisher for the game earlier, but we didn't get any traction. The recurring theme is their response was: "Why the hell does the world need another vertical shooter?". And our explanations about the artistic value and unique stop-motion animation didn't convince them. Rightfully so, I must admit, as there were probably hundreds of vertical shooters at the time that were better than Captain Badass. But when you are working on something for almost a year, you start to blindly believe in it.

Given the lack of marketing budget we had to do everything ourselves. We tried to reach media outlets, game review sites and anybody who might be interested. We got some coverage in local mainstream media, just because we had some connections there, but from cold sending e-mails to around 150 video game related outlets, we got two or three reviews. One of the reviews I remember very well, it basically said: "The game is garbage, but the soundtrack is banging! It looks like the game was just quickly thrown together as a marketing prop for the soundtrack release.". Flattered as I was since I was the one who composed the soundtrack, it was clear: our game sucks big time! And sales numbers confirmed that. In first two weeks after the release we have sold... 28 copies!

One more funny fact is that we decided to release this game as a premium game, meaning that you need to buy it in order to play it. Premium model was already dead on mobile at the time, and especially for simple game like this was nonsensical to expect anybody to pay while all the alternatives around were free to download. I guess we were still driven by the fact that just a year or so ago people were paying money for games like Paper Toss where you just throw piece of paper into trash can with the swipe motion or even our own game Kartuvės, which had pretty good sales numbers for the time when it was released while also being premium. We later made few first levels free and added full game as an in-app purchase, but we just spent few more days of developer time for nothing: any release momentum we had was already gone and just a few random people downloaded it and that was the end of it.


## Warblade

The original inspiration for Captain Badass was Warblade: the best vertical shooter ever! It is a modern remake of classic game Deluxe Galaga that was released for Amiga computers in 1993. Which is "loosely based" on 1981 arcade classic Galaga by Namco. Which is a sequel to Galaxian released two years before. Which is a rip off of Space Invaders, a japanese arcade classic from 1978 designed by Tomohiro Nishikado.

<!-- images of: Warblade, Delue Galaga, Galaga, Galaxian, Space Invaders -->

The mastermind behind Warblade as well as original Deluxe Galaga is Edgar Vigdal, a Norwegian game development legend who started making games for Sinclair, Commodore and Amiga systems, and continued releasing games PC, Mac and iOS. Unfortunately Edgar died in 2015 after loosing a battle to cancer, mid-way in finishing the sequel to Warblade called Warblade MK II.

<!-- Screenshots of warblade -->

Warblade is a marvel of game design: addictive, intense, challenging and very rewarding and satisfying. It has interesting weapons, good leveling up system. And when you finish all 100 levels you start over from level 1 but enemies are a bit faster and more powerful. So it creates this dynamic where after really hard final battles in end levels, you are thrown back into first level and things feel so easy and you feel overpowered. You feel like god for a while and then things become challenging again. And you can go forever like this. Actually Warblade is so addictive that I have to admit I once missed university exam because I was playing it till 7 in the morning.


<!-- Bat story -->

This is v0.8.1 of this article. Coming soon: lots of media and animated images from the game and ground shaking soundtrack that ended up being way more impressive than the game itself, maybe a story about taxidermy of the bat that was freaking everybody in the studio out.
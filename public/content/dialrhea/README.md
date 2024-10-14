# Dialrhea - play Doom on rotary phone

Dialrhea is a modified rotary phone that has been repurposed to control the classic first-person shooter game Doom via Bluetooth. We built it in two days during the "Internet Of Shit" hackathon organized by Technarium crew in Vilnius, Lithuania. The theme of this hackathon was to build devices that are completely useless, but fully functional. Here is Dialrhea in action:

[![Watch Dialrhea in action](https://img.youtube.com/vi/YNjw6ZKlyNM/0.jpg)](https://www.youtube.com/watch?v=YNjw6ZKlyNM)

[Watch Dialrhea in action](https://www.youtube.com/watch?v=YNjw6ZKlyNM)

During the same weekend we also made a "slick" promotional video demonstrating capabilities of this revolutionary shitty machine.

[![Watch Dialrhea promotional video](https://img.youtube.com/vi/RVSE1t3wHlI/0.jpg)](https://www.youtube.com/watch?v=RVSE1t3wHlI)

[Watch Dialrhea promotional video](https://www.youtube.com/watch?v=RVSE1t3wHlI)


## What's next?

I would like to host a workshop where we would build at least three more devices, and then play a Doom death match using these devices. Ideal setting would be some hacker camp or similar event. If you have ideas how to make it happen, drop me a line.


## The Story

The device was built during "Internet Of Shit" hackathon. It's an amazing event that was hosted by Technarium crew in Vilnius, Lithuania in 2017 and 2018. Award categories included the likes of "Fire Means It’s Working", "Least Private On-line Gadget", "This is Likely Illegal", and the teams were competing hard to turn these concepts into a working piece of technology.

Our device won the "Least Shitty project" award, and we were also awarded the "Public Prize" for the most popular project. It is worth mentioning that the prize was a rubber drainage cleaning pump sprayed with gold paint.

The ingenious idea was generated after a few beers with Donatas Valiulis and Džiugas Bartkus. The tree of us carried out the whole operation with me and Donatas taking care of technical aspects and Džiugas responsible for video production and promotional materials.

Džiugas also made a nice trippy video about the making of the device and the whole hackathon in general.

[![Watch Dialrhea making of video](https://img.youtube.com/vi/nAaBJcYIFyU/0.jpg)](https://www.youtube.com/watch?v=nAaBJcYIFyU)

[Watch Dialrhea making of video](https://www.youtube.com/watch?v=nAaBJcYIFyU)

There were lots of other absurd projects built during the event, if you are interested, [here is the full one hour long presentation](https://www.youtube.com/watch?v=fujuv8Wm4F8) of all projects of "Internet of Shit 2017" including Dialrhea.


## Appearances

In addition to the hackathon, the device was also a guest of honor in numerous events including Maker Faire 2017 at The Energy and Technology Museum, No Trolls Allowed hacker camp, Vilnius Tech Park birthday, Braille Satellite music festival and others.


### Vilnius Tech Park birthday 2018

I spent quite some time in a co-working space in a newly opened Sapiegos Tech Park, a start-up / scale-up infested complex of old hospital buildings in a middle of a beautiful park in the center of the city. An amazing place where I met a lot of interesting people, attended many events and heard a tons of interesting business ideas being pitched near the kitchen sink. When Sapiegos Tech Park celebrated their second birthday I offered to fire up Dialrhea as an interactive installation.

![Dialrhea at Sapiegos Tech Park 1](https://tamulaitis.lt/images/dialrhea/dialrhea-at-sapiegos-tech-park-2019-1.webp)
![Dialrhea at Sapiegos Tech Park 2](https://tamulaitis.lt/images/dialrhea/dialrhea-at-sapiegos-tech-park-2019-2.webp)

There were many interesting people from business and tech world there. In a picture above you can see well known Lithuanian entrepreneur Valdas Lašas testing out Dialrhea and enjoying it. Unfortunately, he didn't end up investing in this revolutionary shitty machine, probably because being old-school he didn't understand how to use this high tech gadget properly and instinctively tried putting the phone to his ear, which obviously gained no results.


### Braille Satellite music festival 2018

On the other side of the spectrum was Dialrhea's appearance in the Braille Satellite music festival. Taking place in an amazing Mushroom Manor in a middle of Lithuanian countryside it's a small and cozy festival for the weirder side of electronic music.

![Dialrhea at Braille Satellite 1](https://tamulaitis.lt/images/dialrhea/dialrhea-at-braille-satellite-2019-1.webp)
![Dialrhea at Braille Satellite 2](https://tamulaitis.lt/images/dialrhea/dialrhea-at-braille-satellite-2019-2.webp)

Instead of entrepreneurs this time Dialrhea was battle tested with a bunch of ravers, hipsters, musicians and people who haven't slept for three days.


## Technical details

The device is built on Arduino, and uses Bluetooth LE to communicate to the computer wirelessly. It presents itself as bluetooth keyboard and can be paired with any device supporting Bluetooth LE. Below you can see the breakdown of components powering Dialrhea.

![Insides of Dialrhea](https://tamulaitis.lt/images/dialrhea/dialrhea-insides.webp)

Although the ultimate use case for the device ended up being playing Doom, device actually has full support for multiple modes of operation:
- **Doom** - in this mode the device acts as a game controller, and is configured to control classic Doom game (using Doomsday Engine)
- **Emoji** - this mode is best used with mobile phones and allows you to type emoji's and send them to your friends
- **Boring** - in this mode Dialrhea just outputs the dialed numbers (not recommended)


### Reading data from rotary dial

The most interesting learning during the process was how the rotary dial actually works from technical point of view. I am from the generation who still remember using rotary phones so it was really interesting to understand both how simple the mechanism actually is and why I was getting electric shock while touching phone wires and playing phone mechanic only sometimes and not all the time. If you are interested [here is the video explaining the mechanism](https://www.youtube.com/watch?v=cLGd6OB8D5k).

![Working on rotary dial](https://tamulaitis.lt/images/dialrhea/dialrhea-rotary-dial.webp)
![Fighting bluetooth](https://tamulaitis.lt/images/dialrhea/dialrhea-fighting-bluetooth.webp)

After understanding how the mechanism works implementing it with Arduino was pretty much straight forward and I don't remember having any major troubles with it.


### Fighting bluetooth

Probably the biggest challenge was to make bluetooth communication work properly. We chose to use [Adafruit Bluefruit LE UART Friend](https://learn.adafruit.com/introducing-the-adafruit-bluefruit-le-uart-friend) module for the job just because I had it lying around and also I already tried to work with it while working on another project. It is a very capable module, but most problems we had were around stability and reliability. Sometimes things worked well, sometimes we were getting some errors running exactly the same code. We read lots of documentation about how to follow proper handshake protocols, do pairing correctly, etc., but then ended up just adding retry loops and timeouts everywhere so the chip has time to "come to it's senses" after each risky operation. You can see full source code for Dialrhea below.

[Check out code for Dialrhea in GitHub](https://github.com/GiedriusT/dialrhea/blob/master/Dialrhea.ino#embed)

There is actually a very interesting bug in this device that allows player to "leap" forward very quickly. I have seen it happening several times, usually after somebody was frantically bashing the device for a while. I literally have no idea why it happens or how to reproduce it, but I actually find it really cool, so I decided to just leave it in and call it a feature.


## Doom

It is no coincidence that classic Doom was chosen as a subject to be controlled by Dialrhea. I absolutely love the game and was obsessed by it while growing up. My father brought it back from his work one day in like 10 floppy disks. I had to learn how to write custom `autoexec.bat` and `config.sys` files and boot the system up from special floppy disk containing minimal version of MS-DOS and highly optimized mouse driver so there is just enough memory to run Doom on my Intel 386 33Mhz machine that only had 4Mb of RAM if I remember correctly. `"LH A:\MOUSE.COM"` was the magic line that told DOS to load mouse driver into otherwise unreachable high memory therefore winning some additional kilobytes of RAM for Doom.

![Doom 1993 title screen](https://tamulaitis.lt/images/dialrhea/doom-title-screen.webp)
![Doom in floppy discs](https://tamulaitis.lt/images/dialrhea/doom-floppy-disks.webp)

Apparently I was not the only one obsessed by Doom, many years later that I found out that Doom and it's creators "id Software" actually redefined the PC gaming market and were first to introduce shareware distribution model successfully. At one point more personal computers had Doom than Windows 95 operating system installed. There is a great book ["Masters of Doom" by David Kushner](https://www.amazon.com/Masters-Doom-Created-Transformed-Culture/dp/0812972155) that tells the story of "id Software" with lots of incredible details, highly recommended read. [This YouTube video](https://www.youtube.com/watch?v=iGdkm780730) also paints quite a nice picture about the innovation and drama inside "id Software". I still think that Doom is the best game that was ever released.


## Doom running on everything

One more reason to choose Doom to be controlled with rotary phone was that Doom is notorious for being able to run on pretty much any hardware. Well, actually crazy Doom fans are notorious for making Doom run on pretty much any hardware. Doom was made to run on calculators, microwaves, treadmills, traffic ticket validators, vapes and even pregnancy tests! If the device has a CPU and the screen, there will be some geek trying to run Doom on that machine. Subreddit [r/itrunsdoom](https://www.reddit.com/r/itrunsdoom/) has the most impressive collection of devices running Doom that I've seen so far.

![Doom running on everything](https://tamulaitis.lt/images/dialrhea/doom-running-on-everything.webp#full-width)

One of the more interesting projects was one guy [running Doom on scientific calculator powered by ~800 potatoes](https://www.youtube.com/watch?v=KFDlVgBMomQ)! Yes, potatoes! Compared to this our Dialrhea project doesn't seem so crazy.


## Competition

Apparently we were not the only ones willing to waste our time building ridiculous machine like this. Good five years after our attempt somewhere in Japan the guy named Yoshino built similar device. I have to admit his marketing campaign was way more successful than ours and the video went viral, being covered by major gaming outlets like PC Gamer, IGN and others and even provoking a tweet from John Romero (one of the people who created original Doom) himself.

![John Romero's tween about rotary phone](https://tamulaitis.lt/images/dialrhea/john-romero-tweet.webp#padding-on-mobile)

Compared to Dialrhea, Yoshino's device doesn't utilize handset at all forcing you to dial `1` to shoot (which is way less fun than frantically mashing the handset). Also you need to connect it to the computer via cable while Dialrhea is fully wireless and supports Bluetooth LE. Just another example how technologically superior solution doesn't always win the market, marketing does.


## Another 15 minutes of fame

In 2024 I went to Creative Coding Amsterdam meetup which I randomly found online. It's a gathering of people who use code to create art or are interested in doing so. I did an improvised presentation of Dialrhea and made everybody laugh. One of the members named Stanko (who by the way has [absolutely amazing generative art projects on his website](https://muffinman.io/projects/)) then posted it on [Hacker News with a title "Doom on a modified rotary phone"](https://news.ycombinator.com/item?id=41643690) and it started trending.

![Dialrhea on Hacker News](https://tamulaitis.lt/images/dialrhea/dilrhea-on-hacker-news-2024.webp#full-width)

Thousands of people flocked into my website and watched Dialrhea video, also some very interesting discussions started in Hacker News thread. Doom on everything purists were arguing that Dialrhea is just a case mod and that using the phrase "play Doom on rotary phone" is false advertising. Others were sharing how they ran Doom on favicon (that small icon in the browser tab), 64x40 pixel LED matrix or controlled it with voice via actual phone, also discussing what devices are yet left for Doom to conquer. Some spiralled off into talking about remotely controlled cockroaches, whatever that is.

<!-- This is v1.4 of this article. -->
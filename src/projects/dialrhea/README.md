# Dialrhea - revolutionary shitty machine

This device is a modified rotary phone that has been repurposed to control the classic first-person shooter game Doom via Bluetooth. We built it in two days during the "Internet Of Shit" hackathon organized by Technarium crew in Vilnius, Lithuania. The theme of this hackathon was to build devices that are completely useless, but fully functional. Here is Dialrhea in action at Vilnius TechPark:

[![Watch Dialrhea in action](https://img.youtube.com/vi/R2ZWpkTSonE/0.jpg)](https://www.youtube.com/watch?v=R2ZWpkTSonE)

[Watch Dialrhea in action](https://www.youtube.com/watch?v=R2ZWpkTSonE)

During the same weekend we also made a "slick" promotional video illustrating how life without this device is just a nightmare.

[![Watch the promotional video](https://img.youtube.com/vi/RVSE1t3wHlI/0.jpg)](https://www.youtube.com/watch?v=RVSE1t3wHlI)

[Watch the promotional video](https://www.youtube.com/watch?v=RVSE1t3wHlI)


## What's next?

I would like to host a workshop where we would build at least three more devices, and then play a Doom death match using these devices. Ideal setting would be some hacker camp or similar event.

No concrete plans for that yet, if you want to suggest a good place for such event, please contact me.


## The Story

The device was built during "Internet Of Shit" hackathon. It's an amazing event that was hosted by Technarium crew in Vilnius, Lithuania in 2017 and 2018. Award categories included the likes of "Fire Means It’s Working", "Least Private On-line Gadget", "This is Likely Illegal", and the teams were competing hard to embody these concepts into a working piece of technology.

Our device won the "Least Shitty project" award, and we were also awarded the "Public Prize" for the most popular project. It is worth mentioning that the prize was a rubber drainage cleaning pump sprayed with gold paint.

The ingenious idea was generated after a few beers with Donatas Valiulis and Džiugas Bartkus. The tree of us carried out the whole operation with me and Donatas taking care of technical aspects and Džiugas responsible for video production and promotional aspects of the project.

Džiugas also made a nice trippy video about the making of the device and the whole hackathon in general.

[![Dialrhea making of video](https://img.youtube.com/vi/nAaBJcYIFyU/0.jpg)](https://www.youtube.com/watch?v=nAaBJcYIFyU)

[Watch the making of video](https://www.youtube.com/watch?v=nAaBJcYIFyU)

There were lots of other absurd project built during the event, if you are interested, [here is the full one hour long presentation](https://www.youtube.com/watch?v=fujuv8Wm4F8) of all projects of "Internet of Shit 2017" including Dialrhea.

## Appearances

In addition to the hackathon, the device was also a guest of honor at the following events:

- Vilnius TechPark Birthday 2018
- Maker Faire 2017 at The Energy and Technology Museum
- No Trolls Allowed 2017 hacker camp
- Braille Satellite 2018 music festival
- Empty Brain Resort cultural space


## Technical details

The device is built on Arduino, and uses Bluetooth LE to communicate to the computer wirelessly. It presents itself as bluetooth keyboard and can be paired with any device supporting Bluetooth LE. Full source code and more details are available in [Dialrhea GitHub repository](https://github.com/GiedriusT/dialrhea).

Device also supports multiple modes of operation:
- **Doom** - in this mode the device acts as a game controller, and is configured to control classic Doom game (using Doomsday Engine)
- **Emoji** - this mode is best used with mobile phones and allows you to type emoji's and send them to your friends
- **Boring** - in this mode Dialrhea just outputs the dialed numbers (not recommended)


### Reading data from rotary dial

The most interesting learning during the process was how the rotary dial actually works from electrical point of view. I am from the generation who still remember using rotary phones so it was really interesting to understand both how simple the mechanism actually is and why I was getting electric shock while touching phone wires and playing phone mechanic only sometimes and not all the time. If you are interested [here is the video explaining the mechanism](https://www.youtube.com/watch?v=cLGd6OB8D5k).

![Working on rotary dial](https://tamulaitis.lt/images/dialrhea/dialrhea-rotary-dial.jpg)

After understanding how the mechanism works implementing it with Arduino was pretty much straight forward and I don't remember having any major trouble with it.


### Fighting bluetooth

Probably the biggest challenge was to make bluetooth communication work properly. We chose to use [Adafruit Bluefruit LE UART Friend](https://learn.adafruit.com/introducing-the-adafruit-bluefruit-le-uart-friend) module for the job just because I had it lying around and also I already tried to work with it while working on another project. It is a very capable module, but most problems we had were around stability and reliability. Sometimes things worked well, sometimes we were getting some errors running exactly the same code. We read lots of documentation about how to follow proper handshake protocols, do pairing properly etc., but then ended up just adding retry loops and timeouts everywhere so the chip has time to "come to it's senses" after each risky operation.

![Fighting bluetooth](https://tamulaitis.lt/images/dialrhea/dialrhea-fighting-bluetooth.jpg)

There is actually a very interesting bug in this device that allows player to "leap" forward very quickly. I have seen it happening several times, usually after somebody was frantically bashing the device for a while. I literally have no idea why it happens or how to reproduce it, but I actually find it really cool, so I decided to just leave it in and call it a feature.
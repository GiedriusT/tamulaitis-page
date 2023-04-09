# Social Sequencer - interactive music device

Social Sequencer is an interactive music device that allows you to create and compose music by simply arranging cubes on a sleek and intuitive board. Each cube represents a unique note or percussion sound, allowing you to build and layer intricate melodies and beats with ease. Here is a video of the device in action:

[![Watch Social Sequencer in action](https://img.youtube.com/vi/Z0HU_UhfQMs/0.jpg)](https://www.youtube.com/watch?v=Z0HU_UhfQMs)

[Watch Social Sequencer in action](https://www.youtube.com/watch?v=Z0HU_UhfQMs)

The full installation consists of three such boards representing different instruments, the idea here is to allow people to play together and make music collaboratively creating a social experience. We created this together with my good friend and electronics enthusiast Donatas Valiulis.


## What's next?

I want this device to travel around all sorts of art and technology events and make people happy. I'm also looking for a more long term placements in some galleries or cultural spaces. If you are interested or know a place where this would fit nicely, please let me know. I am also interested in experimenting with adding video component to the device, so that not only sound, but also vide would be controlled via it.


## Appearances

Our installation has already traveled through number of events. It was a proud participant of Vilnius TechPark second birthday festivities welcoming people from business and IT sectors, we also showed it in numerous festivals, science fairs and private events.

![Social Sequencer at Vilnius TechPark Birthday](https://tamulaitis.lt/images/social-sequencer/social-sequencer-at-vilnius-tech-park-birthday.jpg)

I really enjoyed demonstrating the device at "No Trolls Allowed 2018" hacker camp. It's an amazing event held near a beautiful lake close to Vilnius, Lithuania where people enthusiastic about building stuff gathers for two days to share their projects, participate in workshops and have a late night heated beer driven discussions about which minor version of some obscure framework is better. It was really interesting to show it to a very tech savvy crowd, discuss various technical details and dive deep into implementation nuances.

[![Watch Social Sequencer at No Trolls Allowed 2018](https://img.youtube.com/vi/PNnxecppm_s/0.jpg)](https://www.youtube.com/watch?v=PNnxecppm_s)

[Watch Social Sequencer at No Trolls Allowed 2018](https://www.youtube.com/watch?v=PNnxecppm_s)

One of the most memorable places so far thou was "The hiccup cure of Braille Satellite 2018" music festival where we set everything up around the huge old oak tree at the edge of the forest. People could play with it standing around the tree and the mixed sound was broadcasted via radio waves to the receivers scattered throughout the area.

[![Watch Social Sequencer at The hiccup cure of Braille Satellite 2018](https://img.youtube.com/vi/ca_Rx9CVtXs/0.jpg)](https://www.youtube.com/watch?v=ca_Rx9CVtXs)

[Watch Social Sequencer at The hiccup cure of Braille Satellite 2018](https://www.youtube.com/watch?v=ca_Rx9CVtXs)

The initial plan was to build the device in time for "The summit of Braille Satellite 2017" music festival. We heavily underestimated the required effort and we manage to kind of finish the first board, but when we went to the spot to set the installation up, everything started not to work, and we ended up spending half a night looking at the computer screen sitting on the wet ground under the tree being bitten by swarms of mosquitoes. It definitely doesn't help to fix software bugs when you are constantly being bitten by biological ones. We ended up leaving it with just the lights on and some cryptic writings around it to make it look more like some kind of weird conceptual art installation.


## The idea

The idea was born during Vilnius Light Festival 2017. We were roaming around the city and looking at all kinds of light installations. Many of them looked really impressive and beautiful, but they were mostly static and passive. That made me think how nice it would be to create something that was interactive and allow participants to be fully immersed in the experience. That's when the idea of creating the board with cubes representing musical notes struck me.

It was one of these rare cases where the original concept didn't really change much during the production process and the initial concept turned out to be pretty close to how the final product ended up.

The core mechanic is based on sequencer or drum machine, the devices that allow one to create repeating patterns of notes or drum sounds and play them in a loop. First analog sequencers date back to as early as 1940s and were widely adopted during 70s and 80s. Robust and feature rich versions of them are an integral part of every modern music creation software like Ableton or Cubase. Here is a nice [video walking you through the history of drum machines](https://www.youtube.com/watch?v=4d89S-jOsfY).


### Developing the concept

It was clear that building the prototype just by ourselves would be too expensive and time consuming, so I started looking for various funds and organizations that might support us prototyping the idea. I had to invent quite a lot of stories describing the device as well as things like it's "cultural importance", "unique value proposition", etc. that were needed for all sorts of applications. It was quite a tedious and boring process but the good things that came from there were that I had a much clearer idea about how the thing might works as a whole, not just from technical perspective, and also that I made this video showing how the full final installation will look and work like.

[![Watch video about the concept of Social Sequencer](https://img.youtube.com/vi/IUYDgTF7VVw/0.jpg)](https://www.youtube.com/watch?v=IUYDgTF7VVw)

[Watch video about the concept of Social Sequencer](https://www.youtube.com/watch?v=IUYDgTF7VVw)

I had to learn how to do some 3D modeling with Blender to make this video and it turned out to be much more exhausting and swearword intensive experience than I expected, but that's another story.

One more concept that came up during this process was using cubes made from different materials so the way the cube feels in your hand would correlate with what sounds that cube produces. So that for example cubes made from metal would produce "cold" and metallic sounds and the ones made from soft materials produce "soft" and "fluffy" ones.

## The technology

It was an extremely interesting project as we needed to do lots of different stuff starting from choosing the right approaches and chips, soldering electronics, programming Arduino micro-controller, using CDC machines to cut out physical boards, design and develop our own PCB boards, making it work via MIDI with Ableton and eventually migrating all audio set-up to headless mode running on Raspberry Pi vis PureData. This section is all about nitty gritty details of the process.

### Sanity check

From the technical perspective, the first problem we had to solve is to determine if there is a simple and robust enough solution to "read" the arrangement of cubes that are on the board so we could turn them into notes. Few different approaches were considered including each cube having distinct QR code and camera being placed inside the device, using RFID tags inside each cube and some weird stuff with lasers or ultra sound proximity detectors or more primitive materials like tin foil, but all of them were either too complicated or too prone for errors.

We ended up choosing the approach of using the matrix of Hall effect sensors inside the board and magnets inside each cube. This approach seemed to make most sense as Hall effect sensors were cheap, small and easy to work with and the only thing that needs to be inside the cube is a simple. We also saw potential to have cubes representing different variations of same note by using magnets of different strengths. But most importantly it seemed like a solution that we could prototype easily in a reasonable time frame.

After buying few Hall effect sensors and magnets, we constructed a first prototype using Arduino micro-controller and cardboard box from tomato juice. To our surprise everything went pretty smoothly and we was able to detect when the object with magnet is placed in the spot and when it is removed. There were some issues with the strength of the magnets being a bit too similar to cover many different variations, but it was clear that just using the polarity of magnets would allow to detect two different variations reliably. So we decided that the approach is good enough.


### The first prototype

We started working on the first prototype after we struck a deal with LinkMenų Fabrikas, a creativity and innovation space run by Vilnius Tech university. We approached them and they were interested and offered to allow us to use their premises, equipment and consultations of their engineers from various fields. We were very happy with this collaboration as LinkMenų Fabrikas turned out to be this very cool place with lots of very enthusiastic people and every sort of machine you might want starting from big soldering stations and all sorts of electronic components to huge laser engraver cutter machines and 3D printers. Many other cool projects were being built there at the time including [Dance For The Dawn installation for Burning Man 2017](https://www.youtube.com/watch?v=if3FAu5F1WI).


#### The electronics

After a round of discussions with their engineers we all agreed that the approach of using Hall effect sensors still makes most sense and that we gonna go with that. So the next thing we had to figure out is how to feed the signals from the matrix of 120 Hall effect sensors into single Arduino controller. We decided to go with the cascade of multiplexer chips. Multiplexers are chips that have multiple inputs and allow you to switch between them and read any of them through single wire. This way if we have one multiplexer for each row of sensors we can read data from all 8 of them only using two wires (one for reading data and the other for switching between the inputs). With five rows of these and the fact that they can all share control line (as we are reading the whole column at the time) it was enough to put one more multiplexer in front of the initial ones to be able to read the data from whole board of 40 Hall effect sensors via two wires. This is how the final PCB board with multiplexer set up ended up looking:

![Social Sequencer PCB board with chips](https://tamulaitis.lt/images/social-sequencer/social-sequencer-pcb-board-with-chips.jpg)

We also knew we want to have programmable LED strip inside each board to be able to illuminate and mark the current tick. This was I think the first time I tried hooking up LED strip to Arduino. I got instructions from my electronics mentor Ričardas on how to power the LEDs up from one of the big boxes that provide AC current that I have never seen before. He said to set the right voltage and turn on the device. So I turned on the device and then tried setting the right voltage. Of course that resulted in all LEDs flashing bright for a brief moment followed by darkness. There were quite a few incidents like these during the process, we were regulars at the local electronics store. After some playing around we found the right approach on how to place these LEDs and what materials to use in between them to get an effect of the whole column lighting up.

<!-- Photos or videos pf LED strip -->
![Social Sequencer in the making](https://tamulaitis.lt/images/social-sequencer/social-sequencer-two-boards-testing.jpg)

These were the two core components of the boards. Apart from that we only had to think what kind of cable and socket to use from each board to "brain" of the system where the Arduino and sound producing hardware will reside.

More details about production process coming soon.
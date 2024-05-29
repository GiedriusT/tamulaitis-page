# Social Sequencer - interactive music device

Social Sequencer is an interactive music device that allows you to create and compose music by simply arranging cubes on a sleek and intuitive board. Each cube represents a unique note or percussion sound, allowing you to build and layer intricate melodies and beats with ease. Here is a video of the device in action:

[![Watch Social Sequencer in action](https://img.youtube.com/vi/Z0HU_UhfQMs/0.jpg)](https://www.youtube.com/watch?v=Z0HU_UhfQMs)

[Watch Social Sequencer in action](https://www.youtube.com/watch?v=Z0HU_UhfQMs)

The full installation consists of three boards representing different instruments, the idea here is to allow people to play together and make music collaboratively creating a social experience. We created this together with my good friend and electronics enthusiast Donatas Valiulis.


## What's next?

I want Social Sequencer to travel around all sorts of art and technology events and spark people's interest in electronic music. I'm also looking for a more long term placements in galleries or cultural spaces. If you are interested or know a place where this would fit nicely, please let me know. I am also interested in experimenting with adding video component to the device, so that not only sound, but also video would be controlled via it.


## Appearances

Social Sequencer has already traveled through numerous locations and events. It was shown in big industrial spaces, festivals, corporate gatherings, swampy forests and private events. Here are some memorable appearances.

Social Sequencer was a proud participant of **Vilnius TechPark second birthday** festivities welcoming people from business and IT sectors for some talks, socializing and a big party.

![Social Sequencer at Vilnius TechPark Birthday](https://tamulaitis.lt/images/social-sequencer/social-sequencer-at-vilnius-tech-park-birthday.webp)

**No Trolls Allowed 2018** hacker camp was another memorable location where Social Sequencer participated. It's an amazing event held near a beautiful lake close to Vilnius, Lithuania where people enthusiastic about building stuff gathers for two days to share their projects, participate in workshops and have a late night heated beer driven discussions about which minor version of some obscure framework is better. It was really interesting to show it to a very tech savvy crowd, discuss various technical details and dive deep into implementation nuances.

[![Watch Social Sequencer at No Trolls Allowed 2018](https://img.youtube.com/vi/PNnxecppm_s/0.jpg)](https://www.youtube.com/watch?v=PNnxecppm_s)

[Watch Social Sequencer at No Trolls Allowed 2018](https://www.youtube.com/watch?v=PNnxecppm_s)

One of the first places where Social Sequencer was fully assembled and demonstrated was it's birthplace: **LinkMenų Fabrikas**. It was one of the attractions alongside a myriad of other devices, prototypes and inventions during one of their events.

![Social Sequencer at LinkMenų Fabrikas](https://tamulaitis.lt/images/social-sequencer/social-sequencer-linkmenu-1.webp)
![Social Sequencer at LinkMenų Fabrikas](https://tamulaitis.lt/images/social-sequencer/social-sequencer-linkmenu-2.webp)

The most memorable place for me is still **The hiccup cure of Braille Satellite 2018** music festival where we set everything up around the huge old oak tree at the edge of the forest. People could play with it standing around the tree and the sounds were broadcasted via radio waves to the receivers scattered throughout the area.

![Social Sequencer at LinkMenų Fabrikas](https://tamulaitis.lt/images/social-sequencer/social-sequencer-at-braille-satellite-4.webp)
![Social Sequencer at LinkMenų Fabrikas](https://tamulaitis.lt/images/social-sequencer/social-sequencer-at-braille-satellite-3.webp)
![Social Sequencer at LinkMenų Fabrikas](https://tamulaitis.lt/images/social-sequencer/social-sequencer-at-braille-satellite-2.webp)

Festival goers were also the perfect crowd for testing out this device, during night time some serious jamming was happening around the tree. People even called it "Oak Stage".

[![Watch Social Sequencer at The hiccup cure of Braille Satellite 2018](https://img.youtube.com/vi/ca_Rx9CVtXs/0.jpg)](https://www.youtube.com/watch?v=ca_Rx9CVtXs)

[Watch Social Sequencer at The hiccup cure of Braille Satellite 2018](https://www.youtube.com/watch?v=ca_Rx9CVtXs)

The initial plan was to build Social Sequencer in time for "The summit of Braille Satellite 2017" music festival. We heavily underestimated the required effort, and had to work late nights before the festival to finish the minimal version with just one board, but when we went to the spot to set the installation up, everything started not to work, and we ended up spending half a night looking at the computer screen sitting on the wet ground under the tree being bitten by swarms of mosquitoes. It definitely doesn't help to fix software bugs when you are constantly being bitten by the biological ones. We ended up leaving it with just the lights on and some cryptic writings around it to make it look more like some kind of weird conceptual art installation.


## The idea

The idea of Social Sequencer was born during Vilnius Light Festival 2016. We were roaming around the city and looking at all kinds of light installations. Many of them looked really impressive and beautiful, but they were all static. That made me think how nice it would be to create something that was interactive and allow participants to be fully immersed in the experience. That's when the idea of creating the board with cubes representing musical notes struck me.

It was one of these rare cases where the original concept didn't really change much during the production process and the initial idea turned out to be pretty close to how the final product ended up.

The core mechanic is based on sequencer or drum machine, the devices that allow one to create repeating patterns of notes or drum sounds and play them in a loop. First analog sequencers date back to as early as 1940s and were widely adopted during 70s and 80s. Robust and feature rich versions of them are an integral part of every modern music creation software like Ableton or Cubase. Here is a nice [video walking you through the history of drum machines](https://www.youtube.com/watch?v=4d89S-jOsfY).


### Developing the concept

It was clear that building the prototype just by ourselves would be too expensive and time consuming, so I started looking for various funds and organizations that might support prototyping the idea. I had to invent quite a lot of stories describing the device as well as things like it's "cultural importance", "unique value proposition", etc. that were needed for all sorts of applications. It was quite a tedious and boring process but the good things that came from there were that I had a much clearer idea about how the thing might works as a whole, not just from technical perspective, and also that I made this video showing how the final installation will look like.

[![Watch video about the concept of Social Sequencer](https://img.youtube.com/vi/IUYDgTF7VVw/0.jpg)](https://www.youtube.com/watch?v=IUYDgTF7VVw)

[Watch video about the concept of Social Sequencer](https://www.youtube.com/watch?v=IUYDgTF7VVw)

I had to learn how to do some 3D modeling with Blender to make this video and it turned out to be much more exhausting and swearword intensive experience than I expected, but that's another story.

One more concept that came up during this process was using cubes made from different materials so the way the cube feels in your hand would correlate with what sounds that cube produces. So that for example cubes made from metal would produce "cold" and metallic sounds and the ones made from soft materials produce "soft" and "fluffy" ones.

![Social Sequencer cube materials](https://tamulaitis.lt/images/social-sequencer/social-sequencer-cobe-materials.webp)

We didn't implement this part as it proved a bit too involved, costly and having many problems, like metal ones being very heavy, glass ones being sharp, etc. We ended up adding different ornaments to indicate different type of sounds.


## The technology

It was an extremely interesting working on Social Sequencer as we needed to do lots of different stuff starting from choosing the right approaches and chips, soldering electronics, programming Arduino micro-controller, using CDC machines to cut out physical boards, designing and developing our own PCB boards, making it work via MIDI with Ableton and eventually migrating all audio set-up to headless mode running on Raspberry Pi and PureData. This section is all about nitty gritty details of the process.


### Sanity check

From the technical perspective, the first problem we had to solve was to determine if there is a simple and robust enough solution to "read" the arrangement of cubes that are on the board so we could turn them into notes. Few different approaches were considered including each cube having distinct QR code and camera being placed inside the device, using RFID tags inside each cube and some weird stuff with lasers or ultra sound proximity detectors or more primitive materials like tin foil, but all of them were either too complicated or too prone for errors.

We ended up choosing the approach of using the matrix of Hall effect sensors inside the board and magnets inside each cube. This approach seemed to make most sense as Hall effect sensors were cheap, small and easy to work with and the only thing that needed to be inside the cube is a simple magnet. We also saw potential to have cubes representing different variations of same note by using magnets of different strengths. But most importantly it seemed like a solution that we could prototype easily in a reasonable time frame.

<!-- Some picture with Hall Effect sensors -->

After buying few Hall effect sensors and magnets, we constructed a first prototype using Arduino micro-controller and cardboard box from tomato juice. To our surprise everything went pretty smoothly and we were able to detect when the object with magnet is placed in the spot and when it is removed. There were some issues with the strength of the magnets being a bit too similar to cover many different variations, but it was clear that just using the polarity of magnets would allow to detect two different variations reliably. So we decided that the approach is good enough.

<!-- Picture of first prototype -->


### First prototype

We started working on the first prototype after we struck a deal with LinkMenų Fabrikas, a creativity and innovation space run by Vilnius Tech university. We approached them and they were interested and offered to allow us to use their premises, equipment and consultations from their engineers working in various fields. We were very happy with this collaboration as LinkMenų Fabrikas turned out to be this very cool place with lots of very enthusiastic people and every sort of machine you might want from big soldering stations and all sorts of electronic components to huge laser engraver cutter machines and 3D printers. Many other cool projects were being built there at the time including [Dance For The Dawn installation for Burning Man 2017](https://www.youtube.com/watch?v=if3FAu5F1WI).


#### Electronics: PCB board

After a round of discussions with their engineers we all agreed that the approach of using Hall effect sensors still makes most sense and that we gonna go with that. So the next thing we had to figure out is how to feed the signals from three matrixes of 40 Hall effect sensors each into single Arduino controller. We decided to go with the cascade of multiplexer chips. Multiplexers are chips that have multiple inputs and allow you to read any of them through single wire. This way if we have one multiplexer for each row of sensors we can read data from all 8 of them only using two wires (one for reading data and the other for switching between the inputs). With five rows of these and the fact that they can all share control line (as we are reading the whole column at the time) it was enough to put one more multiplexer in front of the initial ones to be able to read the data from whole board of 40 Hall effect sensors via two wires.

After verifying the approach on a prototyping board we designed the PCB board using Sprint Layout software. That was the first time I have made my own PCB board from scratch so it was really interesting to see how the process looks like. Apparently you just print the layout on a normal paper, use laminating machine to transfer it to the special copper covered plate, wash the paper layer and then keep the plate in a ferric chloride solution for a few hours. This removes the unwanted copper and leaves just the designed circuit layout.

![Social Sequencer PCB layout](https://tamulaitis.lt/images/social-sequencer/social-sequencer-layout-screenshot.webp)
![Social Sequencer PCB layout printed](https://tamulaitis.lt/images/social-sequencer/social-sequencer-pcb-board-print.webp)
![Social Sequencer PCB board washing](https://tamulaitis.lt/images/social-sequencer/social-sequencer-pcb-board-wash.webp)
![Social Sequencer PCB board in brine](https://tamulaitis.lt/images/social-sequencer/social-sequencer-pcb-board-in-brine.webp)
![Social Sequencer PCB board clean](https://tamulaitis.lt/images/social-sequencer/social-sequencer-pcb-board-clean.webp)
![Social Sequencer PCB board with chips](https://tamulaitis.lt/images/social-sequencer/social-sequencer-pcb-board-with-chips.webp)

After that was done we just soldered all the chips in and the board was ready to be used, this is how the finished PCB board with multiplexer set-up ended up looking:


#### Electronics: LEDs

We also knew we want to have programmable LED strip inside each board to be able to illuminate and mark the current tick. This was I think the first time I tried hooking up LED strip to Arduino. I got instructions from my electronics mentor Ričardas on how to power the LEDs up from one of the big boxes that provide AC current that I have never seen before. He said to set the right voltage and turn on the device. So I turned on the device and then tried setting the right voltage. Of course that resulted in all LEDs flashing bright for a brief moment followed by darkness. There were quite a few incidents like this during the process, we were regulars at the local electronics store.

![Social Sequencer working LED grid](https://tamulaitis.lt/images/social-sequencer/social-sequencer-strip-test.webp)
![Social Sequencer working LED grid](https://tamulaitis.lt/images/social-sequencer/social-sequencer-led-strip-test.webp)
![Social Sequencer working LED grid](https://tamulaitis.lt/images/social-sequencer/social-sequencer-led-strip-prototype.webp)
![Social Sequencer working LED grid](https://tamulaitis.lt/images/social-sequencer/social-sequencer-working-led-grid.webp)

After some playing around we found the right approach on how to place these LEDs and what materials to use in between them to get an effect of the whole column lighting up. Initially we thought of just lighting up the column that is being active, but after accidentally running the "rotating rainbow color" code on the board we decided that it is too cool to not be used. It decreased usability a bit as it was harder to spot the active column marker, especially in daylight, but the wow effect greatly out-weighted the concerns. We ended up using LED strip with WS2811 driver chips and SMD5050 LEDs that is controllable from Arduino via SPI protocol. It was actually very interesting to learn how this protocol works by using just a single control wire with any number of chained LEDs.


#### Software: Arduino

To be able to read the sensor data, update LEDs and send MIDI note messages we hooked it all to Arduino micro-controller. The implementation was pretty straight forward in theory but we ran into many problems while trying to make it work in actual settings. Most issues arose when trying to read the sensor data. Apparently things like temperature and nearby objects emitting electromagnetic radiation significantly affect the output of the Hall Effect sensors. We ended up implementing calibration routines that have to be run every time the device is installed in new place. After we resolved this issue, other things went pretty smoothly. Here is how the final code looks like:

[Check out code for Social Sequencer in GitHub](https://github.com/GiedriusT/social-sequencer/blob/main/arduino/SocialSequencer.ino#embed)


#### Software: PureData

The first prototype needed a decent laptop to run as playback of the sounds was handled by Ableton software. It was fastest to implement and try the boards out this way, but the ultimate goal was to run it fully automatically and without a need for any paid software. After some research I settled on using [PureData](https://puredata.info/), a Max/MSP based audio generator and processor that allows you to build complex audio processing pipelines via UI, that can then be run headless on any Linux based device including RaspberryPi. It's a great and extremely flexible tool, but the way it works is one hell of a mess to understand. It is based around the concept of Bang, which is kind of a signal that can trigger some action. The problem is this Bang can behave in several different ways depending on situation, and this inconsistency makes it really hard to understand. In the end I achieved what I needed with it, but whenever I had a choice whether to do something with PureData or move it to Arduino code, I always chose the latter.

![Social Sequencer PureData schemas](https://tamulaitis.lt/images/social-sequencer/social-sequencer-puredata-audio-parts.webp#full-width)

Most complex parts were actually not audio related at all. I needed a way to easily switch through multiple sound banks and that proved to nightmare to do with Pure Data, the below portion is doing just that: loading files from different folders based on what number of bank is selected. In any programming languages this would be just a few lines of code.

![Social Sequencer PureData schemas](https://tamulaitis.lt/images/social-sequencer/social-sequencer-puredata-fileloading-parts.webp)


#### Hardware

In parallel with prototyping the electronics we were working on the cases for the boards that would house all the components. It started from detailed 3D model that we were able to feed into the huge CDC cutter machine. It carved out all the cavities according to our 3D model in one go.

![Social Sequencer in the making](https://tamulaitis.lt/images/social-sequencer/social-sequencer-two-boards-testing.webp)

#### Putting it all together

Cases, brain, soldering thousand wires, etc. Different connections and cables.


## Logo

Finally when all was done I wanted to make a nice logo for the device so we can have it on social media and make some stickers with it. I ended up making it in half an hour and was really happy with the result.

<!--  -->

We made some stickers with this logo and left them lying around the device during the events. Interestingly enough a lot of people thought that these are the instructions on how to "correctly" place the cubes on the board and started arranging cubes into the "S" shape just to hear the arhythmical weird mess of sounds followed by empty pauses.


## Funding

Given the scope of the project we really wanted to get some funding, but due to non-traditional and artsy nature of the product we needed to be very creative with who to approach.

We tried applying for grants from Lithuanian Ministry of Culture and several other European Union institutions but they were not too impressed. If I remember correctly the response was more or less: we don't see any cultural value in this project, and actually we don't even understand what are you planning to do here at all.

Another attempt was to get funding for Social Sequencer from Burning Man, a legendary festival taking place in Nevada desert in USA. They are famous for all sorts of art installations and our device would be a good fit there. In theory. Boy I am happy that they ended up rejecting our project. The amount of money we were asking for was ridiculously low, timelines we provided were ten fold unrealistic, the amount of logistical problems we never thought about was huge. We did consult a guy who was a frequent Burning Man attendee and helped to set up various projects there and and after hearing our grand idea his advice was: "guys, have you considered to forget about this project and just go to the festival and have a good time". This of course didn't stop us from applying to Burning Man and still trying to pull it of, but looking back, he was definitely right. On the other hand us being absolutely terrible at estimating the amount of resources and time that will go into making the device was the only reason we actually ended up building it.

<!-- Maybe dance for dawn photo -->

Next we tried different organizations that fund art projects. They are very niche and there aren't a lot of them, but there are a few. Most we applied to were not interested, but we got some nice traction from an Awesome Foundation in San Francisco. Frankly it was mostly a single person from the foundation who really understood and absolutely loved our project. His name was Sam Altman. He is a very interesting person himself who back in the day invented and manufactured the device called "TV be Gone", a remote control allowing you to turn off any TV that has a remote control, including the ones in public spaces like bars, etc. Also was involved in [SAM ALtman achievements]

<!-- Maybe Sam Altman's photo and TV Be Gone photo -->

Unfortunately Awesome Foundation had a rule that they are not funding projects outside San Francisco area and Sam wasn't able to convince others to break this rule in the end. But he pointed us to the Pollination Project a fund that funds [what do they fund]. It was a bit weird, because we didn't see our device as helping to diminish poverty or provide equal opportunities for minorities in any shape or form. But we still applied and got some funding from them. In the end they wrote the whole article about us how we are "[something something prison population]". The article made us grin??? a bit, but we accepted the honors.

<!-- Screenshot of the article about prison population -->


## Version 2.0

By the time the first version became functional LinkMenų Fabrikas and it's director Adas became very interested in the project. Together we started looking for more ways to get funding and promoting the project. One thing we ended up pulling off was getting a grant from MITA, a [something something organisation]. They are mostly funding innovation [something something projects]. Again we had to be creative how we present the whole project. But that's where they guys from LinkMenų Fabrikas shined. They wrote a 60 page document describing the project in i very formal and beurocratic language. I have to admit when they sent me the final draft and I read the abstract, I couldn't understand that it is actually about our Social Sequencer. But they knew exactly what they are doing because we did get the grant.

<!-- Something from the grant, maybe first page with the title or something -->

That money was used to build second version that was more polished, had various optimizations made by LinkMenų engineers, had much nicer 3D printed cubes and was all white!

<!-- Gallery of images of the second version -->

They are still bringing trimmed down version of Social Sequencer to various exhibitions to present Vilnius Tech University and to show what cool projects you could be working on if you choose to join Vilnius Tech. That's really nice, but I still want to find new spots where it would be possible to demonstrate the whole installation and allow people to create an ever evolving piece of music by randomly collaborating together, if you are interested or know somebody who is, please let me know.


This is v0.9 of this article. Coming soon: more details about production of the device, working with PureData, writing bash scripts for Raspberry Pi, carving out the various layers of the device using big CNC cutter machines and smaller laser cutters.

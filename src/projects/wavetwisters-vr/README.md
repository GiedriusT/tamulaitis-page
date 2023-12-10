# Wave Twisters VR - ambitious game prototype

Wave Twisters VR is a game prototype I developed based on animated movie "Wave Twisters" released in 2001 by world's best turntablist Dj Q-Bert and the crew. It never got finished or released.

[![Watch WaveTwisters VR first trailer](https://img.youtube.com/vi/TP9ksB54OQA/0.jpg)](https://www.youtube.com/watch?v=TP9ksB54OQA)

[Watch WaveTwisters VR first trailer](https://www.youtube.com/watch?v=TP9ksB54OQA)

This is the initial demo for Google Cardboard with gaze mechanics, there is also more advanced version designed for HTC Vive that supports controls and unique shooting mechanics that you can find at the bottom of this article.

## The Idea

Around 2016 I became very interested in virtual reality. There was a lot of buzz around it back then, but not much actual hardware yet. There was already developer preview version of Oculus Rift available and Google started pushing their Cardboard project as well as other mobile phone based solutions. Everybody was experimenting, claiming that they will solve all world's problems with this new technology and eagerly waiting for first consumer versions of HTC Vive and Oculus Rift to come out.

I also wanted to jump on this train and decided to do some prototyping and exploration into this new technology. However, when I try to learn something new I always try to work on an actual project with the result rather that just following tutorials and completing example assignments. This was no exception and I started thinking what sort of project can I make. Somehow I remembered the Wave Twisters DVD that I had bought back in a day and the fact that it had some assets like frame by frame pictures of characters moving, 3D models of environments and so on. It made perfect sense to try using them and building a game around the theme of turntables and scratch sounds, topics that I was in love with for a long time.


## Original movie

The original movie was released in 2001 and was the first of it's kind (and probably the last). The whole movie was narrated by scratch sounds and phrases from various vinyl records, yet everything was connected into a coherent story full of drama, action and weird characters. It follows a crew of heroes, cleverly disguised as a team of oral hygienists, who are determined to save the lost arts of Hip Hop from total extinction. The only weapon powerful enough to defeat the sinister army of oppressors is an ancient relic known as the Wave Twister.

<!-- 4 screenshots from the movie -->

Interesting fact is that the film was entirely scripted to match the Dj Q-Bert's recording "Wave Twisters - Episode 7 Million: Sonic Wars Within The Protons" that was released back in 1998, meaning that audio portion of the movie was fully finished before the script was even started. You can find the [full version of Wave Twisters on YouTube](https://www.youtube.com/watch?v=9VkMV_5TBqE).


## First prototype

For first prototype I chose the simplest and most readily available device, the mobile phone shoved into the cardboard case made by Google. That was one of the first times I worked hands on with Unity and C# so learning curve was quite steep. I had to understand how objects and components work in general, how to work with terrain, remember some things about matrixes and wrap my head around Quaternion, a data structure Unity uses to store data about rotations. Apparently it is very efficient for computer to work with Quaternions, but at the same time extremely inefficient for human brains to understand them. I still don't fully get it, just know how to use them in different situations.

![Google Cardboard](https://tamulaitis.lt/images/wavetwisters-vr/google-cardboard.webp)

Apart from technical challenges there were interesting creative decisions that I had to make. One issue was that most of the assets were 2D hand drawn animations and my game was set in a 3D world. At first I thought about modelling 3D versions of the characters based on the 2D images, but after watching some tutorials on how to use Blender (3D modeling tool) and finally after hours of swearing finishing the model of the head of the lego figurine I understood that it will be way too much work to go this route. Luckily when I tried to just mix 3D environment with 2D sprites for enemies it worked really well and looked interesting. This is how the concept of enemies being "holograms" was born. It was one of the cases where limitation gave birth to solution that both looks attractive and requires much less work.

<!-- Image with frames of Honey animation -->

After a few weeks I already had a working prototype that looked pretty decent. Actually it looked really good for the standards of VR experiences and it performed surprisingly well. I didn't have much experience with optimizing performance of Unity projects, did not know about polygon counts, lights, shadows and many other concepts. When I was demoing the experience to other developers who were actively working with VR they were very impressed and were always asking how did I manage to make it perform so well with the quality of graphics and level of detail that I had. I basically just shrugged my shoulders in response.

You can see the demo of the first prototype at the top of the page.


## Dj Q-Bert

After good initial feedback from other developers and random people I showed it to I started looking at it as a more serious project possibly even having a commercial potential. As I was using the assets from an already existing intellectual property I first had to make sure that I can come to some sort of arrangement with the people who owned it. So I contacted Dj Q-Bert via some booking e-mail that I found online with brief description about the idea and demo video. To my surprise he replied personally and was really positive about the prototype and the idea of building a game based on Wave Twisters. He even mentioned he was finishing up the sequel to original Wave Twisters album and suggested to use the music from it in the game.

![Dj Q-Bert](https://tamulaitis.lt/images/wavetwisters-vr/dj-qbert.webp)

It was very satisfying as Dj Q-Bert is a legend in the world of turntables and scratching. We learned most of our scratching techniques back in a day by watching his tutorial videos, using battle scratch records, and analyzing scratch techniques of his and other members of his crew Invisibl Skratch Piklz by playing recordings from dj championships at half the speed. He alongside with Mix Master Mike from Beastie Boys, D-Styles, Shortkut, Yogafrog and others really moved the art of turntablism forward. The guy even collaborated with Vestax to design and engineer Vestax QFO turntable that has integrated mixer and has a layout and set of features optimized for scratching.

![Vestax QFO turntable](https://tamulaitis.lt/images/wavetwisters-vr/vestax-qfo-turntable.webp)

While writing this I found out that Dj Q-Bert finally released that sequel to Wave Twisters in 2021. There is a full version of the album on YouTube: [Dj Qbert's ORIGINS (Wave Twisters Zero)](https://www.youtube.com/watch?v=QN_LQAtM-T4).


## Pitching to funds

After things going so smoothly with Dj Q-Bert I instantly jumped on the next part which was getting required funding to develop the game. At that time VR was on the wave and many hardware manufacturers had developer funds where they were handing out money for developers to build for their platforms so that there is some content at the time when they plan to release their hardware. I spoke with quite a few of them as the video of the game play footage seemed to get them interested.

The most traction I got was from Razer, the manufacturer of all sorts of gaming equipment, who at the time were preparing for the launch of their own VR glasses called "Razer OSVR" and had an indie funding programme. We had several conversations about various aspects of the game after which they felt positive about it and asked me to send over the game design document and version of the game that would be playable on PC. It was great news for me, but the problem was that I didn't even own a proper VR headset, didn't have a PC suitable for development, had no idea how to build for this platform and didn't knew what game design document even is.

<!-- Pitch deck, game design document -->


## Second prototype

After quickly assembling a capable PC and receiving my very own HTC Vive headset I dived into learning how to build stuff for this new platform. It was a bumpy road as I had to learn many new concepts and the tooling around interacting with VR hardware wasn't that great back then.

The other challenge was coming up with completely new core mechanic as the initial prototype was built around gaze mechanics since that was the only type on input available on phone based devices. This would obviously be boring on proper headsets that had controllers that are tracked in 3D space, have buttons, etc. I had a few iterations and considered multiple mechanics until finally I settled on the interesting aiming and shotting mechanic built around involving both controllers and keeping them at specific proximity while aiming. It was unique and worked really well with the concept of your weapon being a turntable emitting the sound beam.

<!-- Demo gif of the mechanic -->
![WaveTwisters VR prototype screenshot 1](https://tamulaitis.lt/images/wavetwisters-vr/wavetwisters-vr-prototype-screenshot-1.webp)
![WaveTwisters VR prototype screenshot 2](https://tamulaitis.lt/images/wavetwisters-vr/wavetwisters-vr-prototype-screenshot-2.webp)
![WaveTwisters VR prototype screenshot 3](https://tamulaitis.lt/images/wavetwisters-vr/wavetwisters-vr-prototype-screenshot-3.webp)
![WaveTwisters VR prototype screenshot 4](https://tamulaitis.lt/images/wavetwisters-vr/wavetwisters-vr-prototype-screenshot-4.webp)

I also opted out for any type of movement for the demo as movement was something that was causing nausea in significant portion of VR users and also that allowed me to have much more simple level design. I ended up with three levels each set in different environment and featuring different types of enemies. The goal in all of them was to survive for set period of time.

<!-- ## Game design document ??? -->


## The winter came

With both playable prototype and game design document in place I was ready to go back to Razer for further negotiations. Unfortunately I noticed that my enthusiasm wasn't reflected on their side any longer. We did have several conversations and they liked the core concepts in general but I noticed the general uncertainty that is floating around, it seemed they wanted to drag the whole process. I did try to pitch the new demo to other funds as well, but the feeling of uncertainty seemed to be all over the place. The reason for that was that it was the onset of VR winter.

<!-- ![Animated Octobot](https://tamulaitis.lt/images/wavetwisters-vr/octobot-front.webp)
![Animated Octobot](https://tamulaitis.lt/images/wavetwisters-vr/octobot-front.webp) -->

Before the release of first generation of VR headsets, namely HTC Vive and Oculus Rift, the speculations about adoption were running wild. People predicted millions of sales for these devices and explosive adoption of this new technology. And after the first few months after the release of these devices when actual sales numbers started coming in it was clear that the predictions are off by orders of magnitude. Everybody started panicking and the funding for VR content stalled.

It's a classical scenario of new technology being greatly over-hyped, even when it's clear that there is no chance for it to evolve so quickly. The first HTC Vive costed like 800$ and you had to have the computer worth at least 1500$ to run anything decent in VR, and it's not the type of money people can spend just to try something "new and cool" or buy as the gift for their kids for christmas. I'm not even talking about the fact that the technology itself was still clumsy, you had the wire running from computer to the headset that you always got entangled in, also you had to set up the special sensors around the room so it's possible to track the movement and position of the headset.


## Final result

With all what was happening in the market it quickly became clear that there is no way I will get the required funding and that the project is doomed. I thought about the Kickstarter campaign and other ways of getting the required financing, also Dj Q-Bert's manager Richard promised to take it to some meetings in silicon valley as they were from the area and well connected, but nothing good came out of it. I had to admit to myself that this is the end of this project. This is the final three level prototype for HTC Vive and Oculus Rift:

[![Watch WaveTwisters VR demo gameplay](https://img.youtube.com/vi/G2MmQD5At3Y/0.jpg)](https://www.youtube.com/watch?v=G2MmQD5At3Y)

[Watch WaveTwisters VR demo gameplay](https://www.youtube.com/watch?v=G2MmQD5At3Y)

I sent this final play-through video alongside all the condolences and goodbyes to Dj Q-Bert and the crew, and this is the reply that I got from him:

![Dj Q-Bert's letter](https://tamulaitis.lt/images/wavetwisters-vr/qbert-letter.webp)

He might very well be right about this as during the last stretches I came up with idea of another VR project with very unique and artistic visual style and interesting mechanics. We'll see.

The funny thing that I realized while writing this article and choosing what media to add is that the initial cardboard version of the game looked much nicer and more impressive that the second prototype. It was brighter, more dynamic and overall looked more impressive.

This is v0.8 of this article. Coming soon: more photos, screenshots and media.
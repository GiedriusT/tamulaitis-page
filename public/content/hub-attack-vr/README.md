# Hub Attack VR - immersive with casualties

Hub Attack VR is a virtual reality game set in Sapiegos Tech Part where bunch of rude boys try to ruin your working day by blasting hardbass music and dancing on the tables.

[![Hub Attack VR gameplay](https://img.youtube.com/vi/b1u2Gw3U2zA/0.jpg)](https://www.youtube.com/watch?v=b1u2Gw3U2zA)

[Hub Attack VR gameplay](https://www.youtube.com/watch?v=b1u2Gw3U2zA)

I made it in 2017 between working on more serious VR projects in an attempt to deepen my knowledge in VR development and because I thought it is hilarious.

## The Idea

During the time when first proper consumer VR headsets were coming out and were still all the rage I was spending my days in Sapiegos Tech Park. It had just opened few months ago and I was actually one of the first people who booked the table in their fresh and shiny co-working space. I had full set-up with a powerful computer and lighthouses for HTC Vive set up around the table. I was working on a few VR prototypes trying to find that next big thing that is going to make millions. It wasn't uncommon for me to be the last one to leave the building, sometimes hacking my way into the night. During one of these nights, sitting in the empty co-working space the idea about making a small game that would be set in the replica of this co-working space came to mind.

![Sapiegos Tech Part Co-Working](https://tamulaitis.lt/images/hub-attack-vr/tech-park-vilnius-1.webp)
![Sapiegos Tech Part Co-Working](https://tamulaitis.lt/images/hub-attack-vr/tech-park-vilnius-2.webp)

If I remember correctly I was just testing out some animations that I bought from Unity Assert Store and applying them on different models. Some combinations looked very funny, especially the chubby bald guy dancing ballet. I tried putting some hardbass music on the background and ended up laughing for like half an hour straight. After that I decided I want to make a silly game with these characters.

## The mechanic

The mechanic of the game ended up being really simple. The rude boys spawn and enter from the windows and try to grab the radio. When one of them succeeds, the radio starts blasting hardbass music and all of them start to dance the funny dances. In order to stop the madness you need to hit the rude boy that has the radio. Your weapon is... tetra-pack of polish milk "Mleko Zambrowskie"!

![Hub Attack VR Rudeboy](https://tamulaitis.lt/images/hub-attack-vr/hub-attack-vr-rudeboy.webp)
![Hub Attack VR Mleko Zambrowskie](https://tamulaitis.lt/images/hub-attack-vr/mleko-zambrowskie-meadow.webp)

The somewhat exotic choice of weapon was based on the fact that the kitchen of the co-working space was always filled with boxes of "Mleko Zambrowskie" and people working in Sapiegos Tech Part already had some inside jokes about it. Diving deep into unnecessary details it's worth mentioning that Poland always have better prices than the ones we have in Lithuania, therefore big companies tend to choose polish products and "Mleko Zambrowskie" is one of them. But usually the names of these, as most polish words, sound funny to us lithuanians.

When you hit the rude boy with the pack of "Mleko Zambrowskie" he explodes into a cloud of sunflower seeds and says a funny taunt. The more of them you manage to hit during the given time, the more points you score. That's the whole gameplay loop.

## Production

From practical standpoint I wanted to learn a bit more about modelling environments in Unity, using rigged humanoid models, using nav-meshes and understand UV mapping. I modelled out the co-working space using mostly primitive shapes provided by Unity and added simple textures combined with photographed images of doors, floors and wall decorations. It looked surprisingly well with very little effort.

![Sapiegos Hub 3D model](https://tamulaitis.lt/images/hub-attack-vr/sapiegos-hub-modelled-1.webp)
![Sapiegos Hub 3D model](https://tamulaitis.lt/images/hub-attack-vr/sapiegos-hub-modelled-2.webp)

The biggest challenge was fixing the lighting. Apparently calculating realistic lighting is a very complex task as light bounces from all the surfaces in all directions, hits other surfaces and bounces again. This is very computationally heavy to do in real-time so many techniques to pre-calculate and approximate the results are used in video games to make then run smoothly at reasonable framerates.

![Sapiegos Hub 3D model](https://tamulaitis.lt/images/hub-attack-vr/sapiegos-hub-modelled-3.webp)
![Sapiegos Hub 3D model](https://tamulaitis.lt/images/hub-attack-vr/sapiegos-hub-modelled-4.webp)

One of the main techniques is baking so called lightmaps where rays from static light sources on static objects are pre-calculated and baked right into the texture so any heavy computation during the runtime can be completely avoided. This was all new to me and I struggled a lot with all sorts of artifacts of this process. Luckily there was a guy named Vilius in co-working who was making realistic looking VR models for real estate companies and knew a lot about these things. He helped me to fix the major issues.

<!-- Image of the lightmap of the level -->

All other parts went pretty smoothly and in a few days I had a prototype with the whole environment and all the mechanics working.

## Demo Day that didn't end well

The administrator of co-working space Eglė noticed me working on the game and started eagerly asking what is it all about. I told her about the idea and she pushed me to organize a demo session for people from Sapiegos Tech Park. We did that and had a great laugh. The rumour about this project spread and reached the administration of the big telecommunications company who was partially sponsoring the co-working space. They asked if we could organize a demo session for their team outing. VR was a hot new thing that many people haven't tried before and experience that was custom made in the environment that they sponsor seemed like an exciting opportunity.

Of course I agreed and we set up the proper play space in lobby area of the co-working space that had a huge TV which we used to mirror what the player with VR headset is seeing. The team from telecommunications company came in a very good mood and started trying out the experience one after another. There were giggles and jokes all around. But one of the players got so immersed in the experience that she leaped two big steps forward wanting to hit the rude boy in virtual space, but instead ended up smashing that huge TV with the controller.

I remember very well how the whole room became completely silent. First words that came from the lead of the visiting team was something along the lines of: "Well, I am not fully sure we have an insurance for this one, but we should have, right?", co-working administrator Eglė shrugged her shoulders and replied: "Probably, I hope we do". I tried to play along and act concerned, but could barely hold my excitement. "OMG, I can't believe my first VR project is so immersive" was the only thought running though my head at the time. I don't know if they had that insurance, but this story became somewhat of a legend among the tech park community.

## Release

I considered releasing Hub Attack VR on Steam, but eventually decided that it's not worth the effort. The game was tiny, didn't have proper menu and options screens, was only tested on HTC Vive headsets. I thought I would need to put in quite some more work to make it look professional, and was too busy with more serious projects. Looking from hindsight I should have gone for it and try releasing it in it's simple form. This is definitely not the game that could have become a big hit, but it had the edge and I have seen much sadder projects released on Steam VR.

<!-- Examples of stupid games on Steam VR with title screens -->

I ended up doing an unofficial release via several channels including Lithuanian VR Developers group and others. It was also used by that telecommunications company in several conferences to represent their brand and spontaneously became a highlight of an after-party of goEast international film festival 2018 in Wiesbadden, Germany where I participated with another VR project.

## UV Mapping

One of the things that I learned during this project was how UV mapping works. The models you see in video games or movies seem to have many different textures representing different parts of the body, clothing materials and other details. It is possible to make the model out of tons of small parts that each have their own material and texture but rendering that would be very expensive computationally. Given that scenes in the games have hundreds and sometimes thousands of objects at any given moment, it would be impossible to achieve decent frame rates with such modular approach. Therefore 3D models used in games are usually represented by a single object called mesh that contains all the geometry of the model. The problem this poses is that you also need to come up with a single texture that can be applied to that model. Moreover the model can be animated, meaning that geometry is changing in real-time, therefore the texture has to adapt to it.

![Hub Attack VR Rudeboy dancing](https://tamulaitis.lt/images/hub-attack-vr/hub-attack-marozelis-dancing.gif)
![Hub Attack VR Rudeboy UV map](https://tamulaitis.lt/images/hub-attack-vr/hub-attack-marozelis-uv-map.webp)

That's where the technique of UV mapping comes into play. Artists usually paint different textures directly on 3D model inside modelling software making it look nice, have shades and transitions from one part to another. But when model is exported all of these are mapped onto two dimensional plane that can be saved as a simple image file. The ugly abomination of the human body you see above is the result of such mapping. It uses some clever method of mapping certain 2D coordinate in the UV map to corresponding vertex in 3D space and therefore even when model's geometry changes the textures remain in place, they just get slightly skewed and distorted. And since 3D models are made of tons of vertices that are close to one another, the overall distortion of the textures is barely noticeable. Usually artists don't need to worry about this as both exporting and applying imported UV map is handled by modelling software and game engine.

![Mleko Zambrowskie UV mapping process](https://tamulaitis.lt/images/hub-attack-vr/mleko-zambrowskie-uvmap-process.webp#full-width)

For me however it was a bit different. I didn't knew how to use these 3D modelling tools, also I had an already exported and optimized model with UV map. But I really wanted to change the pants of the bald guy to resemble fake Adidas sportswear, have funny logo on his t-shirt and add blue eye. So I just opened the generated UV map in Photoshop and tried painting these elements over it. The blue eye and the logo were simple as they were on more or less flat surfaces in a center of 3D model. The three Adidas stripes were a bit more complicated and involved some trial and erroring as they were on the side of the leg, which is an oddly shaped object. It's not hard to see the lousy stripes on dancing rude boys if you look closely, but who cares when you are busy annihilating them with packs of "Mleko Zambrowskie"!

<!-- This is v1.0 of the article. -->
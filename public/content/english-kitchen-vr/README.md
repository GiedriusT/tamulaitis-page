# English Kitchen VR - learn English the fun way

English Kitchen VR is a platform that makes learning English language more immersive and fun by utilizing virtual reality. It ended up as a prototype and was never released commercially.

[![English Kitchen VR preview](https://img.youtube.com/vi/OXycvDH14go/0.jpg)](https://www.youtube.com/watch?v=OXycvDH14go)

[English Kitchen VR preview](https://www.youtube.com/watch?v=OXycvDH14go#aspect_4_3)

## The Idea

The idea for this project came from Vilius Juknevičius who at the time was running a company that produced realistic looking visualisations for real estate agencies that allowed buyers to walk inside VR versions of in progress real estate properties before buying them. We were working in the same co-working space and were the only two people there working on virtual reality projects.

His brother was working as an english language teacher in China, and saw that there is a huge demand for both teachers and tools that make learning english language easier, more efficient and accessible. Vilius was absolute pro at making beautiful models, environments, adding textures and lighting, but had limited skills and resources in programming. I was the exact opposite. So he offered me to work together on a pilot for virtual reality platform that would make learning English language more immersive and fun.

VR was a new thing, so everybody tried to apply it to solve all the problems that were already solved before without the use of VR with a hope that new approach will be more attractive. Trying to apply it in language learning made sense as you are putting the learner in the simulation of the real world where he will actually need to use the language. For a pilot we decided to choose the theme of a kitchen as it is universal, fruit and vegetables are very recognizable and the whole setting seemed to be colorful and fun.

## The Mechanics

After some brainstorming sessions we decided to go for simple idea of putting user inside the shoes of the cook who has to follow the recipe and put correct ingredients into the pot. As you complete the recipes one after another they become more and more complex. User can also choose difficulty setting that changes the amount of fruits and vegetables that are available. It was simple, straight forward and easy to understand.

<!--
## Production

I started prototyping the core mechanics and Vilius started working on models. He already had a lot of high quality models he was using in his real estate projects so this went fast, the most complex part was creating the curved table as we wanted user to be able to interact with all the objects while standing still in one place. I don't actually know if it was complex for him to create that curved table, but as for someone who tried to learn 3D modelling with Blender and ran out of swearwords that table looked like magic.

Photo of rounded table

Developing the gameplay and core mechanics was also going smoothly, I have already done a few projects in VR and knew my tooling pretty well. It was before the OpenXR standard was in place, so I was using VRTK tool kit to communicate with VR hardware. One thing that I learner during that project id how LODs work. LOD starnd for level of detail and is a technique of replacing detailed 3D model with less detailed versions depending of how far away from the camera it is. Here is the exmple of an object and 3 LOD variants of it.

Photo of LOD paprika or something

When objects are at the same distance from the camera the difference is obvious, and LOD2 model is looking pretty terrible. But when it is far away from the camera you can barely notice the difference.

Proto of the same object being far away.

The reason this technique is used is performance. The more triangles there are in the scene, the more work GPU has to do to render it. Even most powerful modern GPUs can quickly choke if they need to render scene with very highly detailed and not optimised models. If you look at the triangle counts for different LOD version, you can see, that lowest LOD model has Y.Yx times less triangles than most detailed version. If you have hundred objects like these the savings are huge.

There is even term triangle budgets that game developers have to regularly check to make sure that overall number of triengles that need to be rendered doesn't exceed certain numbers as otherwise the framerates will drop. It's even more important on platforms like mobile or VR. On mobile and standalone VR the problem is that the hardware is more limited due to the fact that it has to fit small form factor and be very energy efficient. On tethered VR the problem is that GPU basically needs to render each frame twice, once for each eye. Below is the recommended triangle budgets for different types of platforms.

Triangle budget reccomendations

The last step in LOD system is completely culling the object when it is really far away from the camera so it's not rendered at all, or changing it to 2D sprite image that resemples the shape of that 3D object from certain angle. It works well, but there are visual artifacts, sometimes in games you can see some objects appearing, or object doing little twitch. That's system of LOD in action.

## Demo

Shortly after the prototype was complete a series of demo sessions were organized across the schools in China. Demos went well and pupils were very happy to be able to play a VR game instead of their lessons. Teachers were also impressed by the immersion
-->

This is v0.1 of the article, more info and media coming soon.
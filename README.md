# Advanced Interactions
[Take a look at this project here!](https://besartelezi.github.io/advanced-interactions/)

Advanced Interactions with Javascript, now that's a challenge! The requirements for this project are:
- [x] A working parallax carousel.
- [x] A collage of images, and when you click on one of the images, it will enlarge and give you a short description.
- [x] Hovering over a piece of text, in this case a Pokémon's name, it will create a small pop-up image above that name with an image of what the Pokémon looks like.
- [ ] A chasing circle, a red dot must chase the cursor as long as it is within a box on the website.
- [ ] Another chasing circle, but this time it's a green dot that *runs away* from the cursor.
- [ ] Have letters that are inside a span class do something of your choosing (let the letter "e" disappear, let the letter "a" rotate, etc.).
- [x] A lightmode/darkmode switch

The minimum requirement for this project are just the three first requirements and one chasing circle of your choosing. I will however, try to finish all requirements. If I run out of time before I can finish everything, I want to at least have a functioning lightmode/darkmode switch. I think learning how to make such a switch might be very essential to becoming a pro Web Developer. Also, I hate lightmode. 

## Parallax Carousel, not Paarthurnax Carousel
I'd like to say that I know how to start with this one, but that would make me a dirty liar. For now, I will try and figure out how I'd like to start on creating a parallax carousel, and look for how other people have made their parallax carousels. </br>

The way I'm thinking of doing it, is by creating an array of objects, with the objects being different images. Then, have a 'back' and 'next' button at the sides of the carousel, that will just change the image src of the carousel to the next one in the array. But what about the parallax effect? <br>

I'll add a parallax effect to my images once I'm done with the carousel. I will admit though, that I find this part of the project to be really overwhelming. But it does make me appreciate Bootstrap a **lot** more. Figuring out how to start on this project is a challenge in and of itself.

As of now, I might need to take a step back and take in all kinds of new information. If I start on this project by just using my current knowledge of Javascript, I'll learn nothing. So the very first step will be research, *research*, and **research**!

## Fun Title Name
For now, I have decided on creating a carousel first and then adding the parallax effect on the images afterwards. I won't be using my previous idea of an array. I will try out the method of creating a carousel that is mentioned on [this website!](https://engineertodeveloper.com/create-a-carousel-with-vanilla-javascript/) <br>

The website mentioned that: *"For the initial carousel styles, we will position the carousel items relative to the carousel container; this will allow the carousel items to stack on top of each other, like a stack of papers."* </br>I have never even thought of creating the carousel like this. So hurray for research! <br>

I have also chosen to follow the steps on that website, because they're using Javascript classes, something I'm **extremely** unfamiliar with, but something I really want to learn. 

## The Ups and Downs of the Learning Experience
Thanks to the before mentioned website, I was able to create a working carousel for my project. I learned **a lot** of things by creating it by following the steps the website mentioned. I now have more knowledge about the Javascript classes, and how you can manipulate classnames to create effects with CSS. 

Adding a parallax effect was also quite easy thanks to CSS. I hope I can put everything I learned now to use in a future assignment.

## Rows, Rows, Rows your Collage!
*A collage of images, and when you click on one of the images, it will enlarge and give you a short description.* That's my current objective! For now, my main goal is to create this with Javascript classes, so I can experiment a bit more with something I still don't feel comfortable using. <br>

The first problem I had here, was that I was unable to add an eventListener to all classes that were a part of the collage. I tried using getElements and querySelectorAll, but it didn't work. The normal querySelector works, but only for the very first element that has the class I need. Now I'm considering selecting each and every single image by ID, adding an eventListener to them, so that all images use the same function class. I can add if functions in the class function, so that the text that appears will change depending on the image. <br>

Writing the current problem down really helped me to get a clearer understanding of what's going wrong and what steps I can take. So remember this kids, **when in doubt, write it out!!**

## "You're grounded, for 'till Collage!"
Now that I am able to console log the ID's of the images in collage I clicked, I will try to figure out how to enlarge these pictures and add a piece of text to it as well. I'm learning more about Modal Images right now, as that is the kind of images I want my collage to have. But as of now, I'd like to utilize what I learned from the carousel in the collage. Meaning, that I want to use elements in my JS, and on clicks, change the HTML class of my elements so different CSS layouts will apply to them. </br>

## Light V.S. Dark: "The Eternal Battle!"
I created a darkmode and lightmode for the website pretty quickly. I used the same methods of changing the classnames with javascript so a new CSS code would be applied. The website already had a darkmode class for the body available in the CSS, I just had to make the button itself work with JS.

## Who's that Pokémon?
Because I made the collage earlier, I was able to finish this part of the project quite quickly. Is what I'd like to say, but, I did spend a lot of time trying to use JS classes in this part of the project. Unfortunately, I wasn't quite able to figure out how to do that. The hovering over the Pokémon's names to see the pictures works, but I would've liked to use classes for it. </br>

I will try to redo this part in classes, but for now, the 8 separate functions will have to do.

## Fun Features I'd Like to Add
- [ ] Icons at the bottom of the carousel, so the user can see how many images there are and on what image he currently is.
- [ ] A timeOut so that every 5 seconds, the current image in the carousel changes.
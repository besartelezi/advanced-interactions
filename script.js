Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

class Slider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.sliderItems = sliderElement.getElementsByClassName("SliderItem");
        this.nextButton = sliderElement.querySelector(".SliderControlNext");
        this.previousButton = sliderElement.querySelector(".SliderControlPrevious");
        this.currentIndex = 0;
        this.previousItemIndex = this.sliderItems.length -1;
        this.nextItemIndex = 1;
        this.isSliding = false;
        this.setEventListeners();
    }
    //Setting event listeners, when they click on next, the Next function will be activated, when clicking on Previous, the Previous function will be activated
    setEventListeners(){
        this.previousButton.addEventListener("click", () => {
            this.Previous();
        });
        this.nextButton.addEventListener("click", () => {
            this.Next()
        })
    }
    setIndices(direction) {
        let index;
        if (direction === "NEXT") {
            index = this.currentIndex === this.sliderItems.length - 1 ? 0 : this.currentIndex +1;
        }
        if (direction ==="PREVIOUS"){
            index = this.currentIndex === 0 ? this.sliderItems.length - 1: this.currentIndex -1;
        }
        if (index === 0) {
            this.currentIndex = index;
            this.nextItemIndex = index + 1;
            this.previousItemIndex = this.sliderItems.length - 1;
        }
        else if (index === this.sliderItems.length -1) {
            this.currentIndex = this.sliderItems.length - 1;
            this.nextItemIndex = 0;
            this.previousItemIndex = this.currentIndex -1;
        }
        else {
            this.currentIndex = index;
            this.nextItemIndex = index + 1;
            this.previousItemIndex = index - 1;
        }
    }

    //The main way that animations and actions are used here, is by adding a string to the current classname. So when you click on a button, it changes the classname of an element, then, in the CSS, that new classname has a separate CSS.
    //This is a way that I haven't used Javascript before, but it really is informative
    Next() {
        //If the slider is currently busy sliding to the next button, the user won't be able to press the button
        if (this.isSliding) return;
        this.isSliding = true;
        this.sliderItems[this.nextItemIndex].classList.add("NextItem");
        //this adds a new text to the current classname of the elements, so the current CSS code doesn't apply to it. However, once the classname has been changed, a new CSS styling will be applied to it.
        setTimeout(()=> {
            this.sliderItems[this.currentIndex].classList.add("SlideNext");
            this.sliderItems[this.nextItemIndex].classList.add("SlideEnd");
            this.sliderItems[this.nextItemIndex].classList.add("Active");
        }, 20);
        //removes the classnames of the current slide and that of the one that was previously selected as the "next" one
        setTimeout(()=> {
            this.sliderItems[this.nextItemIndex].classList.remove("NextItem", "SlideEnd");
            this.sliderItems[this.currentIndex].classList.remove("SlideNext", "Active");
            this.setIndices("NEXT");
            this.isSliding = false;
        }, 400);
    }
    Previous() {
        if (this.isSliding) return;
        this.isSliding = true;
        this.sliderItems[this.previousItemIndex].classList.add("PreviousItem");
        setTimeout(() => {
            this.sliderItems[this.currentIndex].classList.add("SlidePrevious");
            this.sliderItems[this.previousItemIndex].classList.add("SlideEnd");
            this.sliderItems[this.previousItemIndex].classList.add("Active");
        }, 20)
        setTimeout(() => {
            this.sliderItems[this.previousItemIndex].classList.remove("PreviousItem", "SlideEnd");
            this.sliderItems[this.currentIndex].classList.remove("SlidePrevious", "Active");
            this.isSliding = false;
            this.setIndices("PREVIOUS");
        },400);
    }
}
const slider = new Slider(
    document.querySelector(".CarouselSlider")
);

let CurrentClickedImage
const FatherAppend = document.getElementById("BigDaddy");
class Collage {
    constructor(collageElement) {
        this.collage = collageElement;
        this.collageImages = collageElement.querySelectorAll(".CollageImages");
        this.isEnlarged = false;
        this.setEventListeners();
    }
    setEventListeners(){
        this.collageImages.forEach(element => {
            element.addEventListener('click', (e)=>{
                CurrentClickedImage = e.target;
                console.log(e.target.id);
                this.collageEnlarge()
            })
        })
    }

    collageEnlarge() {
        if (this.isEnlarged === false) {
            CurrentClickedImage.classList.add("Enlarge");
            console.log(CurrentClickedImage.alt);
            const CreateDiv = document.createElement("div");
            const CreateText = document.createTextNode(CurrentClickedImage.alt);
            CreateDiv.setAttribute("id", "EnlargedText")
            CreateDiv.appendChild(CreateText);
            FatherAppend.appendChild(CreateDiv)
            console.log(CurrentClickedImage)
            this.isEnlarged = true;
        }
        else{
            CurrentClickedImage.classList.remove("Enlarge");
            while (FatherAppend.firstChild){
                FatherAppend.removeChild(FatherAppend.firstChild);
            }
            this.isEnlarged = false;
        }
    }
}
const collage = new Collage(
    document.querySelector(".row.collage"))

let Lightmode = true;
const LightSwitch = document.getElementById("LightSwitch");
LightSwitch.addEventListener("click", function () {
    if (Lightmode === true) {
        const SetDarkMode = document.querySelector(".lightMode");
        SetDarkMode.classList.add("darkMode");
        SetDarkMode.classList.remove("lightMode");
        Lightmode = false;
    }
    else {
        const SetDarkMode = document.querySelector(".darkMode");
        SetDarkMode.classList.add("lightMode");
        SetDarkMode.classList.remove("darkMode");
        Lightmode = true;
    }
})


Pidgeot = document.getElementById("PidgeotImage");
Magikarp = document.getElementById("MagikarpImage");
Slowpoke = document.getElementById("SlowpokeImage");
Farfetchd = document.getElementById("FarfetchdImage");
//I would've liked to use a class here, and I will definitely look into how to do that
function HoverPidgeot () {
    Pidgeot.classList.add("PokemonVisible");
    Pidgeot.classList.remove("PokemonImages")
}
document.getElementById("PidgeotHover").addEventListener("mouseover", HoverPidgeot)
function StopHoveringPidgeot () {
    Pidgeot.classList.add("PokemonImages");
    Pidgeot.classList.remove("PokemonVisible");
}
document.getElementById("PidgeotHover").addEventListener("mouseleave", StopHoveringPidgeot)

function HoverMagikarp () {
    Magikarp.classList.add("PokemonVisible");
    Magikarp.classList.remove("PokemonImages")
}
document.getElementById("MagikarpHover").addEventListener("mouseover", HoverMagikarp)
function StopHoveringMagikarp () {
    Magikarp.classList.add("PokemonImages");
    Magikarp.classList.remove("PokemonVisible");
}
document.getElementById("MagikarpHover").addEventListener("mouseleave", StopHoveringMagikarp)

function HoverSlowpoke () {
    Slowpoke.classList.add("PokemonVisible");
    Slowpoke.classList.remove("PokemonImages")
}
document.getElementById("SlowpokeHover").addEventListener("mouseover", HoverSlowpoke)
function StopHoveringSlowpoke () {
    Slowpoke.classList.add("PokemonImages");
    Slowpoke.classList.remove("PokemonVisible");
}
document.getElementById("SlowpokeHover").addEventListener("mouseleave", StopHoveringSlowpoke)

function HoverFarfetchd () {
    Farfetchd.classList.add("PokemonVisible");
    Farfetchd.classList.remove("PokemonImages")
}
document.getElementById("FarfetchdHover").addEventListener("mouseover", HoverFarfetchd)
function StopHoveringFarfetchd () {
    Farfetchd.classList.add("PokemonImages");
    Farfetchd.classList.remove("PokemonVisible");
}
document.getElementById("FarfetchdHover").addEventListener("mouseleave", StopHoveringFarfetchd)

const ChaserBox = document.getElementsByClassName("col-12 box")[0];
const chaserBall = document.getElementsByClassName("chaser");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let speed = 0.5;


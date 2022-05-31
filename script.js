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
        this.collageBackground = collageElement.querySelectorAll(".col-3 picture")
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
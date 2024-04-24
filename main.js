const imagesArray = ["img01.webp", "img02.webp", "img03.webp", "img04.webp", "img05webp"];

const itemsContainer = document.querySelector(".slider-items");
console.log (itemsContainer)
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;
    itemsContainer.innerHTML += sliderItem;
}


const itemsArray = document.getElementsByClassName("item");
console.log (itemsArray);


let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");



const prevBtn = document.querySelector (".prev")
const nextBtn = document.querySelector (".next")

nextBtn.addEventListener("click", function() {
    prevBtn.classList.remove("hidden");
    itemsArray[activeItemIndex].classList.remove("active");
    activeItemIndex++;
    itemsArray[activeItemIndex].classList.add("active");
    if (activeItemIndex === itemsArray.length - 1) {
        nextBtn.classList.add("hidden");
    }
})


prevBtn.classList.remove("hidden");

prevBtn.addEventListener("click", function() {
    nextBtn.classList.remove("hidden");
    itemsArray[activeItemIndex].classList.remove("active");
    activeItemIndex--;
    itemsArray[activeItemIndex].classList.add("active");
    if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden");
    }
})
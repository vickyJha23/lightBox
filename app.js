// console.log("Har Har Mahadev");
const slides = document.querySelectorAll(".modal-slide");
const activeImg = document.querySelectorAll(".item > img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const caption = document.querySelector(".caption");
const modalBtns = document.querySelectorAll(".lightBox-item > img");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close_btn");
let slideIndex = 1;
displaySlides(slideIndex);
nextBtn.addEventListener("click", function(){
    slideIndex++;   
    displaySlides(slideIndex);
})
prevBtn.addEventListener("click", function(){
        slideIndex--;
        displaySlides(slideIndex);
    });
 activeImg.forEach((activeImgBtn) => {
       activeImgBtn.addEventListener("click", (e) => {
             slideIndex = e.target.id;
            displaySlides(slideIndex);

       })
 });
modalBtns.forEach((modalBtn) => {
     modalBtn.addEventListener("click",(e) => {
        modal.style.display = "block";
        slideIndex = parseInt(e.target.className.slice(4));
        displaySlides(slideIndex);  
     })
})  

closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
})

function displaySlides(n){
     for(let i = 0; i < slides.length; i++){
          slides[i].style.display = "none";
     }
     for(let i = 0; i < activeImg.length; i++){
         activeImg[i].className = activeImg[i].className.replace("active", "");
     }
     if(slideIndex > slides.length){
           slideIndex = 1;
     }
     if(slideIndex < 1){
           slideIndex = slides.length;
     }
      slides[slideIndex-1].style.display = "block";
      activeImg[slideIndex-1].className += "active";
      caption.textContent = activeImg[slideIndex-1].alt;    
}
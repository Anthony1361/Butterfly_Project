let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});
//.........................................//
const glightbox = GLightbox({
    selector: '.glightbox'
  });

  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  //portfolio details below//
  let move = 1;
  setInterval(function(){
      document.getElementById("radi" + move).checked = true;
      move++;
      if(move > 3){
          move = 1;
      }
  },5000);
  

//open the modal//
// function openModal() {
//     document.getElementById("myModal").style.display = "block";
// }

//close the modal//
// function closeModal() {
//     document.getElementById("myModal").style.display = "none";
// }

// let slideIndex = 1;
// showSlides(slideIndex);

//next/prev controls//
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


///.....................................//

let list = document.querySelectorAll(".list");
let portfolio1 = document.querySelectorAll(".portfolio-1");

for(let i = 0; i < list.length; i++){
    list[i].addEventListener("click", function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");

        for(let k = 0; k < portfolio1.length; k++){
            portfolio1[k].classList.remove("active");
            portfolio1[k].classList.add("hide");

            if(portfolio1[k].getAttribute("data-items") == dataFilter ||
            dataFilter == "all"){
              portfolio1[k].classList.remove("hide"); 
              portfolio1[k].classList.add("active"); 
            }
        }

    })
}

// rounded img slider//

let counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
},5000);



// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("myslides");
//     let dots = document.getElementsByClassName("dot");
//     if(n > slides.length){
//         slideIndex = 1
//     }
//     if(n < 1){
//         slideIndex = slides.length
//     }
//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     for(i = 0; i < dots.length; i++){
//         dots[i].className.replace("active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += "active";
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let  slides = document.getElementsByClassName("myslides");
    
//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if(slideIndex > slides.length){
//         slideIndex = 1
//     }

//     slides[slideIndex - 1].style.display = "block";

//     setTimeout(showSlides, 2000);
// }
// For scroll reveal

//Common reveal options to create reveal animations
ScrollReveal({ 
    // The reset: true causes the animation to always come and goes instead of animating once
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 400
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.title-reveal', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.title-reveal-right', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.title-reveal-top', { delay: 600, origin: 'top' });
ScrollReveal().reveal('.title-reveal-bottom', { delay: 600, origin: 'bottom' });
// ScrollReveal().reveal('.media-icons i', '.items li', { delay: 500, origin: 'bottom', interval: 200 });

// .....................................................//
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

// let firstIndex = 0;
// function automaticSlide(){
//     setTimeout(automaticSlide, 2000);
//     let pics;
//     const img = document.querySelectorAll("img");
//     for(pics=0; pics<img.length; pics++){
//         img[pics].style.display="none";
//     }
//     firstIndex++;
//     if(firstIndex > img.length){
//         firstIndex = 1;
//     }
//     img[firstIndex - 1].style.display="block";
// }
// automaticSlide();

//   let move = 1;
//   setInterval(function(){
//       document.getElementById("radi" + move).checked = true;
//       move++;
//       if(move > 3){
//           move = 1;
//       }
//   },5000);


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

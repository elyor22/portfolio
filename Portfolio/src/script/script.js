window.addEventListener("load", function () {
  /*======================== loader ==========================*/
  let load = document.querySelector(".loader");
  loaders()
  function loaders(){
    load.style.display = "none";
  }
  /* ======= bg change ======= */
  let bgBtn = document.querySelector(".bulb");
  let style = document.querySelector("#style");
  if (localStorage.getItem("style")) {
    style.setAttribute("href", localStorage.getItem("style"));
  }
  bgBtn.addEventListener("click", function () {
    if (!bgBtn.classList.contains("bulb_active")) {
      style.setAttribute("href", "./css/style.white.css");
      bgBtn.classList.add("bulb_active");
      localStorage.setItem("style", "./css/style.white.css");
    } else {
      style.setAttribute("href", "./css/style.css");
      bgBtn.classList.remove("bulb_active");
      localStorage.setItem("style", "./css/style.css");
    }
  });

  /* ======= svg to word ======= */
  let a = document.querySelectorAll(".links a");
  let svg = document.querySelectorAll(".links a i");
  let spn = document.querySelectorAll(".links a span");

  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseover", function () {
      svg[i].style.display = "none";
      spn[i].style.display = "block";
    });
    a[i].addEventListener("mouseout", function () {
      svg[i].style.display = "block";
      spn[i].style.display = "none";
    });
  }
  /* ======================= media ========================= */
  let navbarM = document.querySelector('.navbar');
  let cn = document.querySelector('.cn .fas');
  navbarM.style.transition = "600ms"
  
  cn.addEventListener('click',function(){
    if (cn.classList.contains('fa-angle-right')) {
      cn.classList.remove('fa-angle-right')
      cn.classList.add('fa-angle-left')
      navbarM.style.transform = "translateX(0px)"
    }
    else{
      navbarM.style.transform = "translateX(-100px)"
      cn.classList.add('fa-angle-right')
      cn.classList.remove('fa-angle-left')
    }
  })
  
  /*======================== writer ==========================*/
  
  let typed3 = new Typed("#writer", {
    strings: ["Web Developer", "Fronted Developer", "Creator"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
  });
  
  
  /*======================== wow ==========================*/

  new WOW().init();

  let hi = document.querySelector(".hi");
  hi.classList.add("tada");
  

});

/*======================== cv to skill ==========================*/

let more = document.querySelector('.more');
let cv = document.querySelector('.cv');
let back = document.querySelector('.back');
let skill = document.querySelector('.skil');
cv.style.transition = "400ms"
skill.style.transition = "400ms"
more.addEventListener('click',function(){
  cv.style.opacity = "0"
  skill.style.display = "flex"
})

back.addEventListener('click',function(){
  cv.style.opacity = 1
  skill.style.display = "none"
})


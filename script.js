const hamburgerBtn = $("#hamburger-container");
const hamburgerBtn2 = $("#hamburger-container-2");
const menu = $("menu")
const showcaseTitle = $(".showcase-title");
const showcaseImg = $("#showcase-img");
const showcaseLink = $(".showcase-link");
const showcaseDescription = $(".showcase-slogan");
// opens menu on button click
hamburgerBtn.on("click", ()=>{
    menu.addClass("open");
})
// close menu on button click
menu.on("click", ()=>{
    menu.removeClass("open");
})
// initial animations
setTimeout(() => {
    showcaseTitle.addClass("appear");
    showcaseImg.addClass("appear");
    showcaseLink.addClass("appear");
    showcaseDescription.addClass("appear");
    hamburgerBtn.addClass("appear");
}, 100);

// appear on scroll
function scrollAppear () {
    let workoutCardArr = document.querySelectorAll(".workout-card");
    let formInput1 = document.querySelector("#contact-form-name");
    let formInput2 = document.querySelector("#contact-form-organization");
    let formInput3 = document.querySelector("#contact-form-message");
    let form1Position = formInput1.getBoundingClientRect().top;
    let form2Position = formInput2.getBoundingClientRect().top;
    let form3Position = formInput3.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    
    
    if (form1Position < screenPosition / 1.3) {
        formInput1.classList.add("appear");
    }
    if (form2Position < screenPosition / 1.3) {
        formInput2.classList.add("appear");
    }
    if (form3Position < screenPosition / 1.3) {
        formInput3.classList.add("appear");
    }
    for (let i = 0; i < workoutCardArr.length; i++) {
        let workoutCardPosition = (workoutCardArr[i].getBoundingClientRect().top);

        if (workoutCardPosition < screenPosition / 1.3){
            workoutCardArr[i].classList.add("appear");
        }
    }


};


window.addEventListener("scroll", scrollAppear);
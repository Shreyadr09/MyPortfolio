$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");     
        }else{
            $('.navbar').removeClass("sticky"); 
        }
        if(this.scrollY > 100){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show"); 
        }
    })
});
// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});

// hamburger
const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    Menu.classList.toggle("active");
})
document.querySelectorAll(".menu li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    Menu.classList.remove("active");
}))
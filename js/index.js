// const theDate = document.querySelector(".inputDate").value;
const countDown = new Date("15 oct 2024").getTime();
const maxText = $("textarea").attr('maxlength');
const num = $(".num");
num.html(maxText)

$(".Open").on("click", function () {
    $("aside").animate({ left: `${$(".bg-black").innerWidth()}px` }, 1000)
})

// const infoTo =$("main").offset().top;
// $(window).scroll(function(){

// })
// $(".Open").on("click", function () {
//     $(".Open").animate({ left: `${$(".bg-black").innerWidth()}px` }, 1000)
// })
$(".fa-xmark").on("click", function () {
    $("aside").animate({ left: `-${$(".bg-black").innerWidth()}px` }, 1000);
})

$(".singerOne h2").on("click", function () {
    console.log($(".singerOne p").innerWidth());
    $(".singerOne p").slideToggle(1000);
})
$(".singerTwo h2").on("click", function () {
    $(".singerTwo p").slideToggle(1000);
})
$(".singerThree h2").on("click", function () {
    $(".singerThree p").slideToggle(1000);
})
$(".singerFour h2").on("click", function () {
    $(".singerFour p").slideToggle(1000);
})

let counter = setInterval(() => {
    const dateNow = new Date().getTime();
    const dateOrder = countDown - dateNow;
    const days = Math.floor(dateOrder / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dateOrder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dateOrder % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dateOrder % (1000 * 60)) / (1000));

    document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateOrder < 0) {
        clearInterval(counter);
    }
}, 1000);

$("textarea").on("keypress", function () {
    const textLenth = $(this).val().length;
    const remText = maxText - textLenth;
    num.html(remText)
})

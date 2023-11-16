document.querySelector('btn-close').addEventListener('click', function(){
    document.querySelector('.modal').classList.add('colse');
});



let img = document.querySelectorAll('.main-banner-box');
let num = 0;
// console.log(img.length);


setInterval(function () {
    for (let i = 0; i < img.length; i++) {
        img[i].classList.remove('show');
    }
    num = num + 1;
    if (num > img.length - 1) { num = 0 };
    img[num].classList.add('show');
    console.log(num)
}, 4000);
document.addEventListener('DOMContentLoaded', function(){
//const manga = [
//    {},
//    {}
//]
//
//const anime = [
//    {},
//    {}
//]

let sub_reklama1 = document.querySelector('.sub-coupon1')
let sub_reklama2 = document.querySelector('.sub-coupon2')
let main_reklama1 = document.querySelector('.main-coupon1')
let main_reklama2 = document.querySelector('.main-coupon2')
let sidemenu = document.querySelector('.sidemenu')
let active = document.querySelector('.active')
let tovari = document.querySelector('.tovari')
let unactive = document.querySelector('.unactive')
let a = 0

sub_reklama1.addEventListener('click', function(){
    console.log(main_reklama1.querySelector('img'))
    main_reklama1.style.backgroundImage = "url('main-reklama1.jpg')" 
    //if(main_reklama1.value== '<img src="main-reklama2.jpg"'></img>)
    
})
if(a == 0){
        main_reklama1.style.backgroundImage = "url('main-reklama1.jpg')"
        a += 1 
    }
sub_reklama2.addEventListener('click', function(){
    main_reklama1.style.backgroundImage = "url('main-reklama2.jpg')"
})

let check = 0
tovari.addEventListener('click', function(){
    if (check == 1){
            sidemenu.classList.remove('active')
            console.log(0)
            check = 0
        }
    else{
            sidemenu.classList.add('active')
            check = 1
            console.log(1)
    }
})



//tovari.click(function(){
//    divs.css('z-index',0);
//    sidemenu.css('z-index',10);
//    layer.fadeIn('fast');
//});
//
//layer.click(function(){
//    $(this).fadeOut('fast');
//});

})
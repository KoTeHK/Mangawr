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


sub_reklama1.addEventListener('click', function(){
    console.log(main_reklama1.querySelector('img'))
    main_reklama1.style.backgroundImage = "url('main-reklama1.jpg')" 
    //if(main_reklama1.value== '<img src="main-reklama2.jpg"'></img>)
    
})

sub_reklama2.addEventListener('click', function(){
    main_reklama2.style.display = "inline";
    main_reklama1.style.display = "none";
})

})
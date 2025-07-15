document.addEventListener('DOMContentLoaded', function(){
const manga = [
    {
        "name":"Манга",
        "subname":"Том 1 Сім'я шпіона",
        "price": 149,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Чорнетка Смерті",
        "price": 149,
    }
]

const merch = [
    {
        "img":"sub-reklama2.jpg",
        "name":"Манга",
        "subname":"Том 1",
        "price": 149,
    },
    {
        "img":"sub-reklama2.jpg",
        "name":"Манга",
        "subname":"Том 1",
        "price": 149,
    }
]

let sub_reklama1 = document.querySelector('.sub-coupon1')
let sub_reklama2 = document.querySelector('.sub-coupon2')
let main_reklama1 = document.querySelector('.main-coupon1')
let main_reklama2 = document.querySelector('.main-coupon2')
let sidemenu = document.querySelector('.sidemenu')
let active = document.querySelector('.active')
let tovari = document.querySelector('.tovari')
let unactive = document.querySelector('.unactive')
let pidtrumka = document.querySelector('.pidtrumka')
let pidtrumka_alert = document.querySelector('.pidtrumka-alert')
let layer = document.querySelector('#layer')
let active_button = document.querySelector('.active-button')
let product_card = document.querySelector('.product-card')
let product_cards_manga = document.querySelector('.product-cards-manga')
let product_cards_merch = document.querySelector('.product-cards-merch')
let product_name = document.querySelector('.product-name')
let manga_top_card = document.querySelector('.manga-top-card')
let product_subname = document.querySelector('.product-subname')
let product_price = document.querySelector('.product-price')
let product_buy = document.querySelector('.product-buy')
let sidemenu_tovar_container = document.querySelector('.sidemenu-tovar-container')
let a = 0

sub_reklama1.addEventListener('click', function(){
    console.log(main_reklama1.querySelector('img'))
    main_reklama1.style.backgroundImage = "url('main-reklama1.jpg')" 
    
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
            tovari.classList.remove('active_button')
            check = 0
        }
    else{
            sidemenu.classList.add('active')
            tovari.classList.add('active_button')
            check = 1        
    }
})

for (let i = 0; i < manga.length; i += 1) {
    var MangaCardsPaste = document.getElementById('manga-cards');
    var MerchCardsPaste = document.getElementById('merch-cards');

    var newElement = document.createElement('div');
    newElement.classList.add('product-card');
    newElement.id = `${i}`;

    var newElementM = document.createElement('div');
    newElementM.classList.add('product-card');
    newElementM.id = `M${i}`;

    var ElementImgCont = document.createElement('div');
    ElementImgCont.classList.add('product-image-container');
    ElementImgCont.id = `imgCont${i}`;

    var ElementImg = document.createElement('div');
    ElementImg.classList.add('product-image');
    ElementImg.innerHTML = `${'<img src= "mangaImg/'}${[i]}${'.jpg">'}`;

    var ElementImgM = document.createElement('div');
    ElementImgM.classList.add('product-image');
    ElementImgM.innerHTML = `${'<img src= "mangaImg/'}${[i]}${'.jpg">'}`;

    var ElementName = document.createElement('div');
    ElementName.classList.add('product-name');
    ElementName.textContent = `${manga[i].name}`;

    var ElementNameM = document.createElement('div');
    ElementNameM.classList.add('product-name');
    ElementNameM.textContent = `${merch[i].name}`;

    var ElementLine = document.createElement('div');
    ElementLine.classList.add('manga-top-card');

    var ElementLineM = document.createElement('div');
    ElementLineM.classList.add('manga-top-card');

    var ElementDescr = document.createElement('div');
    ElementDescr.classList.add('product-subname');
    ElementDescr.textContent = `${manga[i].subname}`;

    var ElementDescrM = document.createElement('div');
    ElementDescrM.classList.add('product-subname');
    ElementDescrM.textContent = `${merch[i].subname}`;

    var ElementPrice = document.createElement('div');
    ElementPrice.classList.add('product-price');
    ElementPrice.textContent = `${manga[i].price} Грн`;

    var ElementPriceM = document.createElement('div');
    ElementPriceM.classList.add('product-price');
    ElementPriceM.textContent = `${merch[i].price} Грн`;

    var ElementBuy = document.createElement('div');
    ElementBuy.classList.add('product-buy');
    ElementBuy.textContent = `Купити`;
    ElementBuy.id = `button${i}`;


    var ElementBuyM = document.createElement('div');
    ElementBuyM.classList.add('product-buy');
    ElementBuyM.textContent = `Купити`;
    ElementBuyM.id = `buttonM${i}`;

    product_cards_manga.appendChild(newElement);
    newElement.appendChild(ElementImgCont);
    ElementImgCont.appendChild(ElementImg);
    newElement.appendChild(ElementName);
    newElement.appendChild(ElementLine);
    newElement.appendChild(ElementDescr);
    newElement.appendChild(ElementPrice);
    newElement.appendChild(ElementBuy);
    

    product_cards_merch.appendChild(newElementM);
    newElementM.appendChild(ElementImgM);
    newElementM.appendChild(ElementNameM);
    newElementM.appendChild(ElementLineM);
    newElementM.appendChild(ElementDescrM);
    newElementM.appendChild(ElementPriceM);
    newElementM.appendChild(ElementBuyM);

    var button_buy = document.getElementById(`button${i}`);
    
    button_buy.addEventListener('click', function(){
        var ElementTovar = document.createElement('div');
            ElementTovar.classList.add('sidemenu-tovar-card');
            ElementTovar.id = `tovar${i}`

        var product_subname_tovar = document.createElement(`div`);
            product_subname_tovar.classList.add('sidemenu-tovar-subname');
            product_subname_tovar.textContent = `${manga[i].subname}`;

        var product_image_tovar = document.createElement(`div`);
            product_image_tovar.classList.add('sidemenu-tovar-img');
            product_image_tovar.innerHTML = `${'<img src= "mangaImg/'}${[i]}${'.jpg">'}`;

        var product_price_tovar = document.createElement(`div`);
            product_price_tovar.classList.add('sidemenu-tovar-price');
            product_price_tovar.textContent = `${manga[i].price} грн`;

        var product_image_container = document.createElement(`div`);
            product_image_container.classList.add('sidemenu-tovar-img-container');

        var delete_tovar = document.createElement(`div`);
            delete_tovar.classList.add('delete-tovar');
            delete_tovar.innerHTML = `${'<img src= "delete.png">'}`;
            delete_tovar.id = `delete${i}`;
    
            sidemenu_tovar_container.appendChild(ElementTovar);
            ElementTovar.appendChild(product_image_container);
            product_image_container.appendChild(product_image_tovar);
            ElementTovar.appendChild(product_subname_tovar);
            ElementTovar.appendChild(product_price_tovar); 
            ElementTovar.appendChild(delete_tovar);
    });

    var delete_tovar_button = document.getElementById(`delete${i}`);

    delete_tovar_button.addEventListener('click', function(){
        var target_tovar = document.getElementById(`tovar${i}`);
            target_tovar.remove();
    });
}



})
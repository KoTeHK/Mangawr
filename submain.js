document.addEventListener('DOMContentLoaded', function(){
const manga = [
    {
        "name":"Манга",
        "subname":"Том 1 Сім'я шпіона",
        "price": 149,
    },
    {
        "name":"Манга",
        "subname":"Том 4 Чорнетка Смерті",
        "price": 149,
    },
    {
        "name":"Манга",
        "subname":"Том 1-4 Атака на титанів",
        "price": 649,
    },
    {
        "name":"Манга",
        "subname":"Том 3 Магічна Битва",
        "price": 199,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Дан Да Дан",
        "price": 149,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Чорнетка смерті",
        "price": 149,
    },
    {
        "name":"Манга",
        "subname":"Том 1-3 Монолог Фармацевта",
        "price": 549,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Воллейбол",
        "price": 199,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Синя Тюрьма",
        "price": 149,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Пожирач Душ",
        "price": 149,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Oshi no Ko",
        "price": 199,
    },
    {
        "name":"Манга",
        "subname":"Том 1 Моя Героїчна Академія",
        "price": 249,
    }
]

const merch = [
    {
        "name":"Статуетка",
        "subname":"Клинок Розсікуючий Демонів",
        "price": 749,
    },
    {
        "name":"Брелок",
        "subname":"Мегумі // Магічна Битва",
        "price": 49,
    },
    {
        "name":"Брелки",
        "subname":"Клинок Розсікуючий Демонів",
        "price": 449,
    },
    {
        "name":"Брелок",
        "subname":"Шляпа Луффі // Ван Піс",
        "price": 149,
    },
    {
        "name":"Рюкзак",
        "subname":"Луффі 5 гір // Ван піс",
        "price": 1349,
    },
    {
        "name":"Нічник",
        "subname":"Кіллуа // Хантер х Хантер",
        "price": 349,
    },
    {
        "name":"Сумка",
        "subname":"Сумка Намі // Ван Піс",
        "price": 1049,
    },
    {
        "name":"Футболка",
        "subname":"Саске // Наруто",
        "price": 149,
    },
    {
        "name":"Худі",
        "subname":"Годжо Сатору // Магічна Битва",
        "price": 749,
    },
    {
        "name":"Іграшка",
        "subname":"М'яка іграшка Годжо Сатору",
        "price": 449,
    },
    {
        "name":"Худі",
        "subname":"Бакуго // Моя героїчна академія",
        "price": 849,
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
let site_info = document.querySelector('.site-info')
let mailmenu = document.querySelector('.mail-menu')
let mail_active = document.querySelector('.mail-active')
let site_info_page = document.querySelector('.site-info-page')
let coupons = document.querySelector('.coupons')
let start_img = document.querySelector('.start-img')
let div_list = document.querySelector('.div-list')
let footer = document.querySelector('.footer')
let create_order_page = document.querySelector('.create-order-page')
let header_menu = document.querySelector('.header-menu')
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

let site_info_check = 0
site_info.addEventListener('click', function(){
    if (site_info_check == 1){
            site_info.classList.remove('active-button')
            coupons.style.display = "flex";
            start_img.style.display = "inline";
            div_list.style.display = "flex";
            footer.style.marginTop = "55%";
            site_info_page.style.display = 'none';
            site_info_check = 0
        }
    else{
            site_info.classList.add('active-button')
            site_info_page.style.display = 'flex';
            const text = `
            <h2>Ласкаво просимо до MangaWr — вашого надійного провідника у світ манґи!</h2>
            <span>Ми — команда справжніх шанувальників японської культури, яка створила MangaWr, щоб дарувати радість кожному фанату манґи. У нашому магазині ви знайдете широкий</span>
            <span>вибір ліцензійної манґи українською, англійською та японською мовами — від культової класики до найгарячіших новинок.</span>
            <h3>Надійність — наш пріоритет.</h3>
            <span>Ми співпрацюємо лише з перевіреними постачальниками, щоб кожне видання, яке ви отримуєте, було автентичним і в ідеальному стані.</span>
            <h3>Безпечна доставка — гарантовано.</h3>
            <span>Упаковуємо кожне замовлення з турботою, використовуємо надійні служби доставки, а всі відправлення супроводжуються трек-номерами.</span> 
            <span>Ваше замовлення буде в безпеці з моменту оформлення до моменту, коли потрапить до ваших рук.</span>
            <h3>MangaWr — це не просто магазин.</h3>
            <span>Це місце, де народжується захоплення, де кожна історія оживає, і де кожен покупець — частина великої родини фанатів манґи.</span>
            <p>Дякуємо, що обираєте MangaWr.<br>
            Читайте з насолодою, мрійте без меж!</p>`;
            document.getElementById("site-info-presentation").innerHTML = text;
            coupons.style.display = "none";
            start_img.style.display = "none";
            div_list.style.display = "none";
            footer.style.marginTop = "0%";
            site_info_check = 1        
    }
})

let check = 0
tovari.addEventListener('click', function(){
    if (check == 1){
            sidemenu.classList.remove('active')
            tovari.classList.remove('active-button')
            check = 0
        }
    else{
            sidemenu.classList.add('active')
            tovari.classList.add('active-button')
            check = 1        
    }
})

let mailmenu_check = 0
pidtrumka.addEventListener('click', function(){
    if (mailmenu_check == 1){
            mailmenu.classList.remove('mail-active')
            pidtrumka.classList.remove('active-button')
            mailmenu_check = 0
        }
    else{
            mailmenu.classList.add('mail-active')
            pidtrumka.classList.add('active-button')
            mailmenu_check = 1        
    }
})

let mail_button = document.getElementById('mail-button')
mail_button.addEventListener("click", function(){
    const input = document.getElementById("textInput").value;
    alert(input + "// Це Повідомлення доставлено");
    document.getElementById("textInput").innerHTML = "";
})

let order_button = document.getElementById('order-buy')
order_button.addEventListener("click", function(){
    coupons.style.display = "none";
    start_img.style.display = "none";
    div_list.style.display = "none";
    footer.style.marginTop = "0%";
    create_order_page.style.display = "flex";
    header_menu.style.display = "none";
    sidemenu.classList.remove('active')
})

var accept = document.getElementById('accept')
accept.addEventListener("click", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const delivery = document.getElementById("delivery").value;

    const phoneRegex = /^\+?\d{10,13}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = [];

    if (!name) errors.push("Введіть ім'я");
    if (!surname) errors.push("Введіть прізвище");
    if (!phoneRegex.test(phone)) errors.push("Введіть коректний номер телефону (10–13 цифр)");
    if (!emailRegex.test(email)) errors.push("Введіть коректний email");
    if (!delivery) errors.push("Оберіть спосіб доставки");

    if (errors.length > 0) {
      alert("❌ Помилки у формі:\n\n" + errors.join("\n"));
    } 
    else {
    document.getElementById("product-tovar-container").replaceChildren();
    document.getElementById("sidemenu-tovar").replaceChildren();
    document.getElementById("total-price").innerHTML = "";
    document.getElementById("order-price").innerHTML = "";
    coupons.style.display = "flex";
    start_img.style.display = "inline";
    div_list.style.display = "flex";
    footer.style.marginTop = "55%";
    create_order_page.style.display = "none";
    header_menu.style.display = "flex";
    tovari.classList.remove('active-button')
    alert(`Замовлення в очікуванні, Буде доставлено через: 9999999999999999999999999 днів 
        До сплати ${total_price} грн`);
    check = 0
    }
});

var cancel = document.getElementById('cancel')
cancel.addEventListener("click", function(){
    document.getElementById("product-tovar-container").replaceChildren();
    document.getElementById("sidemenu-tovar").replaceChildren();
    document.getElementById("total-price").innerHTML = "";
    document.getElementById("order-price").innerHTML = "";
    coupons.style.display = "flex";
    start_img.style.display = "inline";
    div_list.style.display = "flex";
    footer.style.marginTop = "55%";
    create_order_page.style.display = "none";
    header_menu.style.display = "flex";
    tovari.classList.remove('active-button')
    alert("Замовлення відмінено.");
    check = 0
})

var promocode_button = document.getElementById('promocode-button');

let check_promocode = 0

promocode_button.addEventListener('click', function(){
    const promocode = document.getElementById('promocode')
    let promocode_lower = promocode.value.toLowerCase();

    if ((promocode_lower == "manga" || promocode_lower == "merch") && check_promocode == 0){
        total_price = total_price * 0.7
        let fixed_num = total_price.toFixed(2);
        total_price = fixed_num
        document.getElementById("order-price").innerHTML = `Загальна сума: ${total_price} грн`;
        check_promocode = 1
    }
    else{
        alert(`Промокод неправильно введений //
        Промокод вже використано`)
    }
})

const tt = document.getElementById("tt");

tt.addEventListener("click", function() {
    window.open("https://www.tiktok.com/uk-UA/", "_blank");
});

const tg = document.getElementById("tg");

tg.addEventListener("click", function() {
    window.open("https://web.telegram.org/a/", "_blank");
});

const yt = document.getElementById("youtube");

yt.addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley", "_blank");
});

const insta = document.getElementById("insta");

insta.addEventListener("click", function() {
    window.open("https://www.instagram.com/", "_blank");
});

let total_price = 0

for (let i = 0; i < manga.length; i += 1) {
    var MangaCardsPaste = document.getElementById('manga-cards');

    //MANGA//

    var newElement = document.createElement('div');
    newElement.classList.add('product-card');
    newElement.id = `${i}`;

    var ElementImgCont = document.createElement('div');
    ElementImgCont.classList.add('product-image-container');
    ElementImgCont.id = `imgCont${i}`;

    var ElementImg = document.createElement('div');
    ElementImg.classList.add('product-image');
    ElementImg.innerHTML = `${'<img src= "mangaImg/'}${[i]}${'.jpg">'}`;

    var ElementName = document.createElement('div');
    ElementName.classList.add('product-name');
    ElementName.textContent = `${manga[i].name}`;

    var ElementLine = document.createElement('div');
    ElementLine.classList.add('manga-top-card');

    var ElementDescr = document.createElement('div');
    ElementDescr.classList.add('product-subname');
    ElementDescr.textContent = `${manga[i].subname}`;

    var ElementPrice = document.createElement('div');
    ElementPrice.classList.add('product-price');
    ElementPrice.textContent = `${manga[i].price} Грн`;

    var ElementBuy = document.createElement('div');
    ElementBuy.classList.add('product-buy');
    ElementBuy.textContent = `Купити`;
    ElementBuy.id = `button${i}`;

    //PASTE//

    product_cards_manga.appendChild(newElement);
    newElement.appendChild(ElementImgCont);
    ElementImgCont.appendChild(ElementImg);
    newElement.appendChild(ElementName);
    newElement.appendChild(ElementLine);
    newElement.appendChild(ElementDescr);
    newElement.appendChild(ElementPrice);
    newElement.appendChild(ElementBuy);

    var button_buy = document.getElementById(`button${i}`);

    var total_price_container = document.getElementById(`total-price`);

    var order_price_container = document.getElementById(`order-price`);

    var product_tovar_container = document.getElementById(`product-tovar-container`);
    
    
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

        var delete_tovar_image = document.createElement(`div`);
            delete_tovar_image.classList.add('delete-tovar-image');
            delete_tovar_image.innerHTML = `${'<img src= "delete.png">'}`;
            delete_tovar_image.id = `delete${i}`;

        total_price = total_price + manga[i].price
        total_price_container.innerHTML = `${total_price} грн`
        order_price_container.innerHTML = `Загальна сума: ${total_price} грн`
        
        delete_tovar_image.addEventListener('click', function(){
            var target_tovar = document.getElementById(`tovar${i}`);
            if (target_tovar){
                target_tovar.remove();
                total_price = total_price - manga[i].price
                total_price_container.innerHTML = `${total_price} грн`
                total_price_order.innerHTML = `Загальна сума: ${total_price} грн`
            };
        
        
        });

        const cloneElementTovar = ElementTovar.cloneNode(true);
        const clone_product_image_container = product_image_container.cloneNode(true);
        const clone_product_image_tovar = product_image_tovar.cloneNode(true);
        const clone_product_subname_tovar = product_subname_tovar.cloneNode(true);
        const clone_product_price_tovar = product_price_tovar.cloneNode(true);

        sidemenu_tovar_container.appendChild(ElementTovar);
        ElementTovar.appendChild(product_image_container);
        product_image_container.appendChild(product_image_tovar);
        ElementTovar.appendChild(product_subname_tovar);
        ElementTovar.appendChild(product_price_tovar); 
        ElementTovar.appendChild(delete_tovar);
        delete_tovar.appendChild(delete_tovar_image);

        product_tovar_container.appendChild(cloneElementTovar);
        cloneElementTovar.appendChild(clone_product_image_container);
        clone_product_image_container.appendChild(clone_product_image_tovar);
        cloneElementTovar.appendChild(clone_product_subname_tovar);
        cloneElementTovar.appendChild(clone_product_price_tovar); 
    });

    
}

for (let i = 0; i < merch.length; i += 1) {
    var MerchCardsPaste = document.getElementById('merch-cards');

    //MERCH//

    var newElementM = document.createElement('div');
    newElementM.classList.add('product-card');
    newElementM.id = `M${i}`;

    var ElementImgContM = document.createElement('div');
    ElementImgContM.classList.add('product-image-container');
    ElementImgContM.id = `imgContM${i}`;

    var ElementImgM = document.createElement('div');
    ElementImgM.classList.add('product-image');
    ElementImgM.innerHTML = `${'<img src= "merchImg/'}${[i]}${'.jpg">'}`;

    var ElementNameM = document.createElement('div');
    ElementNameM.classList.add('product-name');
    ElementNameM.textContent = `${merch[i].name}`;

    var ElementLineM = document.createElement('div');
    ElementLineM.classList.add('manga-top-card');

    var ElementDescrM = document.createElement('div');
    ElementDescrM.classList.add('product-subname');
    ElementDescrM.textContent = `${merch[i].subname}`;

    var ElementPriceM = document.createElement('div');
    ElementPriceM.classList.add('product-price');
    ElementPriceM.textContent = `${merch[i].price} Грн`;

    var ElementBuyM = document.createElement('div');
    ElementBuyM.classList.add('product-buy');
    ElementBuyM.textContent = `Купити`;
    ElementBuyM.id = `buttonM${i}`;

    //PASTE//

    product_cards_merch.appendChild(newElementM);
    newElementM.appendChild(ElementImgContM);
    ElementImgContM.appendChild(ElementImgM);
    newElementM.appendChild(ElementNameM);
    newElementM.appendChild(ElementLineM);
    newElementM.appendChild(ElementDescrM);
    newElementM.appendChild(ElementPriceM);
    newElementM.appendChild(ElementBuyM);

    var button_buyM = document.getElementById(`buttonM${i}`);

    var total_price_container = document.getElementById(`total-price`);

    var total_price_order = document.getElementById(`order-price`);

    var product_tovar_container = document.getElementById(`product-tovar-container`);

    button_buyM.addEventListener('click', function(){
        var ElementTovar = document.createElement('div');
            ElementTovar.classList.add('sidemenu-tovar-card');
            ElementTovar.id = `tovar${i}`

        var product_subname_tovar = document.createElement(`div`);
            product_subname_tovar.classList.add('sidemenu-tovar-subname');
            product_subname_tovar.textContent = `${merch[i].subname}`;

        var product_image_tovar = document.createElement(`div`);
            product_image_tovar.classList.add('sidemenu-tovar-img');
            product_image_tovar.innerHTML = `${'<img src= "merchImg/'}${[i]}${'.jpg">'}`;

        var product_price_tovar = document.createElement(`div`);
            product_price_tovar.classList.add('sidemenu-tovar-price');
            product_price_tovar.textContent = `${merch[i].price} грн`;

        var product_image_container = document.createElement(`div`);
            product_image_container.classList.add('sidemenu-tovar-img-container');

        var delete_tovar = document.createElement(`div`);
            delete_tovar.classList.add('delete-tovar');

        var delete_tovar_image = document.createElement(`div`);
            delete_tovar_image.classList.add('delete-tovar-image');
            delete_tovar_image.innerHTML = `${'<img src= "delete.png">'}`;
            delete_tovar_image.id = `delete${i}`;

        total_price = total_price + merch[i].price
        total_price_container.innerHTML = `${total_price} грн`
        order_price_container.innerHTML = `Загальна сума: ${total_price} грн`
        
        delete_tovar_image.addEventListener('click', function(){
            var target_tovar = document.getElementById(`tovar${i}`);
            if (target_tovar){
                target_tovar.remove();
                total_price = total_price - merch[i].price
                total_price_container.innerHTML = `${total_price} грн`
                total_price_order.innerHTML = `Загальна сума: ${total_price} грн`
            };
        
        
        });

        const cloneElementTovar = ElementTovar.cloneNode(true);
        const clone_product_image_container = product_image_container.cloneNode(true);
        const clone_product_image_tovar = product_image_tovar.cloneNode(true);
        const clone_product_subname_tovar = product_subname_tovar.cloneNode(true);
        const clone_product_price_tovar = product_price_tovar.cloneNode(true);

        sidemenu_tovar_container.appendChild(ElementTovar);
        ElementTovar.appendChild(product_image_container);
        product_image_container.appendChild(product_image_tovar);
        ElementTovar.appendChild(product_subname_tovar);
        ElementTovar.appendChild(product_price_tovar); 
        ElementTovar.appendChild(delete_tovar);
        delete_tovar.appendChild(delete_tovar_image);

        product_tovar_container.appendChild(cloneElementTovar);
        cloneElementTovar.appendChild(clone_product_image_container);
        clone_product_image_container.appendChild(clone_product_image_tovar);
        cloneElementTovar.appendChild(clone_product_subname_tovar);
        cloneElementTovar.appendChild(clone_product_price_tovar); 
    });


}


})
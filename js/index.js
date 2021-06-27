
//SLIDE
let slides = document.querySelectorAll('.slide');
let slideIndex = 0

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slideIndex].classList.add('active')
}

const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener("click", () => {
    slideIndex = slides.length === slideIndex + 1 ? 0 : slideIndex + 1
    showSlide() 
})

const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener("click", () => {
    slideIndex = 0 === slideIndex ? slides.length - 1 : slideIndex - 1
    showSlide() 
})

showSlide()

// render products

let products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: './images/JBLHorizon_001_dvHAMaster.png',
        image2: './images/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: './images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
]

let productWrapper = document.querySelectorAll('.product-wrapper');

products.forEach(e =>  {
    let prod = `
    <div class="col-sm-12 col-md-6 col-lg-3">
    <div class="product-item">
    <div class="product-item-img">
        <img src="${e.image1}" alt="">
        <img src="${e.image2}" alt="">
    </div>
    <div class="product-item-btn">
        <a class="btn-flatt" href="product-detail.html">SHOP NOW</a>
        <button class="btn-flatt">
            <i class='bx bxs-cart-add'></i>
        </button>
        <button class="btn-flatt">
            <i class='bx bxs-heart'></i>
        </button>
    </div>
    <div class="product-item-info">
        <p class="product-name">${e.name}</p>
        <span class="old-price"><del>$${e.old_price}</del></span>
        <span class="curr-price">$${e.curr_price}</span>
    </div>
    </div>
    </div>
    `
    productWrapper.forEach(ele => {
        ele.insertAdjacentHTML("beforeend", prod)
    })
})

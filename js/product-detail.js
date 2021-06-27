let productImgList = document.querySelectorAll('.product-img-item')
let productImg = document.querySelector('#product-img img')
productImgList.forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        productImg.setAttribute('src', img)
    })
})

let descBtn = document.querySelector('#desc-btn')
let descElement = document.querySelector('.desc-wrapper')
descBtn.addEventListener('click', () => {
    descElement.classList.toggle("ac")
    if (descBtn.innerHTML === "VIEW ALL") descBtn.innerHTML = "VIEW LESS"
    else descBtn.innerHTML = "VIEW ALL"
})


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
]

let relatedProducts = document.querySelector('.related-products-wrapper');

products.forEach(e =>  {
    let prod = `
    <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="product-item">
    <div class="product-item-img">
        <img src="${e.image1}" alt="">
        <img src="${e.image2}" alt="">
    </div>
    <div class="product-item-btn">
        <button class="btn-flatt">SHOP NOW</button>
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
    relatedProducts.insertAdjacentHTML("beforeend", prod)
})

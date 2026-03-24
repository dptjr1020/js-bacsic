const ssf = document.querySelector('.ssf_hero')
const brand = document.querySelector('.brand_swip')
console.log(ssf, brand)

const heroSwiper = new Swiper(ssf, {
    slidesPerView:3,//한번에 보이는 슬라이드 개수
    spaceBetween:0,//사이여백
    // pagination:{el:'',},
    navigation:{
        prevEl:'.ssf_hero .prev',
        nextEl:'.ssf_hero .next',
    },
})
const brandSwiper = new Swiper(brand, {
    slidesPerView:3,
    spaceBetween:10,
    loop:true,
    autoplay:{
        delay:3000,
    },
    speed:2000,
    navigation:{
        prevEl:'.brand_item .prev',
        nextEl:'.brand_item .next',
    },
})
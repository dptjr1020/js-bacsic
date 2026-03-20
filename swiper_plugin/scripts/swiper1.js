// swiper1.js
//변수생성
const wrap = document.querySelector('#wrap')
const wrapSwiper = new Swiper(wrap,{
    //옵션:값, 옵션:{옵션:값,},
    mousewheel:true,
    speed:1000,
    direction:`vertical`,
})
const web = document.querySelector('.web')
const webSwiper = new Swiper(web,{
    effect:`fade`,
    // autoplay:{delay:200000,},
    loop:true,
    pagination:{
        // 페이지 대상HTML 연결, 모양, 동적옵션
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction',//bullets(기본값), fraction
        // dynamicBullets:true, //type이  bullets(기본값)일때만 가능
    },
})
const graphic = document.querySelector('.graphic')
const graphicSwiper = new Swiper(graphic,{
    effect:'fade',
    autoplay:{delay:1000,},
    loop:true,
    pagination:{
        el:'.graphic + .graphic_page'
    }
})
console.log(graphic)
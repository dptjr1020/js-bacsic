//query.js
//tag : header, nav, ul, li, a
//class : gnb, lnb

//변수 생성 : 태그5개, 클래스2개
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('.gnb > li');
const li2 = document.querySelectorAll('.gnb > li li');
// const li2 = document.querySelectorAll('.lnb > li');
const gnbA = document.querySelectorAll('.gnb > li > a');
const lnbA = document.querySelectorAll('.lnb > li > a');
const gnb = document.querySelector('.gnb');
const lnb = document.querySelector('.lnb');

//콘솔확인(오류 조기 확인)
console.log(header, nav, ul, li, li2, gnbA, lnbA, gnb, lnb);

//----------------------------------함수 기초 활용
//function 함수명(매개변수){반복식행명령어} 함수호출();
//1. 할인율 계산기
// (100-할인율) / 100
// (100-5) / 100 = 0.95
// 판매가 * 0.95
let discount = '';

discountFunc(24990);
discountFunc(85100);
console.log(discountFunc(24990));
alert(discountFunc(85100));
function discountFunc(price){
    discount = `5%할인 : ${price * 0.95}원, `;
    discount += `10%할인 : ${price * 0.9}원, `;
    discount += `20%할인 : ${price * 0.8}원, `;
    discount += `30%할인 : ${price * 0.7}원, `;
    //console.log(discount);
    return discount; //함수 밖으로 discount 값만 내보낸다.(함수호출할 때)
    //함수의 결과값은 다양한 함수로 실행할 수 있어야 하기 때문에 함수 내부에서 실행함수를 정하는 것이 아닌 리턴을 ㅗ값만 내보내고 함수 밖에서 실행함수를 정한다.
}
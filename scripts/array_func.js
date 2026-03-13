// array_func.js
// 여러개의 값을 변수에 저장할 수 있는 배열
// 특정 동일 주제에 묶여있는 2개 이상의 값을 배열로 묶음.

//배열 사용 안 한 경우
const month = '월';
const tue = '화';
console.log(month, tue)

//배열 사용한 경우
const yoil = ['월',' 화','수','목','금','토','일']
console.log(yoil); //모든 배열 출력
console.log(yoil[0]); //배열 값 중 원하는 인덱스 출력
console.log(yoil.length); //요일 객체의 길이송서

//-----------------------------------배열 기초1.
//원하는 색상을 자유롭게 6개 배열로 저장하고
//그 중 좋아한ㄴ 색상만 인덱스로 골라 콘솔로그 출력하기

const color = ['빨간색','주황색','노란색','초록색','파란색','남색']
console.log(color)
console.log(`내가 좋아하는 색상은 ${color[3]}, ${color[5]} 입니다.`)

//배열 생성법 2.
// new Array() 내장함수 선언법

let wh = new Array(2); //숫자2대입(x), 빈배열위치 2자리 삽입(o)
console.log(wh);

wh[0] = 100;
wh[1] = 50;
console.log(wh);

//-------신발 쇼핑몰 생상/사이즈 배열
let colorSize = new Array(2); //빈배열 2개 준비
// colorSize[0] = prompt('pink, white 중 하나를 선택하세요');
// colorSize[1] = prompt('220, 230, 240, 중 하나를 선택하세요');
colorSize[0] = 'pink';
colorSize[1] = 220;
let order = `주문옵션 : 색상:${colorSize[0]}, 사이즈:${colorSize[1]}`;
console.log(order);

//------의류쇼핑몰 선택옵션 배열로 만들기
//사이즈 : S M L
//색상 : 화이트 블랙, 그레이
//추가상품 : 양말, 손수건

let product = new Array(3);
product[0] = 'S';
product[1]= '화이트';
product[2] = '양말';

// product[0] = prompt('사이즈를 선택해주세요. S, M, L');
// product[1] = prompt('색상을 선택해주세요. 화이트, 그레이, 블랙');
// product[2] = prompt('추가상품을 선택해주세요. 양말, 손수건');
order = `주문옵션 : 사이즈 : ${product[0]}, 색상 : ${product[1]}, 추가상품 : ${product[2]}`
console.log(order);

//-----------------------------배열과 사용자정의함수
//날씨 소식 앱
//줄력예시 1) 오늘은 맑음, 내일은 비 소식이 있습니다.
//줄력예시 2) 오늘은 흐림, 내일은 눈 소식이 있습니다.
//줄력예시 3) 오늘은 눈, 내일은 맑음 소식이 있습니다.

//날씨 상태를 저장한 배열
const weather = ['맑음', '흐림', '비', '눈']

//함수 실행 시마다 다른 데이터를 전달하는 매개변수
weatherFunc(weather[0], weather[2]);
weatherFunc(weather[1], weather[3]);
weatherFunc(weather[3], weather[0]);

function weatherFunc(today, tmr){
    let msg = `오늘은 ${today}, 내일은 ${tmr} 소식이 있습니다.`;
    console.log(msg)
}

//-----------------------------영화 좌석 예매 배열+함수
//일반 2명 좌석 선택 기준
//일반 1명당 표 가격은 10,000원 = 2명 20,000원
let cgvSeat = new Array(2) //빈 좌석 2개 준비
const price = 10000; // 일반 1명 만원 준비
cgvSeat[0] = 'F3'
cgvSeat[1] = 'F4' 
//함수호출
cgvFunc(cgvSeat[0], cgvSeat[1], price*cgvSeat.length);

function cgvFunc(seat1, seat2, price){
    let movie = `일반 2명 예약한 좌석은 ${seat1}, ${seat2}이고,`;
    movie += `결제 가격은 ${price.toLocaleString('ko-kr')}원 입니다.`
    console.log(movie);
}

//-------------------------------------구구단 함수

//함수호출
dan99(2);// 2. ()안에 생상된 매개변수 자리에 대입해야하는 값 입력
dan99(3);
dan99(4);
dan99(5);
dan99(6);
dan99(7);
dan99(8);
dan99(9);
//아래 함수 활용 매개변수 추가와 함께 2단~9단까지 모두 출력할 수 있는 함수 만들기
function dan99(num){ // 1. num 매개변수를 생성(호출 시 대입받는 값을 받는 위치)
    let dan = '';
    dan = `${num}X1=${num*1}` // 3. num 호출 시 대입받은 값을 최종 전달받는 위치
    dan += `${num}X2=${num*2}`
    dan += `${num}X3=${num*3}`
    dan += `${num}X4=${num*4}`
    dan += `${num}X5=${num*5}`
    dan += `${num}X6=${num*6}`
    dan += `${num}X7=${num*7}`
    dan += `${num}X8=${num*8}`
    dan += `${num}X9=${num*9}`
    console.log(dan);
}
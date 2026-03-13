//function.js
//function 함수명(전달인자){반복실행내용;}

//반복 함수 준비
function story1(){ //사용자정의함수
    story2(); //콜백함수
    let a = '조약돌 수집';
    a += '조약돌 떨어뜨리기'; //기존 이야기에 더하기 +=
    a += '조약돌 따라 집 찾아오기';
    console.log(a);
}
function story2(){ //사용자정의함수
    let b = '부모는 먹을 것이 없어';
    b += '게모가 아이들을 숲에 버리자고 제안한다';
    console.log(b);
}

//반복 함수 실행
story2();

//카페 키오스크 함수
function kiosk(){
    let cf = '주문하기';
    cf += '커피 메뉴 창 실행';
    cf += '장바구니에 커피 담기';
    cf += '결제하기';
    cf += '결제 방법 선택 창 실행';
    cf += '결제완료'
    cf += '영수증 출력 메세지'
    cf += '주문완료'
    console.log(cf)
}
kiosk()//함수선언 밖 함수 실행

//260312
//-------------------사용자정의함수 기초 연습
//-------------------지역(블록)/전역 스코프 개념 포함
//스코프란? 변수가 접근 가능한 영역 위치

let num2 = 20; //블록스코프 밖(전역스코프) 전역변수 생성
fun1();//함수 호출
// console.log(`num1+num2`=${num1+num2})
//num1은 지역변수이므로 전역변수 위치에서 사용 불가(오류)
//함수 준비
function fun1(){ //블록 스코흐 시작
    let num1 = 10; //지역 변수
    console.log(`num1 : ${num1}`);//지역변수 출력
    console.log(`num1+num2=${num1+num2}`)//지역+전역 동시 출력
    //(위)콘솔 주의사항 : num2 전역변수의 생성위치가 함수호출보다 위에 있어야함
}//블록스코프 종료

//---------------------지역&전역 연습문제
//변수
let x = 1; //전역변수, 전역 위치에서 값 대입
let y; //전역변수, 값 없음 undefined
let z; //전역변수 ,값 없음 undefined
console.log(x,y,z);
//함수호출
fun_z(); //1+Undefined = NaN == Not a Number 약자(숫자가 아니라 계산할 수 없음)
//함수준비
function fun_z(){
    z =5; //전역변수z 값 5 대입 위치 = 지역스코프(전역에서 인식 못 함)
    fun_Y(); //지역변수 y값 10 인식을 위해 y 10 을 가지고 있는 함수 호출
    console.log(x+y);
}
function fun_Y(){
    y = 10; //전역변수z 값 5 대입 위치 = 지역스코프(전역에서 인식 못 함)
    console.log(x+y+z);
}

//------------------------------지역&전역 스코프 연습문제 2
//최종목표 - A방간식 : 초코파이, B방 간식 : 초코파이
//변수
let snack;
//함수 호출
console.log(snack); // undefined (roomA호출전)
roomA(); //지역스코프 안 전역변수 대입값 발생 '초코파이'
console.log(snack); //초코파이 (roomA호출후)
roomB();
console.log(snack); // 초코파이
//함수 준비
function roomA(){
    snack = '초코파이'; //전역변수에 문자열 '초코파이' 대입
    console.log(`A방에서 먹는 간식 : ${snack}`); //전역변수 호출(roomA 호출해야 가능)
}
function roomB(){//함수 블록 스코프 안
    let drink = '콜라'
    console.log(`B방에서 먹는 간식 : ${snack}, ${drink}`); //전역변수 호출(roomB 호출해야 가능)
}

//---------------------------지역&전역변수 문제3
//지갑에 든 물건 예측하기
//지갑 - 동전, 지갑 - 지폐

//변수의 이름이 같아도 그 변수가 전역/지역으로 나눠져 있다면 동일설정이 가능하다.
//변수
let wallet = '동전'; //전역변수

//함수호출
bank(); //결과 : 지역변수 값 지폐
console.log(`wallet : ${wallet}`); //결과 : 전역변수 값 동전

function bank(){
    let wallet = '지폐' //지역변수
    console.log(`wallet : ${wallet}`);
}

//--------------------------------함수 내 전달인자(매개변수)
//함수가 반복도리때마다 데이터를 바꾸고 싶을 때 매개변수가 필요하다.
//매개변수 : 함수를 호출할 때마다 데이터를 받는 변수를 함수 내에서 생성
//오늘의 급식 메뉴(학생이 요청하면 급식 메뉴 호출)

//함수호출
school('부대찌개'); //학생1 요청 -> 호출
school('파스타'); //학생2 요청 -> 호출
school(); //학생3 요청

//함수준비
function school(meals = '김밥'){ //매개변수는 let, const 없이도 알아서 변수인식 함.
    // let meals = '부대찌개';
    console.log(`오늘의 급식 메뉴 : ${meals}`);
}

//------------------------------------매개변수 활용 함수 응용2.
//핸젤과 그레텔의 집찾기 재료(매개변수) 찾아주기

//함수추출
house('돌맹이')
house('빵부스러기')

//함수준비
function house(stuff){
    let story = '';
    story += `헨젤은 ${stuff}를(을) 떨어뜨리면서 숲으로 갔습니다.`
    story += `계모가 떠나고`
    story += `헨젤은 ${stuff}를(을) 따라서 집으로 돌아갔습니다.`
    console.log(story);
}

//--------------------------------커피주문 매개변수 함수
//출력예시) 손님 요청에 따라 다른 메뉴와 잔 수가 출력
//카페라떼 1잔 주문완료
//아메리카노 2잔 주문완료


coffee('카페라떼')
coffee('아메리카노','2')

function coffee(menu, num=1){
    console.log(`${menu} ${num}잔 주문완료`)
}

//--------------------------장바구니 함수+매개변수
//한라봉3kg 25,900원 1개
//치아바타 샌드위치 11,880원 2개

cart('한라봉3kg', 25900,);
cart('치아바타 샌드위치', 11880, 2);

function cart(name1, price, number = 1){
    let item = ''
    item += `상품명 :${name1}`;
    item += `가격 :${price.toLocaleString('ko-kr')}원`;
    item += `수량 :${number}개`;
    console.log(item);
}


//--------------------------커피주문 혼자연습
//카페메뉴배열
const menuAll = ['카페라떼','아메리카노','녹차라떼'];
const hotIce = ['따뜻한','차가운']
console.log(menuAll[1]);

cafe(0, 0, 2);
cafe(1, 1);
cafe(0, 2, 2);
cafe(1, 1);

function cafe(temp, coffee, num = 1){
    console.log(`${hotIce[temp]} ${menuAll[coffee]} ${num}잔 주문 완료되었습니다.`);
}
# <바닐라 js로 크롬 앱 만들기-강의 정리>

## 1. why js?!

- 배경 : 넷스케이프 > 자바스크립트 만듬 / 인터렉션한 모션을 위해
- 브라우저가 있으면 설치가 필요 없음 (브라우저는 폰, 컴퓨터에 모두 기본으로 설치되어 있음)
- 모든 웹사이트에서 자바스크립트를 씀 (에어비앤비, 구글, 페이스북 등등)
- three.js > 자바스크립트로 3D를 구현한 웹사이트
- 일렉트론 : vs코드 만드
- 3d, 실시간, 머신러닝 등등에 사용

## 2. 데이터 타입

- String : 처음부터 끝까지 글자로 이루어진 문자열 > "" 붙임
- Number
- Boolean : ture, false > "" 안붙임
- null : 값이 존재하지 않음 >> 변수가 존재하고 값이 주어졌는데 그 값이 null(= 비어있음) 인 경우 =/= false
- undefined : 정의되지 않음, 변수는 있는데 값이 주어지지 않은 경우 > 문자x, 타입o

## 3. 변수

- const : 재선언 금지(변수의 값 업데이트), 재할당 금지
- let : 재선언 금지, 재할당 가능(변수 업데이트)
- var : 재선언 가능, 재할당 가능

## 4. Arrays 배열

- 데이터 타입 모두 넣기 가능
- 배열 변수[배열 순서의 넘버]
- 데이터 받아오기, 수정하기 가능
- 목적 : 하나의 변수 안에 데이터의 리스트를 가지는 것

## 5. Object

```js
const 배열 = {
  //특성 작성
  변수1: 값1,
  변수2: 값2,
  변수3: 값3,
};
```

- 값 출력 방식 : 배열.변수1 또는 배열["변수1"]
- 값 수정 및 추가
  > 배열.변수1 = 변경할 값
  > 배열. 변수4 = 값4

## 6. function

- 코드를 최소화 해서 재활용 가능하게 함

```js
function 변수1(데이터) {}
```

- 변수1.( ) >> .( ) 실행버튼같은 역할

## 7. return

- 함수를 실행할 때 작업 처리 및 밖이랑 연결하는 역할
- 함수안에 실행할 함수식 넣고 밖에 변수 설정 후 함수 활용할 때, 함수 안에 return이 함수 밖의 변수와 연결하고 반환값을 줌
- function 안에서 값을 내보내는게 아니라 return을 통해 함수를 호출한 애한테 값을 주고 또 다른 함수를 호출하는데 씀
  > 함수를 통해 결과값을 받기 원할 때 사용
- return 한 값을 함수 밖에서 재사용(또다른 함수에 활용) 해서 값을 도출하는데 씀

## 8. 조건문

## 9. html과 object

- 콘솔창에 document 치면 title같은데 object의 변수 로 나옴 > document 를 object 로 봄

## 10. 선택자

- getElementBy ~
- querySelector : element 를 css방식으로 검색 ("#wrap .main .box h1:frist-child") 으로 선택 가능

## 11. 이벤트

- addEventLister(" 이벤트 ") > 이벤트종류는 console.dir( ) 통해서 on이벤트 확인가능

```js
.addEventLister("click") = .onClick
```

## 12. CSS in Javascript

```js
.style.cssStyleOption = "styleResult"
```

- 클래스 생성 후 스타일 만들어서 .className = "클래스"로 적용
  > > 클래스 잘못적을 수 도 있어서 const 클래스변수 = "클래스" 로 변수 설정
  > > 이전에 설정한 클래스 사라짐..

```js
.classList.contains( 새로운 클래스 ) // 이전에 설정한 클래스 그대로 있음!
    /*
    classList.remove
    classList.add
    toggle( 새로운 클래스 )
    */
```

## 13. Javascript로 value 기억하기

- submit 버튼 클릭하면 value 받고 새로고침 됨 (기본 동작)

```js
function 변수(event) {
  event.preventDefault();
} //event 는 생략가능
```

> > preventDefault() 넣어주기

- 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
- localStorage : 브라우저에 뭔가를 저장하게 해줌 (개발자도구를 통해 확인 가능)
  > localStorage.setItem(--, -- )
  > localStorage.getItem( )
  > localStorage.removeItem( )
  >
  > > 미니 DB같은 개념으로 이해하기

## 14. setInterval / setTimeout

## 15. padStart(n,"?")

- string이 n개 미만의 길이를 가질 경우 앞에? 를 추가해줌
- number 형식을 string으로 만들 경우, String( ).padStart(n,"" )
- pad = padding

## 16. 자바스크립트에서 html 엘리먼트 생성하기

- createElement
- appendChild() : 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
- prependChild() : 반대로 앞에서 기입

## 17. event.target

## 18. todo list 저장하기

```js
const 함수1 = [];
//빈 배열 만들어주기

JSON.stringify(item);
//안에 값이 뭐든 간에 그걸 string으로 바꿔줌 >> ["",""] 배열처럼 보여지는데 배열은 아님 String

JSON.parse();
//string 을 javscript object로 만들어줌 >> 모든 함수가 다 실행된 후에 코드 실행되게 마지막에 넣기

array.foreach;
//받아온 array를 for 반복문 없이 item 하나씩 function에 넣을 수 있음
```

## 18. todo list 에 id값 설정해주기

- Date.now() : 랜덤한 값
  > > 고유한 아이디를 생성

## 19. filter > 선택옵션

```js
 .filter(item){ return 옵션 }
 .filter(item => 옵션 )
```

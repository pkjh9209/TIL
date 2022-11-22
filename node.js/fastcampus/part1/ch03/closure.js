/*
    closure = function + environment
    closure 는 function 이 하나 생길떄마다 하나씩 생김
    environment는 함수 자신을 둘러싼, 접근할 수 있는 모든 스코프
*/ 

function and(x) {
    return function print(y) {
        return x + ' and ' + y
    }
}

// ex01-1
const saltAnd = and('salt');
console.log(saltAnd('pepper'));     // salt and pepper
console.log(saltAnd('suger'));      // salt and suger

// 함수 : print
// 환경 : x -> "salt"
//  - closure 는 higher-order function 을 만드는데 유용

// ex01-2
const waterAnd = and('water');
console.log(waterAnd('juice'));     // water and juice


// ex02
function getCounter(){
    var result = {
        conut : count,
        total : 0
    }

    function count(){
        result.total += 1;
    }

    return result;
}

var counter = getCounter();
var counter02 = getCounter();

// 함수가 선언될때마다 closure가 생성, getCounter에 count 함수가 바인딩됨
counter.conut();
counter.conut();
counter02.conut();
counter02.conut();
counter02.conut();
counter02.conut();

console.log("ex02-1 : " + counter.total);
console.log("ex02-2 : " + counter02.total);
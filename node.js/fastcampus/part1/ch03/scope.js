// 가장 가까운 스코프에서 일치하는 변수에 바인딩됨

function foo(){
    let x = 1;

    function bar(){
        console.log(x);
    } // inner scope

    return bar();
} // outer scope

foo();
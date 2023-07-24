if(true){
    var x = 3;
}
console.log(x); // 3

if(true){
    const y = 3;
}
console.log(y); //error

//var 의경우 함수스코프 이므로 if의 블록과 관계없이 접근가능
//const,let 은 블록 스코프이므로 블록 밖의 변수에서는 접근 x
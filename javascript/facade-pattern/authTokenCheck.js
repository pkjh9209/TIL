// 휴대전화번호 검증 함수 예시
export function checkValidationPhone(phoneNumber){
    if(phoneNumber.length !== 10 && phoneNumber.length !== 11){
        console.log('error - not a number');
        return false;
    }else{
        return true;
    }
}

// 인증토큰 만들기 함수 예시
export function getToken(count) {
    // 테스트용 인증토큰 구문 예시
    if (count === undefined) {
        console.log('error - There is no auth value');
        return;
      } else if (count <= 0) {
        console.log('error - The auth number is small');
        return;
      } else if (count > 10) {
        console.log('error - There are a lot of auth numbers');
        return;
      }
  
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count,'0');
    return result;
}

// 토큰 문자 보내기 함수 예시
export function sendTokenToSMS(phoneNumber,token){
    console.log('휴대폰번호 - '+phoneNumber+', 토큰 - '+ token + '전송완료');
}
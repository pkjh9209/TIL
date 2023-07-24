//퍼사드패턴 예시코드
import { checkValidationPhone, getToken, sendTokenToSMS } from './authTokenCheck.js';

// 인증함수 (토큰만들기,휴대전화번호검증,문자보내기)
function createTokenOfPhone(phoneNumber, count) {
    // 휴대전화번호 체크 예시
    const isValid = checkValidationPhone(phoneNumber);  
    if (isValid === true) {
      // 테스트용 핸드폰 토큰 6자리 만들기
      const token = getToken(count);
  
      // 간단한토큰전송예시
      sendTokenToSMS(phoneNumber, token);
    }
}

createTokenOfPhone('01055550000',6);



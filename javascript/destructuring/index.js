// 구조분해할당 함수 - 템플릿의 예시
// 객체구조분해할당 - 명칭이 중요, 배열구조분해할당 - 순서가중요
function getCustomerTemplate({ name, age, address, createdAt }) {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>지역: ${address}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `;
}

// backend value example
let name = 'customerKim';
let age = 20;
let address = 'seoul';
let createdAt = '2023-01-01';

console.log(getCustomerTemplate({name,address,createdAt,age}));
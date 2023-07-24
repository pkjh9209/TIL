// function findAndSaveUser(Users) {
//     Users.findOne({})
//         .then((user) => {
//             user.name = 'zero';
//         })
//         .then((user) => {
//             return Users.findOne({gender:'m'});
//         })
//         .then((user) => {
//             //생략
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }

const findAndSaveUser = async (Users) => {
    try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
      // 생략
    } catch (error) {
      console.error(error);
    }
  };
  // 비동기 작업시 promise의 then과 catch가 반복될떄 사용하면 유용함
  // 코드의 깊이가 세단계 이상 깊어지지않음 try catch로 감싸 error를 catch로 처리함
// ----------전

let sayNode = function(){
    console.log('node');
}
let es = 'ES'
// let oldObject ={
//     sayJs: function () {
//         console.log('JS')
//     },
//     sayNode: sayNode,
// };

// oldObject[es + 6] = 'Fantastic';
// oldObject.sayNode();
// oldObject.sayJs();
// console.log(oldObject.ES6);

// ----------후

const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]:'Fantastic',
};

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
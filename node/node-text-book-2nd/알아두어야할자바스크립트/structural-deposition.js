// 바꾸기전
var candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy : function () {
        this.status.count--;
        return this.status
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;



//바꾼후

var candyMachine2 = {
    status:{
        name : 'node',
        count02 : 5,
    },
    getCandy02(){
        this.status.count02--;
        return this.status.count02;
    },
};

const { getCandy02,status:{count02} } = candyMachine2;

console.log(getCandy02);

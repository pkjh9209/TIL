function add1(x,y) {
    return x+y;
}

const add2 = (x,y) => {
    return x+y;
}

const add3 = (x,y) => x + y;

const add4 = (x,y) => (x + y);

function not1(x) {
    return !x;    
}

const not2 = x => !x;
// add1,add2,add3,add4 모두 같은 함수임 , add3과 add4는 return 문을 줄일수 있는 효과가있음


var relationship1 = {
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function(friends){
            console.log(that.name, friends);
        });
    },
};

relationship1.logFriends();

var relationship2 = {
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(friends => {
            console.log(that.name, friends);
        });
    },
};

relationship2.logFriends();
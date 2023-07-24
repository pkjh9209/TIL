var Human = function(type) {
    this.type = type || 'human';
  };
  
  Human.isHuman = function(human) {
    return human instanceof Human;
  }
  
  Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
  };
  
  var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
  };
  
  Zero.prototype = Object.create(Human.prototype);
  Zero.prototype.constructor = Zero; // 상속하는 부분
  Zero.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
  };
  var oldZero = new Zero('human', 'Zero', 'Cho');
  Human.isHuman(oldZero); // true

  // 해당 프로토타입 문법 코드를 class-2.js 로 변환가능
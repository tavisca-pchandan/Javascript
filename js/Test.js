function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.sayHello = function() {
  alert("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");
var helloFunction = person1.sayHello;

person1.sayHello();                                 // alerts "Hello, I'm Alice"
person2.sayHello();                                 // alerts "Hello, I'm Bob"
helloFunction();                                    // alerts "Hello, I'm undefined" (or fails
                                                    // with a TypeError in strict mode)
alert(helloFunction === person1.sayHello);          // alerts true
alert(helloFunction === Person.prototype.sayHello); // alerts true
helloFunction.call(person1);  
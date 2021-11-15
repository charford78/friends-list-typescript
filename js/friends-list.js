"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bff) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friend.printHeader = function () {
        return "Name    | Age  | Email        | Bff      ";
    };
    Friend.prototype.print = function () {
        return this.name + " | " + this.age + " | " + this.email + " | " + this.bff;
    };
    return Friend;
}());
var friends = [
    new Friend("Andy", 40, "andy@dcubed.com", true),
    new Friend("Beef", 35, "beef@dcubed.com", false),
    new Friend("Gwar", 52, "gwar@dcubed.com", false),
    new Friend("Bean", 38, "bean@dcubed.com", true),
    new Friend("Wolfbait", 43, "wolfbait@dcubed.com", false)
];
console.log(Friend.printHeader());
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var f = friends_1[_i];
    console.log(f.print());
}

console.log("Tut 9 object prototype");
function obj(name, age) {
    this.name = name
    this.agr = age

}
obj.prototype.getname = function () {
    return this.name
}
obj.prototype.setname = function (name) {
    this.name = name
}
let obj1 = new obj('na', 45)
console.log(obj1);
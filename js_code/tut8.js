//object oriented wtih obj
console.log("oops running tut 8");
let car = {
    name: 'lamborgini',
    topspeed: 390,
    run: function () {
        console.log("nitro");
    }
}
// console.log(car);
// console.log(car.run());

function supercar(name, topspeed) {
    this.name = name
    this.topspeed = topspeed
    this.run = function () {
        return `${this.name} is running speed of ${this.topspeed}`;
       
    }
    this.compaire = function () {
        return `${this.name} is slower than Bucati speed of ${this.topspeed}`;
    }

}
let car1 = new supercar('bucati chiron', 499)
let car2 = new supercar('Farrie', 300)
console.log(car1.run());
console.log(car2.compaire());
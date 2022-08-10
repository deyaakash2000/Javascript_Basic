
console.log("tut10");
// let obj ={
//     name:'aaksdd',
//     age :34
// }

// localStorage.setItem('data',JSON.stringify(obj))
console.log("ES6 inheritance");
//ES6 inheritance
class employee {
    constructor(name, age, exp, location) {
        this.name = name
        this.age = age
        this.exp = exp
        this.location = location
    }
    joiningyear() {
        return 2022 - this.exp;
    }
    personalDetails() {
        return `name ${this.name}, age ${this.age}, location ${this.location}`
    }
    static add(a, b) {
        return a + b
    }
}
class programmer extends employee{
    constructor(name, age, exp, location,language) {
        super(name, age, exp, location)
        this.language = language
        
    }
  programmerDetails(){
    return `name ${this.name}, age ${this.age}, location ${this.location}, language ${this.language}`
  }
}

empl = new programmer("Aakash",34,5,"kolkata","python")
console.log(empl.personalDetails());
console.log(empl.programmerDetails());
console.log(employee.add(3,8));
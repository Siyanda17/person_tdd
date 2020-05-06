class Person{
    constructor(name,age,gender,interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    hello(){
        let greet = ''
        if(this.interests.length == 1){
            greet = `Hello, my name is ${this.name} and I am ${this.age} years old. My interest is being ${this.interests[0]}`;
        }
        else{
            let interest = ''
            for(let i = 0;i<this.interests.length-1;i++){
                interest += this.interests[i]
                if(i != this.interests.length-2 ){
                    interest += ', '
                }
            }
            interest += ' and ' + this.interests[this.interests.length - 1]
            greet = `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are being a ${interest}.`
        }
        return greet
    }
}
module.exports = {Person}
let being = new Person("Ryan",30,"male",['hardarse','agile','ssd harddrive'])
console.log(being.name)




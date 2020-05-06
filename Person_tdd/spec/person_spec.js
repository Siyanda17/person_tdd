const {Person} = require("../src/person")
const person = new Person("Ryan",30,"male",['hardarse','agile','ssd harddrive'])

describe("Person ",function(){
    it("Should give a name",() =>{
        expect(person.name).toEqual("Ryan")        
    })

    it("Should give an age",() =>{
        expect(person.age).toEqual(30)
    })

    it("Should give a gender",() =>{
        expect(person.gender).toEqual('male')
    })
    
    it("Should give interests",() =>{
        expect(person.interests).toEqual(['hardarse','agile','ssd harddrive'])
    })
})

describe("Hello method",() => {
    it("Should greet",() =>{
        expect(person.hello()).toBe("Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd harddrive.")
    })
})
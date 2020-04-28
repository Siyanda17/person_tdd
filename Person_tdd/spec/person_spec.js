const {person} = require("../src/Person")

const inst = new person("Siya",30,"male",["agile",'ssd'])
describe("instanceOfPerson",function(){
    it("Should check if a person name is the same as the name which was passed to person class",function(){
        expect(inst.name).toEqual("Siya")        
    })
    it("Should check if a person age is the same as the age which was passed to person class",function(){
        expect(inst.age).toEqual(30)
    })
    it("Should check if a person gengder is the same as the gender which was passed to person class",function(){
        expect(inst.gender).toEqual('male')
    })
    it("Should check if a person interests are the same as the interests which ware passed to person class",function(){
        expect(inst.interests).toEqual(['agile','ssd'])
    })
})

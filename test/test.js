const { expect } = require("chai")
const { str } = require("../index")

describe("String Concatentation", () => {
    it("message should not be emtpy", () => {
        expect(str).to.not.equal("")
    })
    it("message should say 'Hello there, Bruce!'", () => {
        expect(str).to.equal("Hello there, Bruce!")
    })
})
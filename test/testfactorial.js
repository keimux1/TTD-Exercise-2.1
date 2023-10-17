const assert = require("chai").assert;
const factorial = require("../js/factorial");

describe("testing factorial function", function (){

    it("0! = 1",function(){
        assert.equal(factorial(0), 1);
    });

    it(" 1! = 1",function(){
        assert.equal(factorial(1), 1);
    });

    it(" 3! = 6",function(){
        assert.equal(factorial(3), 6);
    });

    it(" 10! = 3628800",function(){
        assert.equal(factorial(10), 3628800);
    });

    // it(" -1! = ?",function(){
    //     assert.equal(factorial(-1), -1);
    // });


});

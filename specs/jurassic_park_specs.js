var assert = require("assert");
var Dinosaur = require("../jurassic_park.js");

describe( "Dinosaur", function(){

  it( "should have a type", function(){
    var dinosaur1 = new Dinosaur ("Tyrannosaurus");
    assert.strictEqual( dinosaur1.type, "Tyrannosaurus");

    it( "should have a offspring", function(){
    dinosaur1.addOffspring("Not The Moma!")
      assert.strictEqual( dinosaur1.offspring.length, 1);
    })

});





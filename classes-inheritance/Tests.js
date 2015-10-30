describe("check .getName() method", function() {

  it("Aban", function() {
    assert.equal(_DogClass.getName() === 'Aban', true);
  });

});
describe("check .bark() method", function() {

  it("Dog Aban is barking", function() {
    assert.equal(_DogClass.bark() === 'Dog Aban is barking', true);
  });

});

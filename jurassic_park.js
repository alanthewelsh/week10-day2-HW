var Dinosaur = function (type){
  this.type = type;
  this.offspring = [];
  this.addOffspring = function (offspring){
    this.offspring.push(offspring);
  }
};

